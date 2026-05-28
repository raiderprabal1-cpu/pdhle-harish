import Navbar from "@/components/Navbar";
import Link from "next/link";

const tests = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
}));

export default function MockTestsPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-6xl font-black">
          Mock Tests
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {tests.map((test) => (

            <div key={test.id} className="card p-8">

              <h2 className="text-3xl font-bold">
                Mock Test {test.id}
              </h2>

              <p className="mt-4 text-slate-400">
                125 Questions • 2 Hours
              </p>

              <Link
                href={`/mock/${test.id}`}
                className="gradient mt-8 inline-block px-6 py-4 rounded-2xl font-bold"
              >
                Start Test
              </Link>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}