import RandomBackground from "@/components/RandomBackground";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <RandomBackground numRows={8} numCols={18} />
        <main>{children}</main>
      </div>
    );
  }
  