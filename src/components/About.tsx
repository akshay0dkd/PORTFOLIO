
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Code2, Heart, Database, Layout, GitBranch } from "lucide-react";

const skills = [
  { name: "C++ (DSA)", level: 80, category: "Languages" },
  { name: "Java (Development)", level: 75, category: "Languages" },
  { name: "Python", level: 65, category: "Languages" },
  { name: "React & Firebase", level: 70, category: "Tools" },
  { name: "DBMS & SQL", level: 80, category: "Core" },
  { name: "Problem Solving", level: 85, category: "Core" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            A passionate 2nd-year CSE student focused on creating high-performance software and solving complex real-world problems.
          </p>
        </div>

        <Tabs defaultValue="education" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-12">
            <TabsTrigger value="education" className="text-base">Education</TabsTrigger>
            <TabsTrigger value="skills" className="text-base">Skills</TabsTrigger>
            <TabsTrigger value="interests" className="text-base">Interests</TabsTrigger>
          </TabsList>

          <TabsContent value="education">
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">B.Tech in Computer Science Engineering</h3>
                    <p className="text-lg font-medium text-foreground/80">G H Raisoni College of Engineering, Nagpur</p>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className="text-sm">2nd Year Student</Badge>
                      <span className="text-muted-foreground">|</span>
                      <span className="text-muted-foreground">Current GPA: 8.5/10 (Expected)</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Deeply involved in core CS subjects like Data Structures, Algorithms, Object-Oriented Programming, and Database Management. Actively preparing for tech placements through consistent problem-solving on LeetCode and GeeksforGeeks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" id="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-3 p-4 rounded-xl bg-card border border-border/50">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
              <div className="md:col-span-2 mt-8">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <GitBranch className="mr-2 h-5 w-5 text-primary" />
                  Other Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Git", "GitHub", "Springboot", "REST APIs", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"].map((tool) => (
                    <Badge key={tool} variant="outline" className="px-4 py-2 text-sm bg-background">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="interests">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardContent className="p-6 flex space-x-4 items-start">
                  <Heart className="h-10 w-10 text-destructive mt-1" />
                  <div>
                    <h4 className="text-xl font-bold">AgriTech & Rural Dev</h4>
                    <p className="text-muted-foreground">Building software solutions tailored for the Indian agricultural landscape to improve efficiency.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 flex space-x-4 items-start">
                  <Code2 className="h-10 w-10 text-primary mt-1" />
                  <div>
                    <h4 className="text-xl font-bold">Competitive Programming</h4>
                    <p className="text-muted-foreground">Daily practice on algorithms and advanced data structures to sharpen logical thinking.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 flex space-x-4 items-start">
                  <Database className="h-10 w-10 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-bold">System Architecture</h4>
                    <p className="text-muted-foreground">Exploring how scalable cloud-based backend systems are built and maintained.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 flex space-x-4 items-start">
                  <Layout className="h-10 w-10 text-primary mt-1" />
                  <div>
                    <h4 className="text-xl font-bold">Exploring</h4>
                    <p className="text-muted-foreground">Actively Ready to learn and adapt every new technology to achieve the standards of fast changing tech world(using AI).   </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
