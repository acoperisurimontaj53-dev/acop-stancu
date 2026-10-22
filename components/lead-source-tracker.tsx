'use client';

import { useEffect } from 'react';
import { captureLeadSource } from '@/lib/lead-source';

export function LeadSourceTracker() {
  useEffect(() => {
    captureLeadSource();
  }, []);

  return null;
}
