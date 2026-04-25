"use client";

import Image from "next/image";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SGLogo from "@/components/SGLogo";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <Particles
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleColors={["#ffffff"]}
            moveParticlesOnHover
            particleHoverFactor={1}
            alphaParticles={false}
            particleBaseSize={100}
            sizeRandomness={1}
            cameraDistance={20}
            disableRotation={false}
            className="zindex-500"
          />
        </div>
        <div className="relative z-1 mx-auto max-w-6xl px-6 py-0 text-center">
          <FadeIn direction="none" duration={800}>
            <Image
              src="/logo.png"
              alt="BDB logo"
              width={550}
              height={300}
              className="mx-auto block"
              priority
            />
          </FadeIn>
          <FadeIn delay={200} direction="up" duration={800}>
            <h1 style={{ fontFamily: 'var(--font-melodrama)' }} className="text-8xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
              Bureau des Bachelors
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Tagline + What we do */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn duration={700}>
            <p className="mb-16 text-center text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              The student association organising events, fostering community, and representing every bachelor at CentraleSupélec.
            </p>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-3">

            {/* Events */}
            <FadeIn delay={100} duration={600}>
              <a href="/events" className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 h-full">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
                  What we do
                </p>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Events
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  From integration week to the annual gala, we run the events that define your bachelor years.
                </p>
                <span className="mt-6 text-xs font-medium text-zinc-400 group-hover:text-brand-blue">
                  See events →
                </span>
              </a>
            </FadeIn>

            {/* Clubs */}
            <FadeIn delay={200} duration={600}>
              <a href="/clubs" className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 h-full">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
                  Community
                </p>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Clubs
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  We support and grow clubs for bachelor students. Have an idea? We'll help you get it started.
                </p>
                <span className="mt-6 text-xs font-medium text-zinc-400 group-hover:text-brand-blue">
                  See clubs →
                </span>
              </a>
            </FadeIn>

            {/* Representation */}
            <FadeIn delay={300} duration={600}>
              <a href="/about" className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 h-full">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
                  Your voice
                </p>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Representation
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  We make sure bachelor students are heard, respected, and well-represented within the school.
                </p>
                <span className="mt-6 text-xs font-medium text-zinc-400 group-hover:text-brand-blue">
                  Meet the team →
                </span>
              </a>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn duration={700}>
            <h2 className="text-center text-2xl tracking-tight text-zinc-900 dark:text-zinc-50 mb-12">
              Our Partners
            </h2>
          </FadeIn>
          <FadeIn delay={150} duration={700}>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <SGLogo className="" />
              <Image
                src="/Auto-ecole-Paris-Saclay-Gif-blanc.png"
                alt="Auto-Ecole logo"
                width={985/4}
                height={377/4}
                className="bg-[#1b1a19] rounded"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
