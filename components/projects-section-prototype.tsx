"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Github,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

// PROTOTYPE: Three projects-section directions, switchable with ?variant=A|B|C.
const projects = [
  {
    key: "markdeck",
    name: "MarkDeck",
    premise: "Markdown in. A collaborative slide deck out.",
    description:
      "A presentation workspace that turns LLM-generated Markdown into structured slide decks, with role-based sharing and an observable delivery stack.",
    stack: ["React", "TypeScript", "Express", "MySQL", "Grafana / Loki"],
    website: "https://markdeck.xyz/",
    repository: "https://github.com/MohsenKhouaja/MarkDeck",
  },
  {
    key: "sres",
    name: "SREs",
    premise: "Parallel investigation. Human-approved remediation.",
    description:
      "A multi-agent incident-response system where agents inspect logs, metrics, and events in parallel while operators retain control of remediation.",
    stack: ["Python", "LangGraph", "Next.js", "FastAPI", "Prometheus / Loki"],
    website: "https://trysres.xyz/",
    repository: "https://github.com/MohsenKhouaja/SREs",
  },
] as const;

type Project = (typeof projects)[number];
type VariantKey = "A" | "B" | "C";

const variants: { key: VariantKey; name: string }[] = [
  { key: "A", name: "Case study" },
  { key: "B", name: "Project index" },
  { key: "C", name: "System map" },
];

