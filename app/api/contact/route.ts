import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_REQUESTS = 5;
const WINDOW_MS = 10 * 60 * 1000;
const recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (recentRequests.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  recentRequests.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Cerere invalidă.' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field, bots usually do.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Ai trimis prea multe mesaje. Te rugăm să încerci din nou peste câteva minute.' },
      { status: 429 },
    );
  }

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 30);
  const email = clean(body.email, 120);
  const service = clean(body.service, 100);
  const message = clean(body.message, 3000);

  if (name.length < 2) {
    return NextResponse.json({ error: 'Te rugăm să completezi numele.' }, { status: 400 });
  }
  if (!/^[+()\d\s.-]{6,30}$/.test(phone)) {
    return NextResponse.json({ error: 'Numărul de telefon nu pare valid.' }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Adresa de email nu pare validă.' }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ error: 'Mesajul este prea scurt.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error('Contact form: RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not set.');
    return NextResponse.json(
      { error: 'Momentan nu putem trimite mesajul. Te rugăm să ne suni la +40 799 676 512.' },
      { status: 500 },
    );
  }

  const rows: Array<[string, string]> = [
    ['Nume', name],
    ['Telefon', phone],
    ['Email', email || 'necompletat'],
    ['Serviciu dorit', service || 'necompletat'],
  ];

  const text = `${rows.map(([label, value]) => `${label}: ${value}`).join('\n')}\n\nMesaj:\n${message}`;
  const html = `
    <h2>Solicitare nouă de pe site</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`)
        .join('')}
    </table>
    <p><strong>Mesaj:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Solicitare nouă de pe site: ${name}`,
      text,
      html,
      ...(email ? { reply_to: email } : {}),
    }),
  });

  if (!response.ok) {
    console.error('Contact form: Resend error', response.status, await response.text());
    return NextResponse.json(
      { error: 'Mesajul nu a putut fi trimis. Te rugăm să încerci din nou sau să ne suni la +40 799 676 512.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
