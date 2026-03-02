
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out, Akshay will get back to you soon.",
    });
    
    setIsPending(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            Have a project in mind or want to talk about tech opportunities? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-card border border-border/50 rounded-2xl p-8 space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Email</h4>
                  <p className="text-lg font-bold">akshaybhiogade@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Location</h4>
                  <p className="text-lg font-bold">Nagpur, Maharashtra, India</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">Social Connect</h4>
                <div className="flex space-x-4">
                  <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary/20 hover:border-primary">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary/20 hover:border-primary">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium px-1">Full Name</label>
                  <Input id="name" name="name" placeholder="John Doe" required className="bg-background/50 h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium px-1">Email Address</label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required className="bg-background/50 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium px-1">Your Message</label>
                <Textarea id="message" name="message" placeholder="How can I help you today?" required className="min-h-[150px] bg-background/50" />
              </div>
              <Button type="submit" size="lg" disabled={isPending} className="w-full h-14 rounded-full text-lg transition-all group">
                {isPending ? "Sending..." : (
                  <>
                    Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