function ProjectLinks({ project, inverted = false }: { project: Project; inverted?: boolean }) {
  const linkClass = cn(
    "inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-65",
    inverted ? "decoration-background/40" : "decoration-border",
  );

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      <a href={project.website} target="_blank" rel="noopener noreferrer" className={linkClass}>
        Live project <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
      <a href={project.repository} target="_blank" rel="noopener noreferrer" className={linkClass}>
        Source <Github className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.key === "markdeck") {
    return (
      <div className="flex aspect-[5/4] flex-col overflow-hidden border border-border bg-secondary" aria-hidden="true">
        <div className="flex h-8 items-center gap-1.5 border-b border-border bg-background px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/25" />
          <span className="ml-auto h-1.5 w-14 bg-foreground/10" />
        </div>
        <div className="grid flex-1 grid-cols-[28%_1fr]">
          <div className="space-y-2 border-r border-border bg-background p-3">
            {["bg-foreground", "bg-background", "bg-background"].map((tone, index) => (
              <div key={index} className={cn("aspect-[4/3] border border-border p-1.5", tone)}>
                <div className={cn("h-1 w-2/3", index === 0 ? "bg-background/70" : "bg-foreground/20")} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center p-5">
            <div className="flex aspect-[4/3] w-full flex-col justify-end bg-foreground p-5 text-background shadow-sm">
              <div className="mb-2 h-1 w-10 bg-background/45" />
              <div className="h-2 w-4/5 bg-background" />
              <div className="mt-2 h-1 w-2/5 bg-background/55" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden border border-border bg-foreground p-6 text-background" aria-hidden="true">
      <div className="absolute inset-x-6 top-5 flex justify-between text-[10px] text-background/55">
        <span>INCIDENT / 042</span>
        <span>INVESTIGATING</span>
      </div>
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="space-y-2">
          {["Logs", "Metrics", "Events"].map((label) => (
            <div key={label} className="border border-background/25 px-2 py-1.5 text-[10px]">{label}</div>
          ))}
        </div>
        <div className="h-px w-5 bg-background/35" />
        <div className="border border-background/40 p-3">
          <div className="mb-3 text-xs font-semibold">Agent crew</div>
          <div className="space-y-1.5">
            <div className="h-1 w-full bg-background/60" />
            <div className="h-1 w-4/5 bg-background/30" />
            <div className="h-1 w-2/3 bg-background/30" />
          </div>
          <div className="mt-4 flex items-center gap-1 text-[9px] text-background/70">
            <ShieldCheck className="h-3 w-3" /> Approval gate
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ note }: { note: string }) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4">
      <h2 className="text-2xl font-semibold text-balance">Selected Projects</h2>
      <span className="hidden text-sm text-muted-foreground sm:block">{note}</span>
    </div>
  );
}

function VariantA() {
  return (
    <section id="projects">
      <SectionHeading note="Built from interface to infrastructure" />
      <div className="space-y-14">
        {projects.map((project, index) => (
          <article key={project.key} className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className={cn(index % 2 === 1 && "md:order-2")}>
              <ProjectVisual project={project} />
            </div>
            <div className={cn("md:px-3", index % 2 === 1 && "md:order-1")}>
              <span className="text-sm tabular-nums text-muted-foreground">0{index + 1} / 02</span>
              <h3 className="mt-3 text-3xl font-semibold text-balance">{project.name}</h3>
              <p className="mt-2 text-base font-medium text-foreground">{project.premise}</p>
              <p className="mt-4 leading-7 text-muted-foreground text-pretty">{project.description}</p>
              <div className="my-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <ProjectLinks project={project} />
            </div>
          </article>
        ))}
      </div>
      <PracticeNote />
    </section>
  );
}

function VariantB() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <section id="projects">
      <SectionHeading note="Choose a project to inspect" />
      <div className="border-y border-border md:grid md:min-h-[430px] md:grid-cols-[220px_1fr]">
        <div className="flex border-b border-border md:flex-col md:border-b-0 md:border-r">
          {projects.map((item, index) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setSelected(index)}
              className={cn(
                "flex min-h-16 flex-1 items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium transition-colors md:flex-none",
                selected === index ? "bg-foreground text-background" : "hover:bg-secondary",
              )}
              aria-pressed={selected === index}
            >
              {item.name}
              <ArrowRight className="hidden h-4 w-4 md:block" aria-hidden="true" />
            </button>
          ))}
          <div className="mt-auto hidden p-4 text-xs leading-5 text-muted-foreground md:block">
            Two end-to-end products. One preference: make complex systems legible.
          </div>
        </div>
        <article className="grid gap-7 px-5 py-7 sm:px-7 md:grid-rows-[auto_1fr_auto] md:p-9">
          <div className="flex items-start justify-between gap-5">
            <div>
              <span className="text-sm text-muted-foreground">0{selected + 1} / 02</span>
              <h3 className="mt-2 text-4xl font-semibold text-balance">{project.name}</h3>
            </div>
            <span className="hidden rounded-full border border-border px-3 py-1 text-xs sm:block">Full stack</span>
          </div>
          <div className="grid gap-7 self-center sm:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-xl font-medium leading-7 text-pretty">{project.premise}</p>
              <p className="mt-4 leading-7 text-muted-foreground text-pretty">{project.description}</p>
            </div>
            <dl className="border-t border-border text-sm sm:border-l sm:border-t-0 sm:pl-6">
              <dt className="mt-4 text-muted-foreground sm:mt-0">Core stack</dt>
              <dd className="mt-3 space-y-2">
                {project.stack.map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" /> {item}
                  </span>
                ))}
              </dd>
            </dl>
          </div>
          <ProjectLinks project={project} />
        </article>
      </div>
      <PracticeNote />
    </section>
  );
}

function FlowNode({ title, body }: { title: string; body: string }) {
  return (
    <div className="min-h-24 border border-background/30 p-3">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-xs leading-5 text-background/65">{body}</div>
    </div>
  );
}

