
"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="text-lg font-headline font-semibold tracking-tight">
          Akshay<span className="text-primary">.</span>
        </p>
        <p className="text-muted-foreground text-sm">
          © {currentYear} Akshay Bhiogade. Nagpur, India.
        </p>
        <p className="text-xs text-muted-foreground/60 flex items-center justify-center">
          Built with <span className="text-destructive mx-1 text-base">❤️</span> using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
