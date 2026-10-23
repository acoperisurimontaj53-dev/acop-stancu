'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { OPEN_COOKIE_SETTINGS_EVENT, readConsent, saveConsent } from '@/lib/consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = readConsent();
    if (saved) setMarketing(saved.marketing);
    else setVisible(true);

    const reopen = () => {
      setMarketing(readConsent()?.marketing ?? false);
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const choose = (value: boolean) => {
    saveConsent({ marketing: value });
    setMarketing(value);
    setVisible(false);
    setShowDetails(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-text"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md sm:p-0"
    >
      <div className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-2xl">
        <h2 id="cookie-title" className="font-serif text-lg font-bold">
          Cookie-urile tale, alegerea ta
        </h2>
        <p id="cookie-text" className="mt-2 text-sm text-muted-foreground">
          Folosim cookie-uri de marketing (Google Ads) doar dacă ești de acord, ca să măsurăm câte persoane ne contactează
          în urma reclamelor. Site-ul funcționează la fel și dacă le refuzi. Detalii în{' '}
          <Link href="/confidentialitate#cookie-uri" className="font-medium text-primary underline underline-offset-2">
            Politica de Cookie-uri
          </Link>
          .
        </p>

        {showDetails && (
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-start justify-between gap-4 rounded-xl bg-muted p-3">
              <div>
                <p className="font-medium">Necesare</p>
                <p className="text-muted-foreground">Rețin această alegere. Nu pot fi dezactivate.</p>
              </div>
              <Switch checked disabled aria-label="Cookie-uri necesare, mereu active" />
            </div>
            <div className="flex items-start justify-between gap-4 rounded-xl bg-muted p-3">
              <div>
                <p className="font-medium">Marketing</p>
                <p className="text-muted-foreground">Google Ads: măsurarea apelurilor, mesajelor și cererilor de ofertă venite din reclame.</p>
              </div>
              <Switch checked={marketing} onCheckedChange={setMarketing} aria-label="Cookie-uri de marketing" />
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" className="flex-1" onClick={() => choose(false)}>
            Refuz
          </Button>
          {showDetails ? (
            <Button variant="outline" className="flex-1" onClick={() => choose(marketing)}>
              Salvează alegerea
            </Button>
          ) : (
            <Button variant="outline" className="flex-1" onClick={() => setShowDetails(true)}>
              Setări
            </Button>
          )}
          <Button className="flex-1" onClick={() => choose(true)}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}>
      {children}
    </button>
  );
}
