import { MessageCircle, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-dark bg-black/40 py-12 text-text-muted">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand/Signature */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-white text-sm uppercase tracking-wider">Diwanshu</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              <span className="text-xs">Software Engineer</span>
            </div>
            <p className="text-[11px] mt-1 text-text-muted/80 max-w-xs text-center md:text-left">
              Handcrafted in India. Powered by Next.js 16, TypeScript &amp; Framer Motion.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/diwanshu200419-commits"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-dark bg-card-bg/30 text-text-muted transition-all duration-300 hover:border-text-white hover:bg-card-bg hover:text-white"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/diwanshu-1a010b2b8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-dark bg-card-bg/30 text-text-muted transition-all duration-300 hover:border-text-white hover:bg-card-bg hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://wa.me/919816357615?text=Hi%20Diwanshu%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-dark bg-card-bg/30 text-text-muted transition-all duration-300 hover:border-text-white hover:bg-card-bg hover:text-white"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:diwanshu200419@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-dark bg-card-bg/30 text-text-muted transition-all duration-300 hover:border-text-white hover:bg-card-bg hover:text-white"
              aria-label="Email Address"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-border-dark/30 pt-6 text-[10px] md:flex-row gap-4">
          <p>© {currentYear} Diwanshu. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Back to Top</a>
            <span className="text-border-dark">|</span>
            <a href="#projects" className="hover:text-white transition-colors">Case Studies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
