import { Github, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl py-10">
      <div className="mb-8 border-border border-b pb-4">
        <h2 className="font-semibold text-2xl text-foreground">Get In Touch</h2>
      </div>
      <div className="space-y-6">
        <p className="text-foreground text-lg leading-relaxed">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hello, feel free to
          reach out.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="default" asChild>
            <a href="mailto:jesus@example.com">
              <Mail className="mr-2 h-4 w-4" />
              jsstoniha@gmail.com
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="mr-2 h-4 w-4" />X (Twitter)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
