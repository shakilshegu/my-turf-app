import UserHeader from "../components/user/Header";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader />
      <main>{children}</main>
    </div>
  );
}
