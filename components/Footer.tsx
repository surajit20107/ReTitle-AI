"use client";

import { Github, Linkedin, Twitter, CodeXml } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 bg-slate-700 flex flex-col items-center justify-center gap-4">
      <div>
        &copy; {new Date().getFullYear()} ReTitle. All rights reserved.
      </div>
      <div className="w-full flex items-center justify-evenly">
        <a href="https://linkedin.com/in/surajit-jana20107" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
        <a href="https://x.com/surajit_20107" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
        <a href="https://github.com/surajit20107" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://surajit-dev.vercel.app" target="_blank" rel="noopener noreferrer">
          <CodeXml />
        </a>
      </div>
    </footer>
  );
}
