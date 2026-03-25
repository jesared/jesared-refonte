import { PageContainer } from "@/components/layout/page-container";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-background">
      <PageContainer>
        <div className="flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-foreground">Jesared</p>
            <p>© {new Date().getFullYear()} Jesared. Tous droits réservés.</p>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <ul className="flex items-center gap-4">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="mailto:contact@jesared.fr" className="transition-colors hover:text-foreground">
              contact@jesared.fr
            </a>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
