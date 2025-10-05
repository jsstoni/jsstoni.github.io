import { Code, MessageSquare, Palette, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description:
      'Tailored software solutions built from the ground up to meet your specific business needs.',
  },
  {
    icon: Rocket,
    title: 'MVP Creation',
    description:
      'Rapid prototyping and development to validate your product idea and get to market quickly.',
  },
  {
    icon: Palette,
    title: 'SaaS Product Design',
    description:
      'End-to-end SaaS development with focus on user experience, scalability, and performance.',
  },
  {
    icon: MessageSquare,
    title: 'Technical Consulting',
    description:
      'Strategic guidance on architecture, technology stack, and best practices for your project.',
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl py-10">
      <div className="mb-8 border-b pb-4">
        <h2 className="font-semibold text-2xl text-foreground">Services</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: noindex
            <div key={index} className="group">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/10 transition-colors group-hover:bg-accent">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  {service.title}
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
