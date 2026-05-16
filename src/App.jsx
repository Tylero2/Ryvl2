import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, Globe2, Layers3, LineChart, Megaphone, Search, ShieldCheck, Sparkles, Star, Target } from "lucide-react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

function Button({ children, className = "", variant = "default", href, ...props }) {
  const base = "inline-flex items-center justify-center whitespace-nowrap transition font-medium disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-400",
    outline: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
    light: "bg-white text-slate-950 hover:bg-blue-50",
  };
  const classes = cx(base, variants[variant] || variants.default, className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "", ...props }) {
  return (
    <div className={cx("border bg-white/[0.05] text-white shadow-sm", className)} {...props}>
      {children}
    </div>
  );
}

function CardContent({ children, className = "", ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

const services = [
  {
    icon: Search,
    title: "Local Visibility Audits",
    text: "Find what is holding a business back online across Google, website, reviews, and content.",
  },
  {
    icon: Megaphone,
    title: "Content Systems",
    text: "Turn real business updates into clean social posts, carousels, review graphics, and Google content.",
  },
  {
    icon: LineChart,
    title: "Lead Tracking",
    text: "Build simple systems to track where calls, leads, bookings, and opportunities are coming from.",
  },
  {
    icon: Globe2,
    title: "Website Messaging",
    text: "Improve headlines, calls-to-action, service pages, and trust sections so visitors know what to do next.",
  },
];

const process = [
  "Audit the current marketing foundation",
  "Identify strengths, bottlenecks, and missed opportunities",
  "Create a simple 30-day action plan",
  "Build content, tracking, and trust assets",
  "Review results and recommend next steps",
];

const targetClients = [
  "Local service businesses",
  "Fitness brands",
  "Gyms and trainers",
  "Creators and personal brands",
  "Sports and performance brands",
  "Small businesses ready to grow",
];

export default function RyvlMarketingWebsite() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.28),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.18),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-blue-400/40 bg-white/5 shadow-lg shadow-blue-500/10">
            <img
              src="/ryvl-r-logo.png"
              alt="Ryvl Marketing R logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight">Ryvl Agency</p>
            <p className="text-xs uppercase tracking-[0.28em] text-blue-200/70">Strategy • Content • Growth</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#pilot" className="hover:text-white">Free Audit</a>
        </nav>
        <Button href="mailto:Team@RyvlAgency.com?subject=Ryvl Agency Inquiry" className="rounded-2xl px-5">Book a Call</Button>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-[1.05fr_.95fr] md:pb-28 md:pt-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">
              <Sparkles className="h-4 w-4" />
              Marketing for brands ready to grow
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Get seen, trusted, and chosen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Ryvl Agency helps local businesses and personal brands strengthen their online presence through audits, content systems, lead tracking, and growth strategy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:Team@RyvlAgency.com?subject=Free Marketing Audit Request" className="h-12 rounded-2xl px-6 text-base font-semibold">
                Get a Free Marketing Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="#services" variant="outline" className="h-12 rounded-2xl px-6 text-base">
                View Services
              </Button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">01</p>
                <p>Audit</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">02</p>
                <p>Plan</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">03</p>
                <p>Grow</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-blue-500/20 blur-3xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.06] shadow-2xl shadow-blue-950/40 backdrop-blur">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-blue-200">Growth System</p>
                    <h2 className="mt-2 text-2xl font-bold text-white">Local Marketing Snapshot</h2>
                  </div>
                  <div className="rounded-2xl bg-blue-500/20 p-3 text-blue-200">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {["Google presence", "Website conversion", "Reviews & trust", "Content consistency", "Lead tracking"].map((item, i) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-slate-200">{item}</span>
                        <span className="font-semibold text-blue-200">{72 + i * 5}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" style={{ width: `${72 + i * 5}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-blue-300/20 bg-blue-500/10 p-5">
                  <div className="flex items-start gap-3">
                    <Target className="mt-1 h-5 w-5 text-blue-200" />
                    <p className="text-sm leading-6 text-slate-200">
                      The goal is simple: find what is already working, tighten what is weak, and build a system that turns attention into real opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">What We Do</p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Simple marketing support that makes brands look sharper and grow smarter.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="rounded-[1.6rem] border-white/10 bg-white/[0.05] transition hover:-translate-y-1 hover:bg-white/[0.08]">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="rounded-[2rem] border-white/10 bg-white/[0.05]">
              <CardContent className="p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black text-white">Who Ryvl helps</h2>
                <p className="mt-4 leading-7 text-slate-300">
                  Broad enough to work with real clients now. Focused enough to naturally grow into fitness, sports, and performance brands later.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {targetClients.map((client) => (
                    <div key={client} className="flex items-center gap-2 rounded-2xl bg-black/20 px-4 py-3 text-sm text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-blue-300" />
                      {client}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card id="process" className="rounded-[2rem] border-blue-300/20 bg-blue-500/[0.08]">
              <CardContent className="p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-100">
                  <Layers3 className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black text-white">The Ryvl process</h2>
                <div className="mt-7 space-y-4">
                  {process.map((step, index) => (
                    <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">{index + 1}</div>
                      <p className="text-slate-200">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="pilot" className="mx-auto max-w-7xl px-6 py-20">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/25 via-white/[0.06] to-black/30 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[.95fr_1.05fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Starter Offer</p>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">Free Local Marketing Audit</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                  A clear review of a business’s Google presence, website messaging, reviews, content, and lead flow — built to find practical next steps, not overwhelm the owner.
                </p>
                <Button href="mailto:Team@RyvlAgency.com?subject=Free Marketing Audit Request" variant="light" className="mt-7 h-12 rounded-2xl px-6 text-base font-bold shadow-lg shadow-black/20">
                  Request an Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {["Google Business Profile review", "Website messaging suggestions", "Review request system", "Content repurposing ideas", "Lead tracking sheet", "30-day action plan"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                    <Star className="mb-3 h-5 w-5 text-blue-200" />
                    <p className="font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ryvl Agency. Built for modern brands.</p>
          <div className="flex gap-5">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pilot" className="hover:text-white">Free Audit</a>
            <a href="mailto:Team@RyvlAgency.com?subject=Ryvl Agency Inquiry" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
