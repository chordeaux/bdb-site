"use client";

import Image from "next/image";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            BDB
          </span>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
              About
            </a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
              Services
            </a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
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
            className=""
          />
        </div>
        <div className="relative z-1 mx-auto max-w-6xl px-6 py-24 text-center">
        <Image
          src="/logo.png"
          alt="BDB logo"
          width={120}
          height={120}
          className="mx-auto mb-8"
          priority
        />
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
          Welcome to BDB
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          We build modern solutions that help businesses grow. Our team is
          dedicated to delivering high-quality products with a focus on
          simplicity and performance.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Get Started
          </a>
          <a
            href="#"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            Learn More
          </a>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            What We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-600 dark:text-zinc-400">
            Everything you need to take your project to the next level.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-700 dark:bg-zinc-800">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Fast Performance</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Optimized for speed and efficiency. Our solutions are built with
                performance in mind from the ground up.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-700 dark:bg-zinc-800">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Reliable & Secure</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Built with security best practices. Your data is safe with
                industry-standard encryption and protection.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-700 dark:bg-zinc-800">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-4.179 2.25m0 0L12 17.25l-5.571-3m11.142 0L22 16.5l-9.75 5.25L2.25 16.5l4.179-2.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Scalable Design</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Grows with your business. Our architecture is designed to handle
                increasing demand without missing a beat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          Join hundreds of businesses already using our platform to streamline
          their operations and boost productivity.
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} BDB. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
