import { PageContainer } from "@/components/layout/page-container";

const footerLinks = [
  { label: "Mentions", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-background">
      <PageContainer>
        <div className="flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jésared. Tous droits réservés.</p>
          <ul className="flex items-center gap-4">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </footer>
  );
}
