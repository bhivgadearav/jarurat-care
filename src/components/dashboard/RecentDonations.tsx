import { motion } from "framer-motion";
import { Clock, MapPin, User, Droplets } from "lucide-react";
import { recentDonations } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const RecentDonations = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getBloodTypeBadgeClass = (bloodType: string) => {
    if (bloodType.includes("-")) {
      return "bg-primary/10 text-primary border-primary/20";
    }
    return "bg-secondary/10 text-secondary border-secondary/20";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="rounded-xl border border-border bg-card shadow-md overflow-hidden"
    >
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-secondary/10 p-2">
            <Clock className="h-5 w-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Recent Donations
            </h3>
            <p className="text-sm text-muted-foreground">
              Latest blood donation records
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-muted-foreground">Donor</TableHead>
              <TableHead className="text-muted-foreground">Blood Type</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">Units</TableHead>
              <TableHead className="text-muted-foreground">Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentDonations.slice(0, 6).map((donation, index) => (
              <motion.tr
                key={donation.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="border-b border-border/50 hover:bg-muted/30 transition-colors"
              >
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                      <User className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{donation.donorName}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={getBloodTypeBadgeClass(donation.bloodType)}
                  >
                    <Droplets className="h-3 w-3 mr-1" />
                    {donation.bloodType}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {formatDate(donation.date)}
                </TableCell>
                <TableCell>
                  <span className="font-semibold text-foreground">{donation.units}</span>
                  <span className="text-muted-foreground ml-1">unit{donation.units > 1 ? "s" : ""}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {donation.location}
                  </div>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-border">
        {recentDonations.slice(0, 4).map((donation, index) => (
          <motion.div
            key={donation.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="p-4 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                  <User className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{donation.donorName}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(donation.date)}</p>
                </div>
              </div>
              <Badge
                variant="outline"
                className={getBloodTypeBadgeClass(donation.bloodType)}
              >
                {donation.bloodType}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {donation.location}
              </div>
              <span className="text-foreground font-medium">
                {donation.units} unit{donation.units > 1 ? "s" : ""}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
