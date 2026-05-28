import Navbar from "@/components/Navbar";
import AnalyticsChart from "@/components/AnalyticsChart";

export default function DashboardPage() {

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-6xl font-black">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-8 mt-14">

          <div className="card p-8">
            <h2 className="text-slate-400">
              Total Tests
            </h2>

            <p className="text-5xl font-black mt-4">
              8
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-slate-400">
              Best Score
            </h2>

            <p className="text-5xl font-black mt-4">
              92%
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-slate-400">
              Accuracy
            </h2>

            <p className="text-5xl font-black mt-4">
              88%
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-slate-400">
              Rank
            </h2>

            <p className="text-5xl font-black mt-4">
              #12
            </p>
          </div>

        </div>

        <div className="card p-10 mt-14 flex justify-center">

          <AnalyticsChart />

        </div>

      </div>
    </>
  );
}