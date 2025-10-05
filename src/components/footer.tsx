export function Footer() {
  return (
    <footer className="border-border border-t bg-muted/30">
      <div className="mx-auto max-w-5xl py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} JSSTONI. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with Astro & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
