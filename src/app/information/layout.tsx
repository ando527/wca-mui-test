import { Typography } from "@mui/material";
import RandomBackground from "@/components/RandomBackground";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <RandomBackground></RandomBackground>
        <main>{children}</main>
      </div>
    );
  }
  