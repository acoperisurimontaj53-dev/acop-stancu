"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const PHONE_NUMBER = "+40 799 676 512";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              {/* Call Button */}
              <motion.a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lg border border-border hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02, x: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Sunati acum</p>
                  <p className="text-xs text-muted-foreground">{PHONE_NUMBER}</p>
                </div>
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
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
                  <p className="text-xs text-muted-foreground">Scrieti-ne un mesaj</p>
                </div>
              </motion.a>

              {/* Email/Contact Page Button */}
              <motion.div
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
                    <p className="text-xs text-muted-foreground">Cereti o oferta</p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex h-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl ${
          isOpen ? "w-16" : "w-16 md:w-auto md:gap-3 md:px-7"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Inchide meniul de contact" : "Contacteaza-ne"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-7 w-7" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="h-7 w-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <span className="hidden md:inline text-lg font-semibold whitespace-nowrap">
            {PHONE_NUMBER}
          </span>
        )}
      </motion.button>
    </div>
  );
}
