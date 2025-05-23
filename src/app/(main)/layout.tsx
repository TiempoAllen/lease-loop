import HomeNav from "@/components/home-nav";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeNav />
      {children}
      <Footer />
    </>
  );
}
