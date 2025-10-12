import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="relative flex h-full justify-center overflow-hidden bg-neutral-900">
      <div className="from-primary absolute inset-0 -top-20 h-40 w-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] to-transparent opacity-40 blur-3xl" />
      <Hero />
    </div>
  );
}