function VariantC() {
  return (
    <section id="projects" className="bg-foreground px-5 py-8 text-background sm:px-8 sm:py-10">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold text-balance">Systems, not screenshots.</h2>
        <p className="mt-3 max-w-xl leading-7 text-background/65 text-pretty">
          Two products mapped by what enters the system, what the software coordinates, and where trust is enforced.
        </p>
      </div>
      <div className="mt-10 space-y-12">
        <article>
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-2xl font-semibold">MarkDeck</h3>
            <ProjectLinks project={projects[0]} inverted />
          </div>
          <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            <FlowNode title="Input" body="LLM-generated Markdown" />
            <ArrowRight className="mx-auto hidden h-4 w-4 text-background/40 sm:block" aria-hidden="true" />
            <FlowNode title="Workspace" body="Structured slides and collaborative editing" />
            <ArrowRight className="mx-auto hidden h-4 w-4 text-background/40 sm:block" aria-hidden="true" />
            <FlowNode title="Delivery" body="RBAC, CI/CD, metrics, and logs" />
          </div>
        </article>
        <article className="border-t border-background/20 pt-10">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-2xl font-semibold">SREs</h3>
            <ProjectLinks project={projects[1]} inverted />
          </div>
          <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            <FlowNode title="Signals" body="Logs, metrics, and service events" />
            <ArrowRight className="mx-auto hidden h-4 w-4 text-background/40 sm:block" aria-hidden="true" />
            <FlowNode title="Investigation" body="Specialized agents run in parallel" />
            <ArrowRight className="mx-auto hidden h-4 w-4 text-background/40 sm:block" aria-hidden="true" />
            <FlowNode title="Control" body="Human approval gates remediation" />
          </div>
        </article>
      </div>
      <div className="mt-10 border-t border-background/20 pt-5 text-sm text-background/65">
        Competitive programming: Codeforces Pupil, max rating 1292. {" "}
        <a href="https://codeforces.com/profile/MohsenKhouaja" target="_blank" rel="noopener noreferrer" className="text-background underline decoration-background/40 underline-offset-4">
          View profile
        </a>
      </div>
    </section>
  );
}

function PracticeNote() {
  return (
    <div className="mt-10 flex flex-col gap-2 border-t border-border pt-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <span><strong className="font-medium text-foreground">Competitive Programming</strong> · Codeforces Pupil · Max 1292</span>
      <a href="https://codeforces.com/profile/MohsenKhouaja" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium underline decoration-border underline-offset-4 hover:text-foreground">
        View profile <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}

function PrototypeSwitcher({ current, onChange }: { current: VariantKey; onChange: (key: VariantKey) => void }) {
  if (process.env.NODE_ENV === "production") return null;

  const index = variants.findIndex((variant) => variant.key === current);
  const cycle = (direction: -1 | 1) => {
    const next = (index + direction + variants.length) % variants.length;
    onChange(variants[next].key);
  };

  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex h-12 -translate-x-1/2 items-center border border-white/20 bg-neutral-950 px-1.5 text-white shadow-xl" aria-label="Project section prototype switcher">
      <button type="button" onClick={() => cycle(-1)} className="flex h-9 w-9 items-center justify-center hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Previous variant" title="Previous variant">
        <ArrowLeft className="h-4 w-4" />
      </button>
      <div className="min-w-36 px-3 text-center text-xs font-medium tabular-nums">
        {current} — {variants[index].name}
      </div>
      <button type="button" onClick={() => cycle(1)} className="flex h-9 w-9 items-center justify-center hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Next variant" title="Next variant">
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export function ProjectsSectionPrototype() {
  const [variant, setVariant] = useState<VariantKey>("A");

  const changeVariant = useCallback((next: VariantKey) => {
    setVariant(next);
    const url = new URL(window.location.href);
    url.searchParams.set("variant", next);
    window.history.replaceState({}, "", url);
  }, []);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("variant");
    if (requested !== "A" && requested !== "B" && requested !== "C") return;

    const frame = window.requestAnimationFrame(() => setVariant(requested));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches("input, textarea, [contenteditable='true']")) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

      const index = variants.findIndex((item) => item.key === variant);
      const direction = event.key === "ArrowLeft" ? -1 : 1;
      const next = (index + direction + variants.length) % variants.length;
      changeVariant(variants[next].key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeVariant, variant]);

  return (
    <>
      {variant === "A" && <VariantA />}
      {variant === "B" && <VariantB />}
      {variant === "C" && <VariantC />}
      <PrototypeSwitcher current={variant} onChange={changeVariant} />
    </>
  );
}
