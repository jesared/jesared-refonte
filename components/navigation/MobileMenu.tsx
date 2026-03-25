"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { navigationLinks } from "@/components/navigation/nav-links";
import { cn } from "@/lib/utils";

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const { body } = document;
    const scrollY = window.scrollY;
    const previousOverflow = body.style.overflow;
    const previousPosition = body.style.position;
    const previousTop = body.style.top;
    const previousWidth = body.style.width;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      body.style.overflow = previousOverflow;
      body.style.position = previousPosition;
      body.style.top = previousTop;
      body.style.width = previousWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-background text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label="Ouvrir le menu"
      >
        <MenuIcon />
      </button>

      {mounted
        ? createPortal(
            <>
              <div
                className={cn(
                  "fixed inset-0 z-[9998] bg-black/70 transition-opacity duration-200",
                  isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                )}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />

              <aside
                id="mobile-nav-panel"
                className={cn(
                  "fixed inset-0 z-[9999] flex h-full w-full flex-col bg-background text-foreground transition-transform duration-300 ease-out",
                  isOpen ? "translate-x-0" : "translate-x-full"
                )}
                aria-label="Navigation mobile"
              >
                <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/70">Menu</p>
                    <p className="mt-1 text-base font-semibold">Jesared Studio</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="Fermer le menu"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <nav aria-label="Navigation principale mobile" className="flex-1 overflow-y-auto px-6 py-6">
                  <ul className="flex flex-col gap-3">
                    {navigationLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-lg border border-border/60 bg-card/30 px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="border-t border-border/60 px-6 py-4 text-sm text-muted-foreground">
                  Créons un projet clair et élégant, pensé pour convertir.
                </div>
              </aside>
            </>,
            document.body
          )
        : null}
    </div>
  );
}
