"use client";

import emailjs from "@emailjs/browser";
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

    const form = e.target as HTMLFormElement;

    try {
      await emailjs.sendForm(
        "service_asf8mn4",
        "template_tzmfd8q",
        form,
        "JE_5E90lpGkeeosvz"
      );

      toast({
        title: "Message Sent ",
        description: "Thank you for contacting me. I will respond shortly.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send ",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            Have a project in mind or want to discuss opportunities? Let’s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-card border border-border/50 rounded-2xl p-8 space-y-8">
              
              <div className="flex items-center space-x-6">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Email
                  </h4>
                  <p className="text-lg font-bold">
                    akshaybhiogade77@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Location
                  </h4>
                  <p className="text-lg font-bold">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
                  Social Connect
                </h4>
                <div className="flex space-x-4">
                  
                  <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12">
                    <a
                      href="https://www.linkedin.com/in/akshay-bhiogade"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12">
                    <a
                      href="https://github.com/akshay0dkd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>

                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Hidden anti-spam field */}
              <input type="hidden" name="contact_number" value="portfolio_contact" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="text-sm font-medium px-1">
                    Full Name
                  </label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-background/50 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium px-1">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    className="bg-background/50 h-12"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium px-1">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="min-h-[150px] bg-background/50"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full h-14 rounded-full text-lg transition-all group"
              >
                {isPending ? (
                  "Sending Message..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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