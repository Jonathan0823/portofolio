import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className="relative bg-[#010523] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-screen">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{ name: "Home", link: "/" }]} />
        <Hero />
      </div>
    </main>
  );
}
