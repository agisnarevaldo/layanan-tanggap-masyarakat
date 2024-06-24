import AdminSidebar from "../ui/admin/sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex overflow-y-hidden">
      <AdminSidebar />
      {children}
    </div>
  );
}
