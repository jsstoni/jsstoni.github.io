import { ModeToggle } from '@/components/ModeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-4">
        <div>
          <h1 className="font-semibold text-foreground text-lg">Jesús Pérez</h1>
          <p className="text-muted-foreground text-sm">
            Software Creator & SaaS Developer
          </p>
        </div>

        <nav className="flex items-center gap-6">
          <a
            href="#about"
            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="#services"
            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
