import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PortfolioClientControls } from "@/components/portfolio-client";
import { Button } from "@/components/ui/button";
import MohsenImg from "@/app/data/images/mohsen-khouaja.jpeg";

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Drizzle ORM",
  "tRPC",
  "Zod",
  "TanStack Query",
  "Python",
  "FastAPI",
  "Docker",
  "LangGraph",
  "LangChain",
  "MySQL",
  "MongoDB",
  "Prometheus",
  "Grafana",
  "Loki",
  "C++",
];

export function PortfolioComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-4">
        <header className="relative mb-16 text-center">
          <PortfolioClientControls />
          <Image
            src={MohsenImg}
            alt="Mohsen Khouaja"
            width={360}
            height={360}
            priority
            className="mx-auto mb-8 mt-24 aspect-square w-48 rounded-md object-cover md:w-56"
          />
          <h1 className="mb-2 text-3xl font-bold text-balance md:text-4xl">
            Mohsen Khouaja
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Full-Stack Software Engineer &amp; Engineering Student at SUP&apos;COM
          </p>
          <p className="mx-auto mb-4 mt-2 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Building reliable full-stack systems with{" "}
            <span className="font-bold text-primary">Python</span>,{" "}
            <span className="font-bold text-primary">TypeScript</span>, and{" "}
            <span className="font-bold text-primary">PostgreSQL</span>.
          </p>
          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="#experience" className="hover:underline">
              Experience
            </Link>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:mohsen.khouaja@supcom.tn">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email Mohsen</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="tel:+21694182021">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Call Mohsen</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/MohsenKhouaja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/mohsen-khouaja-7a8159270"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </header>

        <main className="space-y-16">
          <section id="about" className="text-center">
            <p className="text-primary">
              I&apos;m a software engineer and engineering student focused on
              practical full-stack products. My recent work includes warehouse
              and delivery workflows, collaborative
              presentation tools, and observable multi-agent systems.
            </p>
          </section>

          <section id="experience">
            <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>
                  Full-Time Software Engineer at{" "}
                  <a
                    href="https://lanci.tn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    Lanci LLC
                  </a>
                </strong>{" "}
                <span className="text-muted-foreground">
                  (Jul 2026 - Present)
                </span>
                : owning a full-stack warehouse management system that
                coordinates drivers and warehouse teams through delivery
                handoff, fulfillment, zone management, and exception tracking.
                Built React/Vite workflows and tRPC/PostgreSQL services with
                transactions, validation, RBAC, rate limiting, Docker, and
                CI/CD.
              </li>
              <li>
                <strong>
                  Part-Time Full-Stack Developer at{" "}
                  <a
                    href="https://lanci.tn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    Lanci LLC
                  </a>
                </strong>{" "}
                <span className="text-muted-foreground">
                  (Feb 2026 - Jul 2026)
                </span>
                : delivered an operations dashboard for reviewing completed
                deliveries, tracking operational issues, validating workflows,
                and managing follow-up actions. Developed supporting tRPC and
                PostgreSQL services with RBAC and automated CI/CD workflows.
              </li>
              <li>
                <strong>
                  Full-Stack Software Engineer Intern at{" "}
                  <a
                    href="https://lanci.tn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    Lanci LLC
                  </a>
                </strong>{" "}
                <span className="text-muted-foreground">
                  (Jul 2025 - Sep 2025)
                </span>
                : built a production order-creation workflow for business
                customers using React, Vite, Node.js, and TypeScript. Implemented
                secure transactional tRPC/PostgreSQL workflows with RBAC while
                collaborating with the CTO in two-week Agile sprints.
              </li>
            </ul>
          </section>

          <section id="projects">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold">Selected Projects</h2>
              <span className="hidden text-sm text-muted-foreground sm:block">
                Product work &amp; systems thinking
              </span>
            </div>
            <div className="divide-y divide-border border-y border-border">
              <article className="py-7 first:pt-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-xl">
                    <h3 className="text-xl font-semibold text-balance">
                      MarkDeck
                    </h3>
                    <p className="mt-2 leading-7 text-muted-foreground text-pretty">
                      A collaborative presentation workspace that turns
                      LLM-generated Markdown into structured slide decks.
                      React, Vite, TypeScript, Node.js, Express, and MySQL;
                      with role-based sharing, Dockerized services, CI/CD, and
                      Grafana/Loki observability.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
                    <a
                      href="https://markdeck.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="https://github.com/MohsenKhouaja/MarkDeck"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                    >
                      Repository <Github className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
              <article className="py-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-xl">
                    <h3 className="text-xl font-semibold text-balance">SREs</h3>
                    <p className="mt-2 leading-7 text-muted-foreground text-pretty">
                      A multi-agent incident-response system for site reliability
                      engineers. Python, LangGraph, and LangChain agents inspect
                      logs, metrics, and events in parallel, while human approval
                      gates remediation. Built with Next.js, FastAPI, MongoDB,
                      Prometheus, Loki, Docker Compose, and Dokploy CI/CD.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
                    <a
                      href="https://trysres.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="https://github.com/MohsenKhouaja/SREs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                    >
                      Repository <Github className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
              <article className="py-7 last:pb-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="max-w-xl leading-7 text-muted-foreground text-pretty">
                    <span className="font-semibold text-foreground">
                      Competitive Programming
                    </span>{" "}
                    — Codeforces Pupil with a maximum rating of 1292.
                  </p>
                  <a
                    href="https://codeforces.com/profile/MohsenKhouaja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                  >
                    See profile <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section id="education">
            <h2 className="mb-6 text-2xl font-semibold">Education</h2>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Higher School of Communication of Tunis (SUP&apos;COM)</strong>
                : National Diploma in Telecommunications Engineering, Sep 2024 -
                Present. Relevant coursework includes C programming, OOP in
                C++, algorithms, databases, and operating systems.
              </li>
              <li>
                <strong>
                  Preparatory Institute for Engineering Studies of Monastir
                </strong>
                : Math/Physics preparatory degree, Sep 2022 - Jun 2024. Ranked
                85 out of 1400, top 6%.
              </li>
            </ul>
          </section>

          <section id="skills">
            <h2 className="mb-6 text-2xl font-semibold">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          <section id="leadership">
            <h2 className="mb-6 text-2xl font-semibold">
              Leadership & Achievements
            </h2>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                Chairman of ACM SUP&apos;COM Club for the 2025-2026 academic
                year.
              </li>
              <li>
                First place winner at the ISI Contest.
              </li>
            </ul>
          </section>

          <section id="contact">
            <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
            <p className="mb-4 text-primaryforeground">
              I&apos;m open to software engineering opportunities,
              collaborations, and technical projects.
            </p>
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
              <Button variant="outline" asChild>
                <Link
                  href="https://www.linkedin.com/in/mohsen-khouaja-7a8159270"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center text-muted-foreground">
          <p>Last updated: 28 Aug 2026</p>
        </footer>
      </div>
    </div>
  );
}
