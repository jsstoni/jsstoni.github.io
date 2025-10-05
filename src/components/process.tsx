export function Process() {
  const phases = [
    {
      number: '01',
      title: 'Design',
      description:
        'I collaborate closely with designers or work directly with client-provided designs. When needed, I can leverage AI-generated concepts or create fully custom layouts that align with your brand and vision.',
    },
    {
      number: '02',
      title: 'Development',
      description:
        'I build with Next.js using a custom open-source boilerplate specifically tailored for client projects. This ensures clean, maintainable code with modern best practices and optimal performance.',
    },
    {
      number: '03',
      title: 'Implementation',
      description:
        'I deploy with Vercel for seamless integration and reliability. I encourage clients to use the same platform for better adaptability, faster iterations, and superior performance.',
    },
  ];

  return (
    <section id="process" className="mx-auto max-w-5xl py-10">
      <div className="mb-8 border-b pb-6">
        <h2 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl">
          Process
        </h2>
        <p className="mt-2 text-muted-foreground">From concept to deployment</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {phases.map((phase) => (
          <div key={phase.number} className="flex gap-6">
            <div className="flex-shrink-0">
              <span className="font-bold text-5xl text-muted-foreground">
                {phase.number}
              </span>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="mb-3 font-semibold text-2xl text-foreground">
                {phase.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
