import { Logo } from "@/components/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-4 max-w-xl">
        <Logo className="w-32 h-32" />
        <h1 className="-ml-2 text-4xl font-bold tracking-tight">Cody.Val</h1>
        <p className="text-lg text-center text-stone-100">
          Two dev friends sharing their journey through JavaScript, TypeScript,
          and modern web development.
        </p>
        <Link href="https://discord.gg/UjWzpdQunT" target="_blank">
          <button className="bg-indigo-600 text-white px-5 py-3 rounded-md">
            Join us on Discord
          </button>
        </Link>
      </div>
    </div>
  );
}
