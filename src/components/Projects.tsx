
"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "dsa-project",
    title: "DSA Algorithms Repository",
    description: "A comprehensive collection of optimized C++ solutions for common data structures and algorithms problems covering sorting, recursion, trees, and more.",
    tech: ["C++", "STL", "Problem Solving"],
    highlights: ["100+ Problems Solved", "Clean & Documented Code", "Performance Optimized"],
    github: "https://github.com",
    demo: null,
  },
  {
    id: "agriconnect-project",
    title: "AgriConnect – Farmer Platform",
    description: "A digital marketplace connecting rural farmers with available agricultural laborers to simplify hiring and payment processing.",
    tech: ["React", "Firebase", "Tailwind"],
    highlights: ["Real-time Labor Availability", "Request Management", "Mobile First Design"],
    github: "https://github.com",
    demo: null,
  },
  {
    id: "movieflex-project",
    title: "MovieFlex AI App",
    description: "Next-gen movie discovery platform using AI to generate intelligent summaries and perform sentiment analysis on user reviews.",
    tech: ["HTML", "CSS", "JS", "OpenAI API"],
    highlights: ["AI Storyline Generation", "TMDB API Integration", "Responsive UI"],
    github: "https://github.com",
    demo: "https://movieflex.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            Practical applications of code to solve real-world challenges, from rural connectivity to AI-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectImg = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="group overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={projectImg?.imageUrl || ""}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={projectImg?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[10px] uppercase tracking-wider">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="text-xs space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 flex gap-4">
                  <Button asChild variant="outline" size="sm" className="flex-1 rounded-full border-primary/20 hover:border-primary">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm" className="flex-1 rounded-full bg-primary hover:bg-primary/90">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
