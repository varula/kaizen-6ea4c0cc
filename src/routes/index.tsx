import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Armana Kaizen Rollout Review — Navy Design System" },
      {
        name: "description",
        content:
          "Navy-based design system in Inter Tight: semantic color tokens, typography scale and component styling for the Kaizen rollout review.",
      },
      { property: "og:title", content: "Armana Kaizen Rollout Review — Navy Design System" },
      {
        property: "og:description",
        content:
          "Navy-based design system in Inter Tight: semantic color tokens, typography scale and component styling.",
      },
    ],
  }),
  component: Index,
});

const swatches = [
  { name: "Navy", cls: "bg-navy" },
  { name: "Primary", cls: "bg-primary" },
  { name: "Navy muted", cls: "bg-navy-muted" },
  { name: "Navy accent", cls: "bg-navy-accent" },
  { name: "Accent", cls: "bg-accent" },
  { name: "Secondary", cls: "bg-secondary" },
  { name: "Muted", cls: "bg-muted" },
  { name: "Border", cls: "bg-border" },
];

const metrics = [
  { label: "Pilot factories", value: "5" },
  { label: "Slides reviewed", value: "56" },
  { label: "Group efficiency target", value: "75%" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy-foreground/70">
            Armana Group · Design System
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] sm:text-6xl">
            Inter Tight, navy first.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-navy-foreground/75">
            The whole interface now runs on one typeface and one navy-anchored token set — headings,
            body copy, surfaces and controls included.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button className="rounded-md bg-navy-accent px-5 py-2.5 text-sm font-semibold text-navy transition-opacity hover:opacity-90">
              Primary action
            </button>
            <button className="rounded-md border border-navy-foreground/25 px-5 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10">
              Secondary action
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-border bg-card p-6">
              <p className="text-4xl font-bold text-primary">{m.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-bold">Palette</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Semantic tokens defined once in the stylesheet, themed for light and dark.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map((s) => (
            <div key={s.name} className="overflow-hidden rounded-lg border border-border bg-card">
              <div className={`h-20 w-full ${s.cls}`} />
              <p className="px-3 py-2 text-xs font-medium text-muted-foreground">{s.name}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-bold">Type scale</h2>
        <div className="mt-6 space-y-4 rounded-lg border border-border bg-card p-6">
          <p className="text-4xl font-bold">Display · 36 / bold</p>
          <p className="text-2xl font-semibold">Heading · 24 / semibold</p>
          <p className="text-base">
            Body · 16 / regular. Inter Tight keeps dense operational tables legible while staying
            tight enough for large headlines.
          </p>
          <p className="text-sm text-muted-foreground">Caption · 14 / muted</p>
        </div>
      </div>
    </main>
  );
}
