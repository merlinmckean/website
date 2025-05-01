import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col justify-center items-center px-6">
      {/* HERO SECTION */}
      <section className="w-full max-w-4xl text-center space-y-8">
        {/* Logo Mark */}
        <div className="mx-auto w-20 h-10 relative">
          <Image src="/images/logo-mark.svg" alt="Merlin AI Logo" fill priority />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Turn <span className="text-sky-500">AI hype</span> into hard‑dollar wins.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
          Boston‑based, hands‑on AI implementation that embeds in your workflow for 30&nbsp;days and leaves you with production‑grade automations—guaranteed.
        </p>

        {/* Call‑to‑action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="/book-a-call">Book free AI scan</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#case-studies">See case studies</a>
          </Button>
        </div>
      </section>

      {/* Trust badges */}
      <section className="pt-20 opacity-70">
        <p className="uppercase tracking-widest text-xs mb-4 text-neutral-400 text-center">
          Backed by
        </p>
        <div className="flex flex-wrap justify-center gap-8 grayscale hover:grayscale-0 transition-all">
          <Image src="/images/badge1.svg" alt="Google GenAI Cert" width={120} height={40} />
          <Image src="/images/badge2.svg" alt="HuggingFace Course" width={120} height={40} />
          {/* Add more badges as they become available */}
        </div>
      </section>
    </main>
  );
}
