import Sidebar from "./Sidebar";

export default function Layout({ children }: any) {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex">
      <Sidebar />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-12">
        {children}
      </main>
    </div>
  );
}