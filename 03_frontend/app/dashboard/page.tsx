import DashboardLayout from "@/components/dashboard/DashboardLayout";
import OverviewCards from "@/components/dashboard/OverviewCards";
import MarketStatus from "@/components/dashboard/MarketStatus";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import QuickActions from "@/components/dashboard/QuickActions";
import Watchlist from "@/components/dashboard/Watchlist";
import AIScanner from "@/components/dashboard/AIScanner";
import AISignalDetails from "@/components/dashboard/AISignalDetails";
import RecentTrades from "@/components/dashboard/RecentTrades";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-black text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-400">
            Welcome to PAM AI Platform
          </p>
        </div>

        <OverviewCards />

<div className="grid gap-8 xl:grid-cols-2">
  <MarketStatus />
  <PortfolioSummary />
</div>

<Watchlist />

<div className="grid gap-8 xl:grid-cols-2">

  <AIScanner />

  <AISignalDetails />

</div>

<RecentTrades />

<QuickActions />

      </div>

    </DashboardLayout>
  );
}