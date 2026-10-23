"use client";

import { m, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const PHONE_NUMBER = "+40 743 364 243";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Contact Options */}
            <m.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              {/* Call Button */}
              <m.a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lg border border-border hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02, x: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Sunați acum</p>
                  <p className="text-xs text-muted-foreground">{PHONE_NUMBER}</p>
                </div>
              </m.a>

              {/* WhatsApp Button */}
              <m.a
                href={`https://wa.me/${PHONE_NUMBER.replace(/\s/g, "").replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lg border border-border hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02, x: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Scrieți-ne un mesaj</p>
                </div>
              </m.a>

              {/* Email/Contact Page Button */}
              <m.div
                whileHover={{ scale: 1.02, x: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Formular contact</p>
                    <p className="text-xs text-muted-foreground">Cereți o ofertă</p>
                  </div>
                </Link>
              </m.div>
            </m.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <m.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Închide meniul de contact" : "Contacteaza-ne"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <m.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-7 w-7" />
            </m.div>
          ) : (
            <m.div
              key="mail"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="h-7 w-7" />
            </m.div>
          )}
        </AnimatePresence>
      </m.button>
    </div>
  );
}
