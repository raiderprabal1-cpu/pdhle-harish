import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomePage() {

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">

        <Hero />

        <section className="grid md:grid-cols-4 gap-8">

          <div className="card p-8">
            <h3 className="text-2xl font-bold">
              Real Exam UI
            </h3>

            <p className="mt-4 text-slate-400">
              Government exam level interface.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold">
              Analytics
            </h3>

            <p className="mt-4 text-slate-400">
              Full performance tracking.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold">
              Hindi Support
            </h3>

            <p className="mt-4 text-slate-400">
              UTF-safe Hindi rendering.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold">
              Leaderboard
            </h3>

            <p className="mt-4 text-slate-400">
              Rank and compare performance.
            </p>
          </div>

        </section>

        <div className="flex justify-center py-20">

          <Link
            href="/mock-tests"
            className="gradient px-10 py-5 rounded-2xl text-2xl font-bold"
          >
            Start Mock Test
          </Link>

        </div>

      </main>
    </>
  );
}