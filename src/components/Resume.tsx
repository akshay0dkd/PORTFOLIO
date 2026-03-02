
"use client";

import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, Trophy, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "DSA & Problem Solving",
    description: "Consistent high ranking on coding platforms with a deep understanding of optimized algorithm design.",
    color: "text-primary"
  },
  {
    icon: Rocket,
    title: "Java Development",
    description: "Actively building industry-standard applications following modern software development practices.",
    color: "text-accent"
  },
  {
    icon: CheckCircle2,
    title: "Real-world Impact",
    description: "Focused on solving rural hiring challenges through AgriConnect and utilizing AI for better user experiences.",
    color: "text-green-500"
  }
];

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready for New <span className="text-gradient">Challenges</span></h2>
            <p className="text-xl text-muted-foreground">
              I am currently looking for internship opportunities where I can apply my skills in software development and contribute to meaningful projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex space-x-4 p-4 rounded-xl bg-card/50 border border-border/50">
                  <item.icon className={`h-8 w-8 ${item.color} shrink-0`} />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg bg-primary hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
              <a href="/resume.pdf" download>
                <Download className="mr-3 h-6 w-6" /> Download My Resume
              </a>
            </Button>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center space-y-6 text-center">
            <div className="p-8 rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 w-full flex flex-col items-center space-y-4">
              <div className="text-5xl font-bold text-primary">200+</div>
              <p className="font-medium">Coding Problems Solved</p>
            </div>
            <div className="p-8 rounded-3xl border-2 border-dashed border-accent/30 bg-accent/5 w-full flex flex-col items-center space-y-4">
              <div className="text-5xl font-bold text-accent">3+</div>
              <p className="font-medium">Active Tech Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
