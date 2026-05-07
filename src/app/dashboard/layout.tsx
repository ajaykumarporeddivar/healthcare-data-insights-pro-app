import { cn } from '@/components/ui';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6">
      {children}
    </div>
  );
}