"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Timeline,
  TimelineItem,
  TimelineItemDate,
  TimelineItemDescription,
  TimelineItemTitle,
} from "@/components/ui/timeline";

const timelineData = [
  {
    title: "Software Engineer Intern at Lanci LLC",
    description:
      "Worked across a delivery management system, including process debriefing, order confirmation workflows, transactional APIs, status history, and a relational database with 55 tables.",
    date: new Date("2025-07-01"),
    variant: "outline" as const,
  },
  {
    title: "Part-Time Full-Stack Developer at Lanci LLC",
    description:
      "Delivered an operations dashboard for delivery review, issue tracking, workflow validation, and follow-up actions, backed by tRPC and PostgreSQL with RBAC and CI/CD.",
    date: new Date("2026-02-01"),
    variant: "destructive" as const,
  },
  {
    title: "Full-Time Software Engineer at Lanci LLC",
    description:
      "Started owning a full-stack warehouse management system for driver and warehouse coordination, including order completion, confirmations, zone management, and exception tracking.",
    date: new Date("2026-07-01"),
    variant: "destructive" as const,
  },
  {
    title: "MarkDeck",
    description:
      "Built a multi-user Markdown-to-slide platform with RBAC sharing, Dockerized services, CI/CD, and Grafana/Loki observability.",
    date: new Date("2026-03-01"),
    variant: "outline" as const,
  },
];

export default function TimelinePage() {
  const [isListView, setIsListView] = useState(false);

  const timelineItems = useMemo(
    () =>
      [...timelineData].sort((a, b) => a.date.getTime() - b.date.getTime()),
    []
  );

  const groupedItems = useMemo(() => {
    const formatter = new Intl.DateTimeFormat("en", {
      month: "long",
      year: "numeric",
    });

    return [...timelineItems]
      .reverse()
      .reduce<Array<{ label: string; items: typeof timelineItems }>>(
        (groups, item) => {
          const label = formatter.format(item.date);
          const existingGroup = groups.find((group) => group.label === label);

          if (existingGroup) {
            existingGroup.items.push(item);
          } else {
            groups.push({ label, items: [item] });
          }

          return groups;
        },
        []
      );
  }, [timelineItems]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-16">
        <header className="mb-8">
          <Link href="/" passHref>
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              My Timeline
            </h1>
            <Button
              variant="outline"
              onClick={() => setIsListView(!isListView)}
            >
              {isListView ? "View as timeline" : "View as list"}
            </Button>
          </div>
        </header>

        <main>
          {isListView ? (
            <section className="space-y-8">
              {groupedItems.map((group) => (
                <div
                  key={group.label}
                  className="border-l-2 border-primary pb-1 pl-4"
                >
                  <h2 className="mb-2 text-xl font-semibold">
                    {group.label}
                  </h2>
                  <ul className="list-disc space-y-2 pl-5">
                    {group.items.map((item) => (
                      <li key={item.title} className="text-primary">
                        <strong>{item.title}</strong>: {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ) : (
            <div className="w-full overflow-x-auto rounded-md border border-border/40 bg-background p-4">
              <div className="min-w-[1000px]">
                <Timeline orientation="horizontal" className="w-full">
                  {timelineItems.map((item) => (
                    <TimelineItem key={item.title} variant={item.variant}>
                      <TimelineItemDate>{item.date}</TimelineItemDate>
                      <TimelineItemTitle>{item.title}</TimelineItemTitle>
                      <TimelineItemDescription>
                        {item.description}
                      </TimelineItemDescription>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
