"use client";

import Link from "next/link";
import { Compass, Home, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [typedCommand, setTypedCommand] = useState("");
  const targetCommand = "npm run dev --resolve-path";

  // Simulate typing error resolution on 404 load
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < targetCommand.length) {
        setTypedCommand((prev) => prev + targetCommand.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 85);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary-bg px-6 py-24 text-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-accent-purple/5 blur-3xl" />

      {/* Terminal Mockup */}
      <div className="w-full max-w-md rounded-xl border border-border-dark bg-[#0a0e17]/85 p-5 shadow-2xl backdrop-blur-md text-left font-mono text-xs text-text-muted mb-8">
        <div className="flex gap-1.5 mb-4 border-b border-border-dark/60 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="space-y-2">
          <p className="text-accent-blue">$ {typedCommand}</p>
          <p className="text-red-400 font-bold">ERROR 404: MODULE_NOT_FOUND</p>
          <p className="text-[10px]">The page you are looking for does not exist on this server.</p>
        </div>
      </div>

      <h1 className="font-display text-7xl font-black text-white leading-none mb-4">404</h1>
      <h2 className="font-display text-xl font-bold text-white mb-2">Lost in Production?</h2>
      <p className="text-sm text-text-muted max-w-sm mb-8">
        The route you requested could not be resolved by the App Router middleware. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-primary-bg transition-all hover:bg-white/95 active:scale-95 shadow-lg"
        >
          <Home className="h-3.5 w-3.5" />
          <span>Return Home</span>
        </Link>
        
        <button
          onClick={() => {
            // Trigger Cmd+K event programmatically
            const event = new KeyboardEvent("keydown", {
              key: "k",
              metaKey: true,
              bubbles: true
            });
            window.dispatchEvent(event);
          }}
          className="flex items-center gap-2 rounded-full border border-border-dark bg-card-bg/40 px-5 py-2.5 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:text-white active:scale-95 cursor-pointer"
        >
          <Compass className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '3s' }} />
          <span>Use Command Menu</span>
        </button>
      </div>
    </div>
  );
}
