
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "profile-photo");

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider">
                CSE STUDENT @ GH Raisoni College
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
                I'm <span className="text-gradient">Akshay Bhiogade</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                CSE Student | DSA Enthusiast | Java & App Developer | AgriTech Innovator
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Building real-world tech solutions and preparing for top tech placements. I focus on high-impact projects that solve practical problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#resume">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto lg:mr-0 animate-in zoom-in duration-700">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
              <Image
                src={profileImg?.imageUrl || ""}
                alt="Akshay Bhiogade"
                fill
                className="object-cover"
                data-ai-hint={profileImg?.imageHint}
                priority
              />
            </div>
            {/* Decoration blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
