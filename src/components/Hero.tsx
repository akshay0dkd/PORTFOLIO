"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col space-y-8 animate-fade-in-up">
            <div className="space-y-5">
              <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider">
                CSE Student @ GH Raisoni College of Engineering, Nagpur
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Akshay Bhiogade
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                DSA Enthusiast | Java Developer | AgriTech Innovator
              </p>

              <p className="text-lg text-muted-foreground max-w-lg">
                I build scalable applications and real-world tech solutions.
                Currently focused on mastering DSA and backend development
                for top tech placements.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 hover:bg-primary/10 transition-all duration-300"
              >
                <a href="#resume">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/akshay0dkd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="https://linkedin.com/in/akshay-bhiogade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative mx-auto lg:mr-0">
            <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] rounded-full overflow-hidden border border-primary/20 shadow-2xl">
              
              <Image
                src="/pro5.jpeg"
                alt="Akshay Bhiogade"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
