"use client";

import { useEffect, useState, useRef, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, ExternalLink, Mail, MessageCircle, FileText, Clipboard } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Contact & Socials" | "Actions";
  icon: React.ComponentType<{ className?: string }>;
  shortcut?: string[];
  action: () => void;
}

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Toggle Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Keyboard Shortcuts for direct actions (outside Command Palette)
      if (!isOpen && !e.metaKey && !e.ctrlKey) {
        if (e.key.toLowerCase() === "g") {
          const handleNextKey = (nextEvent: KeyboardEvent) => {
            const k = nextEvent.key.toLowerCase();
            if (k === "p") {
              nextEvent.preventDefault();
              scrollToSection("projects");
            } else if (k === "a") {
              nextEvent.preventDefault();
              scrollToSection("about");
            } else if (k === "s") {
              nextEvent.preventDefault();
              scrollToSection("skills");
            } else if (k === "c") {
              nextEvent.preventDefault();
              scrollToSection("contact");
            } else if (k === "t") {
              nextEvent.preventDefault();
              scrollToSection("timeline");
            } else if (k === "r") {
              nextEvent.preventDefault();
              scrollToSection("resume");
            } else if (k === "n") {
              nextEvent.preventDefault();
              scrollToSection("snapshot");
            } else if (k === "v") {
              nextEvent.preventDefault();
              scrollToSection("availability");
            } else if (k === "x") {
              nextEvent.preventDefault();
              scrollToSection("terminal");
            }
            window.removeEventListener("keydown", handleNextKey);
          };
          window.addEventListener("keydown", handleNextKey);
          // Auto remove after 1 second if no key pressed
          setTimeout(() => window.removeEventListener("keydown", handleNextKey), 1000);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setSearch("");
    }
  }, [isOpen]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      showToast(`Navigated to #${id}`);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setIsOpen(false);
    showToast(`${label} copied to clipboard!`);
  };

  const commandItems: CommandItem[] = [
    {
      id: "nav-hero",
      title: "Go to Home / Hero",
      category: "Navigation",
      icon: Compass,
      shortcut: ["G", "H"],
      action: () => scrollToSection("hero"),
    },
    {
      id: "nav-about",
      title: "Go to About Me",
      category: "Navigation",
      icon: Compass,
      shortcut: ["G", "A"],
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-projects",
      title: "Go to Featured Projects",
      category: "Navigation",
      icon: Compass,
      shortcut: ["G", "P"],
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-skills",
      title: "Go to Technical Skills",
      category: "Navigation",
      icon: Compass,
      shortcut: ["G", "S"],
      action: () => scrollToSection("skills"),
    },
    {
      id: "nav-timeline",
      title: "Go to Experience Timeline",
      category: "Navigation",
      icon: Compass,
      shortcut: ["G", "T"],
      action: () => scrollToSection("timeline"),
    },
    {
      id: "nav-availability",
      title: "Go to Availability Status",
      category: "Navigation",
      icon: Compass,
      shortcut: ["G", "V"],
      action: () => scrollToSection("availability"),
    },
    {
      id: "nav-snapshot",
      title: "Go to Resume Snapshot",
      category: "Navigation",
      icon: Compass,
      shortcut: ["G", "N"],
      action: () => scrollToSection("snapshot"),
    },
    {
      id: "nav-resume",
      title: "Go to Resume Details",
      category: "Navigation",
      icon: Compass,
      shortcut: ["G", "R"],
      action: () => scrollToSection("resume"),
    },
    {
      id: "nav-terminal",
      title: "Go to Interactive Shell",
      category: "Navigation",
      icon: Compass,
      shortcut: ["G", "X"],
      action: () => scrollToSection("terminal"),
    },
    {
      id: "nav-contact",
      title: "Go to Contact Section",
      category: "Navigation",
      icon: Compass,
      shortcut: ["G", "C"],
      action: () => scrollToSection("contact"),
    },
    {
      id: "copy-email",
      title: "Copy Email Address",
      category: "Actions",
      icon: Mail,
      action: () => copyToClipboard("diwanshu200419@gmail.com", "Email address"),
    },
    {
      id: "copy-whatsapp",
      title: "Copy WhatsApp Number",
      category: "Actions",
      icon: MessageCircle,
      action: () => copyToClipboard("+919816357615", "WhatsApp number"),
    },
    {
      id: "download-resume",
      title: "Download Resume PDF",
      category: "Actions",
      icon: FileText,
      action: () => {
        setIsOpen(false);
        showToast("Resume download started...");
        window.open("#", "_blank"); // Resume placeholder
      },
    },
    {
      id: "social-github",
      title: "Open GitHub Profile",
      category: "Contact & Socials",
      icon: GitHubIcon,
      action: () => {
        setIsOpen(false);
        window.open("https://github.com/diwanshu200419-commits", "_blank");
      },
    },
    {
      id: "social-linkedin",
      title: "Open LinkedIn Profile",
      category: "Contact & Socials",
      icon: LinkedInIcon,
      action: () => {
        setIsOpen(false);
        window.open("https://www.linkedin.com/in/diwanshu-1a010b2b8", "_blank");
      },
    },
    {
      id: "social-whatsapp",
      title: "Chat on WhatsApp",
      category: "Contact & Socials",
      icon: MessageCircle,
      action: () => {
        setIsOpen(false);
        window.open("https://wa.me/919816357615?text=Hi%20Diwanshu%2C%20I%20want%20to%20discuss%20a%20project.", "_blank");
      },
    },
  ];

  // Filtering items by search query
  const filteredItems = commandItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Key navigation within list
  useEffect(() => {
    const handleListKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleListKeyDown);
    return () => window.removeEventListener("keydown", handleListKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Group filtered items by category
  const categories = Array.from(new Set(filteredItems.map((item) => item.category)));

  // Map indexes in filtered list to their globally sequential indices
  let itemSequenceIndex = 0;

  return (
    <>
      {/* Toast notification banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg border border-border-dark bg-card-bg/90 px-4 py-3 text-sm text-text-white shadow-2xl backdrop-blur-md"
          >
            <Clipboard className="h-4 w-4 text-accent-blue" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher hint badge */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full border border-border-dark bg-card-bg/60 px-3 py-1.5 text-xs text-text-muted transition-all duration-300 hover:border-accent-purple/50 hover:bg-card-bg/90 hover:text-text-white"
        >
          <span>Press</span>
          <kbd className="rounded bg-border-dark px-1.5 py-0.5 text-[10px] font-mono">⌘ K</kbd>
          <span>to navigate</span>
        </button>
      </div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Dialog Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              ref={containerRef}
              className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border-dark bg-[#0e1320]/95 shadow-2xl backdrop-blur-xl"
            >
              {/* Search Header */}
              <div className="flex items-center border-b border-border-dark px-4 py-3">
                <Search className="h-5 w-5 text-text-muted" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => startTransition(() => setSearch(e.target.value))}
                  className="ml-3 w-full bg-transparent py-1 text-sm text-text-white placeholder-text-muted outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded bg-border-dark px-2 py-0.5 text-[10px] text-text-muted transition-colors hover:text-text-white"
                >
                  ESC
                </button>
              </div>

              {/* Command List */}
              <div className="max-h-[340px] overflow-y-auto p-2 scrollbar-thin">
                {filteredItems.length === 0 ? (
                  <div className="py-8 text-center text-sm text-text-muted">
                    No results found for &ldquo;{search}&rdquo;
                  </div>
                ) : (
                  categories.map((category) => {
                    const categoryItems = filteredItems.filter((item) => item.category === category);
                    return (
                      <div key={category}>
                        <h4 className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                          {category}
                        </h4>
                        {categoryItems.map((item) => {
                          const currentItemIndex = itemSequenceIndex;
                          itemSequenceIndex += 1;
                          const isSelected = currentItemIndex === selectedIndex;
                          const Icon = item.icon;

                          return (
                            <button
                              key={item.id}
                              onClick={item.action}
                              onMouseEnter={() => setSelectedIndex(currentItemIndex)}
                              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-all duration-150 ${
                                isSelected
                                  ? "bg-accent-purple/20 text-text-white shadow-inner"
                                  : "text-text-muted hover:bg-card-bg/40 hover:text-text-white"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Icon className={`h-4.5 w-4.5 ${isSelected ? "text-accent-purple" : "text-text-muted"}`} />
                                <span>{item.title}</span>
                              </div>
                              {item.shortcut ? (
                                <div className="flex items-center gap-1">
                                  {item.shortcut.map((key) => (
                                    <kbd
                                      key={key}
                                      className={`rounded border px-1.5 py-0.5 text-[9px] font-mono ${
                                        isSelected
                                          ? "border-accent-purple/40 bg-accent-purple/10 text-text-white"
                                          : "border-border-dark bg-border-dark/30 text-text-muted"
                                      }`}
                                    >
                                      {key}
                                    </kbd>
                                  ))}
                                </div>
                              ) : (
                                <span className="text-[10px] text-text-muted flex items-center gap-0.5 opacity-0 hover:opacity-100 group-hover:opacity-100">
                                  Select <ExternalLink className="h-3 w-3" />
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer Guide */}
              <div className="flex items-center justify-between border-t border-border-dark bg-black/30 px-4 py-2 text-[10px] text-text-muted">
                <div className="flex gap-4">
                  <span>
                    <kbd className="font-mono">↑↓</kbd> to navigate
                  </span>
                  <span>
                    <kbd className="font-mono">↵</kbd> to select
                  </span>
                </div>
                <span>
                  Press <kbd className="font-mono">G</kbd> then <kbd className="font-mono">P/A/S/C/T</kbd> for quick jump
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
