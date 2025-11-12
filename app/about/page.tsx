import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Lightbulb, Heart, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn about Pramalogy's journey, mission, and the passionate team behind our innovative IT services and SaaS products.",
}

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in tech industry, passionate about solving real-world problems.",
    skills: ["Strategy", "Leadership", "Product Vision"],
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Technical architect with expertise in scalable systems and emerging technologies.",
    skills: ["Architecture", "Cloud", "AI/ML"],
  },
  {
    name: "Amit Patel",
    role: "Head of Product",
    bio: "Product strategist focused on user experience and market-driven solutions.",
    skills: ["Product Strategy", "UX Design", "Analytics"],
  },
  {
    name: "Sneha Gupta",
    role: "Lead Developer",
    bio: "Full-stack developer with passion for clean code and innovative solutions.",
    skills: ["React", "Node.js", "DevOps"],
  },
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to solve real problems through technology, making life easier for individuals and businesses.",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships based on trust and mutual growth.",
    color: "text-green-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace new technologies and methodologies to deliver cutting-edge solutions.",
    color: "text-purple-600",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in code quality, design, and customer service.",
    color: "text-orange-600",
  },
  {
    icon: Heart,
    title: "Passionate Team",
    description: "Our team is driven by passion for technology and commitment to making a difference.",
    color: "text-red-600",
  },
  {
    icon: Zap,
    title: "Agile & Fast",
    description: "We move quickly without compromising quality, adapting to changing requirements.",
    color: "text-yellow-600",
  },
]

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pramalogy
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're not just another tech company. We're innovators, problem-solvers, and dreamers who believe
              technology should make life better for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Pramalogy was born from a simple observation: there's a gap between innovative ideas and practical
                  solutions that actually solve real problems. Founded in 2020, we set out to bridge this gap by
                  combining technical expertise with deep understanding of user needs.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a comprehensive IT service and
                  SaaS product company. We've successfully delivered 50+ custom projects while building our own suite of
                  innovative products.
                </p>
                <p>
                  Today, we're proud to serve clients across various industries while continuously developing products
                  like BhadaSeva and ReckOnBook that address everyday challenges faced by individuals and businesses.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2020</div>
                  <div className="text-sm text-gray-600">Company Founded</div>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-purple-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                  <div className="text-sm text-gray-600">SaaS Products</div>
                </div>
                <div className="bg-orange-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from how we build products to how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${value.color} bg-gray-100`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind Pramalogy's success. Each bringing unique expertise and shared
              commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-8">
              To democratize technology by creating innovative solutions that solve real-world problems, making advanced
              technology accessible to businesses of all sizes while fostering a culture of continuous learning and
              growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                <p className="text-blue-100">Pushing boundaries with cutting-edge technology</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Impact</h3>
                <p className="text-blue-100">Creating solutions that make a real difference</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-blue-100">Helping our clients and team members thrive</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
