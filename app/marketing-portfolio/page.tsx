import { ArrowLeft, Github, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "MarkDeck",
    description:
      "Multi-user application that turns LLM-generated Markdown into structured presentation decks, with secure sharing and observable production services.",
    stack: "React, Vite, TypeScript, Node.js, Express, MySQL, Docker, Grafana, Loki",
  },
  {
    title: "SREs",
    description:
      "Multi-agent incident response platform that investigates logs, metrics, and events in parallel, with human-approved remediation and auditable decisions.",
    stack: "Python, LangGraph, LangChain, Next.js, FastAPI, MongoDB, Prometheus, Loki",
  },
  {
    title: "Warehouse Management System at Lanci LLC",
    href: "https://lanci.tn/",
    description:
      "Full-stack operational workflows for delivery handoff, fulfillment, zone management, and exception tracking across warehouse teams and drivers.",
    stack: "React, Vite, TypeScript, tRPC, PostgreSQL, Docker, CI/CD",
  },
];

export default function MarketingPortfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Technical Portfolio</h1>
          <p className="max-w-2xl text-xl text-muted-foreground">
            Selected engineering work across full-stack product development,
            collaborative systems, delivery workflows, and C++ fundamentals.
          </p>
        </header>

        <main className="space-y-6">
          {projects.map((project) => (
            <article key={project.title} className="rounded-md border p-6">
              <h2 className="text-2xl font-semibold">
                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-4 text-sm font-medium">{project.stack}</p>
            </article>
          ))}
        </main>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Let&apos;s Connect</h2>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="mailto:mohsen.khouaja@supcom.tn">
                <Mail className="mr-2 h-4 w-4" />
                Email me
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/MohsenKhouaja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
