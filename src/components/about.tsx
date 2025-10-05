export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl py-20">
      <div className="mb-12 border-border border-b pb-6">
        <h2 className="mb-4 font-bold text-4xl text-foreground tracking-tight md:text-5xl">
          I build modern software tailored to your needs.
        </h2>
        <p className="text-lg text-muted-foreground">
          Software Creator & SaaS Developer
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-foreground text-lg leading-relaxed">
          I specialize in crafting tailored software solutions, web
          applications, and modern SaaS products that solve real problems. With
          a focus on quality, scalability, and thoughtful design, I help
          businesses and individuals bring their ideas to life through custom
          software development.
        </p>
        <p className="text-foreground text-lg leading-relaxed">
          From initial concept to final launch, I work closely with clients to
          understand their unique needs and deliver solutions that are not only
          functional but also maintainable and built to scale. Whether you need
          a complete SaaS platform, a custom web application, or technical
          consulting, I bring both technical expertise and a designer's eye to
          every project.
        </p>
      </div>
    </section>
  );
}
