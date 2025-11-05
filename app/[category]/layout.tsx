import { AppHeader } from "@/components/app-header";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="jun-layout bg-background">
      <AppHeader />
      {children}
    </div>
  );
}
