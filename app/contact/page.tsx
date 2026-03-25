import Image from "next/image";

import { PageContainer } from "@/components/layout";

const contacts = [
  {
    label: "Email",
    value: "contact@jesared.fr",
    href: "mailto:contact@jesared.fr",
  },
  {
    label: "Instagram",
    value: "@jesared",
    href: "https://instagram.com",
  },
  {
    label: "LinkedIn",
    value: "Jesared",
    href: "https://linkedin.com",
  },
  {
    label: "X",
    value: "@jesared",
    href: "https://x.com",
  },
];

export default function ContactPage() {
  return (
    <PageContainer>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Contact</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Si vous souhaitez discuter d’un projet ou d’une collaboration, vous pouvez me contacter.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/me.jpg"
                  alt="Portrait Jesared"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  priority
                />
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
              <h2 className="text-lg font-semibold tracking-tight">Informations de contact</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground sm:text-base">
                {contacts.map((contact) => (
                  <li key={contact.label}>
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                    >
                      <span className="font-medium text-foreground">{contact.label} :</span>
                      <span>{contact.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Envoyer un message</h2>
            <form className="mt-6 space-y-4" action="#" method="post">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Votre nom"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="vous@exemple.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Dites-moi en plus sur votre projet..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
