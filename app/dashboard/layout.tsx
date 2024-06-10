import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex items-start justify-between">
      <div className="min-w-[300px] border-r min-h-screen">
        <Sidebar />
      </div>

      <div className="relative w-full h-full">{children}</div>
    </div>
  );
}
