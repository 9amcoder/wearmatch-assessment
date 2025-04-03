"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";// Import useRouter

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/listing");
  };

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center justify-center min-h-screen">
        <Image
          className="dark:invert"
          src="/logo1.webp"
          alt="Next.js logo"
          width={430}
          height={300}
          priority
        />
        <h1 className="text-xl font-bold text-center">
          Welcome to the Future of Site Management
        </h1>
        <div className="flex items-center flex-col">
          <Button variant="outline" onClick={handleNavigate}>
            Get Started
          </Button>
        </div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.stevesultan.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Steve Sultan
        </a>
      </footer>
    </div>
  );
}
