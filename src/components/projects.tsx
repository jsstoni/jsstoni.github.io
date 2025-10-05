import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const projects = [
  {
    title: 'nextjs-app-router',
    description: 'NextJS App Router',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'DrizzleORM'],
    github: '#',
    demo: '#',
  },
  {
    title: 'HeyHeroe',
    description: '🚧 Modern Job Board',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    github: '#',
    demo: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl py-10">
      <div className="mb-8 border-border border-b pb-4">
        <h2 className="font-semibold text-2xl text-foreground">
          Featured Projects
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <noindex>
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
