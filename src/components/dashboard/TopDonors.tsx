import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Heart } from "lucide-react";
import { topDonors } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export const TopDonors = () => {
  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 1:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 2:
        return <Medal className="h-5 w-5 text-amber-600" />;
      default:
        return <Star className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "eligible":
        return (
          <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
            Eligible
          </Badge>
        );
      case "waiting":
        return (
          <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20">
            Waiting
          </Badge>
        );
      default:
        return (
          <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
            Active
          </Badge>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
      className="rounded-xl border border-border bg-card p-6 shadow-md"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="rounded-lg bg-amber-500/10 p-2">
          <Award className="h-5 w-5 text-amber-500" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Top Donors
          </h3>
          <p className="text-sm text-muted-foreground">Our heroes saving lives</p>
        </div>
      </div>

      <div className="space-y-3">
        {topDonors.map((donor, index) => (
          <motion.div
            key={donor.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-center w-8">
              {getRankIcon(index)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground truncate">{donor.name}</p>
                <Badge variant="outline" className="text-xs shrink-0">
                  {donor.bloodType}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Last donation: {new Date(donor.lastDonation).toLocaleDateString()}
              </p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1 text-primary">
                <Heart className="h-4 w-4" fill="currentColor" />
                <span className="font-bold">{donor.totalDonations}</span>
              </div>
              <div className="hidden sm:block">{getStatusBadge(donor.status)}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
