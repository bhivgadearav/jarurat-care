import { motion } from "framer-motion";
import { Droplet, AlertTriangle } from "lucide-react";
import { bloodTypeStock } from "@/lib/data";

export const BloodTypeCard = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-500 text-white";
      case "low":
        return "bg-amber-500 text-white";
      case "adequate":
        return "bg-blue-500 text-white";
      case "good":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-500";
      case "low":
        return "bg-amber-500";
      case "adequate":
        return "bg-blue-500";
      case "good":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const maxUnits = Math.max(...bloodTypeStock.map((b) => b.units));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-xl border border-border bg-card p-6 shadow-md"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="rounded-lg bg-primary/10 p-2">
          <Droplet className="h-5 w-5 text-primary" fill="currentColor" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Blood Inventory
          </h3>
          <p className="text-sm text-muted-foreground">Current stock by blood type</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {bloodTypeStock.map((blood, index) => (
          <motion.div
            key={blood.type}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.05 }}
            className="relative p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors"
          >
            {(blood.status === "critical" || blood.status === "low") && (
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <AlertTriangle
                  className={`h-4 w-4 ${
                    blood.status === "critical" ? "text-red-500" : "text-amber-500"
                  }`}
                />
              </motion.div>
            )}

            <div className="flex items-center justify-between mb-2">
              <span className="font-display text-xl font-bold text-foreground">
                {blood.type}
              </span>
              <span
                className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${getStatusColor(
                  blood.status
                )}`}
              >
                {blood.status}
              </span>
            </div>

            <div className="text-2xl font-bold text-foreground mb-2">
              {blood.units}
              <span className="text-sm font-normal text-muted-foreground ml-1">units</span>
            </div>

            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(blood.units / maxUnits) * 100}%` }}
                transition={{ duration: 1, delay: 0.6 + index * 0.05 }}
                className={`h-full rounded-full ${getProgressColor(blood.status)}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
