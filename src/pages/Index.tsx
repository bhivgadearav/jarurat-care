import { motion } from "framer-motion";
import { Droplets, Users, Heart, Activity } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { StatCard } from "@/components/dashboard/StatCard";
import { DonationChart } from "@/components/dashboard/DonationChart";
import { BloodTypeCard } from "@/components/dashboard/BloodTypeCard";
import { RecentDonations } from "@/components/dashboard/RecentDonations";
import { TopDonors } from "@/components/dashboard/TopDonors";
import { QuoteCard } from "@/components/dashboard/QuoteCard";
import { dashboardStats } from "@/lib/data";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section id="dashboard" className="mb-8">
            <HeroSection />
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Total Donations"
              value={dashboardStats.totalDonations}
              icon={Droplets}
              trend={dashboardStats.monthlyGrowth}
              delay={0.1}
              variant="primary"
            />
            <StatCard
              title="Registered Donors"
              value={dashboardStats.totalDonors}
              icon={Users}
              trend={8.2}
              delay={0.15}
              variant="secondary"
            />
            <StatCard
              title="Lives Impacted"
              value={dashboardStats.livesImpacted}
              icon={Heart}
              delay={0.2}
              variant="accent"
            />
            <StatCard
              title="Units Available"
              value={dashboardStats.unitsAvailable}
              suffix="units"
              icon={Activity}
              delay={0.25}
              variant="default"
            />
          </section>

          {/* Charts & Blood Types */}
          <section id="donations" className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            <div className="xl:col-span-2">
              <DonationChart />
            </div>
            <div className="xl:col-span-1">
              <QuoteCard />
            </div>
          </section>

          {/* Blood Inventory */}
          <section className="mb-8">
            <BloodTypeCard />
          </section>

          {/* Recent Donations & Top Donors */}
          <section id="donors" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <RecentDonations />
            </div>
            <div className="lg:col-span-1">
              <TopDonors />
            </div>
          </section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary to-cerulean-dark p-8 md:p-12 text-secondary-foreground mb-8"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-white/80 mb-6">
                Join our community of lifesavers. Schedule your donation today and help
                ensure blood is available for those who need it most.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-secondary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                  Find a Donation Center
                </button>
                <button className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
