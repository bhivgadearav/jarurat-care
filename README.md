# BloodLink - Blood Donation Tracking Dashboard

## Introduction

BloodLink is a modern, responsive blood donation tracking dashboard that provides real-time insights into donation activities, donor management, and blood inventory levels. Built with a focus on user experience and accessibility, this dashboard helps blood banks and donation centers monitor their operations effectively.

## Detailed Description

### Features

- **Dashboard Overview**: Get a comprehensive view of total donations, registered donors, lives impacted, and available blood units with animated stat cards
- **Donation Trends Chart**: Interactive area chart visualizing monthly donation and donor activity trends throughout the year
- **Blood Inventory Management**: Real-time blood type inventory display with status indicators (critical, low, adequate, good)
- **Recent Donations Table**: View the latest donation records with donor information, blood type, date, units, and location
- **Top Donors Leaderboard**: Recognize and track the most active blood donors with eligibility status
- **Daily Inspiration Quotes**: Real-time motivational quotes fetched from a public API to inspire donors
- **Light/Dark Theme Toggle**: User-configurable theme with smooth transitions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging micro-interactions powered by Framer Motion

### Color Palette

The application uses a carefully curated color palette:
- **Punch Red** (#e63946): Primary accent color representing blood/life
- **Honeydew** (#f1faee): Light background color
- **Frosted Blue** (#a8dadc): Secondary accent color
- **Cerulean** (#457b9d): Secondary UI elements
- **Oxford Navy** (#1d3557): Dark text and elements

## Tech Stack

| Technology | Purpose |
|------------|---------|
| TypeScript | Type-safe JavaScript development |
| React 18 | UI component library |
| Vite | Build tool and development server |
| Tailwind CSS | Utility-first CSS framework |
| Shadcn/UI | Pre-built accessible components |
| Lucide React | Icon library |
| Framer Motion | Animation library |
| Jotai | Atomic state management |
| TanStack React Query | Async state management |
| Recharts | Charting library |

## How to Run

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bloodlink-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
bun preview
```

## Project Structure

```
src/
├── components/
│   ├── dashboard/       # Dashboard-specific components
│   │   ├── BloodTypeCard.tsx
│   │   ├── DonationChart.tsx
│   │   ├── HeroSection.tsx
│   │   ├── QuoteCard.tsx
│   │   ├── RecentDonations.tsx
│   │   ├── StatCard.tsx
│   │   └── TopDonors.tsx
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/              # Shadcn UI components
├── hooks/               # Custom React hooks
│   ├── useQuotes.ts
│   └── useTheme.ts
├── lib/                 # Utilities and data
│   ├── data.ts
│   └── utils.ts
├── pages/               # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles and design system
```

## License

MIT License - Feel free to use this project for personal or commercial purposes.
