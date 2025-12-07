// Dummy data for the blood donation dashboard

export interface Donor {
  id: string;
  name: string;
  bloodType: string;
  lastDonation: string;
  totalDonations: number;
  status: "active" | "eligible" | "waiting";
}

export interface DonationRecord {
  id: string;
  donorName: string;
  bloodType: string;
  date: string;
  units: number;
  location: string;
}

export interface DonationTrend {
  month: string;
  donations: number;
  donors: number;
}

export interface BloodTypeStock {
  type: string;
  units: number;
  status: "critical" | "low" | "adequate" | "good";
}

// Blood type distribution data
export const bloodTypeStock: BloodTypeStock[] = [
  { type: "A+", units: 145, status: "good" },
  { type: "A-", units: 32, status: "low" },
  { type: "B+", units: 98, status: "adequate" },
  { type: "B-", units: 18, status: "critical" },
  { type: "AB+", units: 56, status: "adequate" },
  { type: "AB-", units: 12, status: "critical" },
  { type: "O+", units: 234, status: "good" },
  { type: "O-", units: 45, status: "low" },
];

// Monthly donation trends
export const donationTrends: DonationTrend[] = [
  { month: "Jan", donations: 342, donors: 285 },
  { month: "Feb", donations: 298, donors: 251 },
  { month: "Mar", donations: 385, donors: 320 },
  { month: "Apr", donations: 420, donors: 355 },
  { month: "May", donations: 478, donors: 398 },
  { month: "Jun", donations: 512, donors: 425 },
  { month: "Jul", donations: 445, donors: 375 },
  { month: "Aug", donations: 389, donors: 328 },
  { month: "Sep", donations: 467, donors: 392 },
  { month: "Oct", donations: 534, donors: 445 },
  { month: "Nov", donations: 498, donors: 418 },
  { month: "Dec", donations: 562, donors: 468 },
];

// Recent donations
export const recentDonations: DonationRecord[] = [
  {
    id: "DON-001",
    donorName: "Sarah Johnson",
    bloodType: "O+",
    date: "2024-12-07",
    units: 1,
    location: "Central Blood Bank",
  },
  {
    id: "DON-002",
    donorName: "Michael Chen",
    bloodType: "A-",
    date: "2024-12-07",
    units: 1,
    location: "City Hospital Drive",
  },
  {
    id: "DON-003",
    donorName: "Emily Rodriguez",
    bloodType: "B+",
    date: "2024-12-06",
    units: 2,
    location: "Mobile Unit #12",
  },
  {
    id: "DON-004",
    donorName: "David Kim",
    bloodType: "AB+",
    date: "2024-12-06",
    units: 1,
    location: "University Campus",
  },
  {
    id: "DON-005",
    donorName: "Lisa Thompson",
    bloodType: "O-",
    date: "2024-12-05",
    units: 1,
    location: "Central Blood Bank",
  },
  {
    id: "DON-006",
    donorName: "James Wilson",
    bloodType: "A+",
    date: "2024-12-05",
    units: 1,
    location: "Community Center",
  },
  {
    id: "DON-007",
    donorName: "Amanda Foster",
    bloodType: "B-",
    date: "2024-12-04",
    units: 1,
    location: "Mobile Unit #8",
  },
  {
    id: "DON-008",
    donorName: "Robert Garcia",
    bloodType: "O+",
    date: "2024-12-04",
    units: 2,
    location: "Downtown Clinic",
  },
];

// Top donors
export const topDonors: Donor[] = [
  {
    id: "D-001",
    name: "Eleanor Vance",
    bloodType: "O-",
    lastDonation: "2024-12-01",
    totalDonations: 47,
    status: "waiting",
  },
  {
    id: "D-002",
    name: "Marcus Webb",
    bloodType: "A+",
    lastDonation: "2024-11-28",
    totalDonations: 38,
    status: "eligible",
  },
  {
    id: "D-003",
    name: "Patricia Huang",
    bloodType: "B+",
    lastDonation: "2024-11-15",
    totalDonations: 32,
    status: "eligible",
  },
  {
    id: "D-004",
    name: "Christopher Blake",
    bloodType: "AB+",
    lastDonation: "2024-12-05",
    totalDonations: 29,
    status: "waiting",
  },
  {
    id: "D-005",
    name: "Diana Morrison",
    bloodType: "O+",
    lastDonation: "2024-10-20",
    totalDonations: 25,
    status: "eligible",
  },
];

// Dashboard statistics
export const dashboardStats = {
  totalDonations: 5330,
  totalDonors: 3845,
  unitsAvailable: 640,
  livesImpacted: 15990,
  monthlyGrowth: 12.5,
  donorRetention: 78.3,
  avgDonationsPerDonor: 1.39,
  criticalBloodTypes: 2,
};
