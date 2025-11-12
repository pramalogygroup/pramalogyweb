import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Cloud, Database, Palette, Shield, Zap, Users, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services - Custom Development & IT Solutions",
  description:
    "Comprehensive IT services including custom development, mobile apps, cloud solutions, and more. Transform your business with Pramalogy.",
}

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built to meet your specific business requirements and goals.",
    features: [
      "Web Application Development",
      "API Development & Integration",
      "System Integration",
      "Legacy System Modernization",
      "E-commerce Solutions",
      "CRM & ERP Systems",
    ],
    technologies: ["React", "Node.js", "Python", "Java", ".NET", "PHP"],
    pricing: "Starting from ₹50,000",
    timeline: "2-12 weeks",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: [
      "Native iOS Development",
      "Native Android Development",
      "React Native Apps",
      "Flutter Development",
      "Progressive Web Apps",
      "App Store Optimization",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
    pricing: "Starting from ₹75,000",
    timeline: "4-16 weeks",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: [
      "Cloud Migration",
      "DevOps Implementation",
      "Microservices Architecture",
      "Serverless Solutions",
      "Container Orchestration",
      "Cloud Security",
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    pricing: "Starting from ₹30,000",
    timeline: "1-8 weeks",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics solutions.",
    features: [
      "Business Intelligence",
      "Data Visualization",
      "Machine Learning Models",
      "Predictive Analytics",
      "Real-time Dashboards",
      "Data Warehouse Solutions",
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "TensorFlow"],
    pricing: "Starting from ₹40,000",
    timeline: "3-10 weeks",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging and intuitive experiences.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design Systems",
      "Usability Testing",
      "Brand Identity Design",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
    pricing: "Starting from ₹25,000",
    timeline: "2-6 weeks",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Assessment",
      "Risk Management",
      "Security Training",
      "Incident Response",
    ],
    technologies: ["OWASP", "Nessus", "Metasploit", "Wireshark", "Burp Suite", "Kali Linux"],
    pricing: "Starting from ₹35,000",
    timeline: "1-4 weeks",
    color: "from-gray-600 to-gray-800",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We understand your requirements, analyze your needs, and create a detailed project plan.",
    icon: Users,
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our team designs the solution architecture and creates user-friendly interfaces.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your solution using best practices and conduct thorough testing.",
    icon: Code,
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "We deploy your solution and provide ongoing support and maintenance.",
    icon: Zap,
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive IT services designed to transform your business. From custom development to cutting-edge
              solutions, we deliver excellence at every step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                50+ Projects Delivered
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                100% Client Satisfaction
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                24/7 Support
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Starting from</div>
                        <div className="font-semibold text-lg">{service.pricing}</div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-sm text-gray-500">Timeline</div>
                          <div className="font-semibold">{service.timeline}</div>
                        </div>
                        <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}>
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds
              your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Let's discuss your requirements and create a solution that drives your business forward. Get a free
              consultation and project estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
