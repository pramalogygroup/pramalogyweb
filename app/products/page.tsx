import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, DollarSign, GraduationCap, Calendar, ArrowRight, Star, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our SaaS Products - Innovative Solutions",
  description:
    "Discover Pramalogy's innovative SaaS products including BhadaSeva, ReckOnBook, and upcoming solutions designed to solve real-world problems.",
}

const products = [
  {
    icon: Home,
    title: "BhadaSeva",
    status: "Live",
    tagline: "Property Management Made Simple",
    description:
      "Complete property and rent management solution for landlords, property managers, and tenants. Streamline your rental business with automated rent collection, tenant screening, and comprehensive reporting.",
    features: [
      "Property Portfolio Management",
      "Automated Rent Collection",
      "Tenant Screening & Verification",
      "Maintenance Request Tracking",
      "Financial Reports & Analytics",
      "Document Storage & Management",
      "Payment Reminders & Notifications",
      "Multi-property Dashboard",
    ],
    benefits: [
      "Reduce rent collection time by 80%",
      "Automate routine property management tasks",
      "Improve tenant satisfaction",
      "Generate detailed financial reports",
    ],
    pricing: {
      basic: "₹299/month",
      pro: "₹599/month",
      enterprise: "Custom",
    },
    users: "500+",
    rating: 4.8,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    link: "/products/bhadaseva",
  },
  {
    icon: DollarSign,
    title: "ReckOnBook",
    status: "Live",
    tagline: "Personal Finance Simplified",
    description:
      "Take control of your finances with our comprehensive personal finance management platform. Track expenses, set budgets, monitor investments, and achieve your financial goals.",
    features: [
      "Expense Tracking & Categorization",
      "Budget Planning & Monitoring",
      "Financial Goal Setting",
      "Investment Portfolio Tracking",
      "Bill Reminders & Alerts",
      "Income vs Expense Analytics",
      "Bank Account Integration",
      "Tax Planning Tools",
    ],
    benefits: [
      "Save 20% more on monthly expenses",
      "Never miss a bill payment",
      "Track investment performance",
      "Achieve financial goals faster",
    ],
    pricing: {
      basic: "₹199/month",
      pro: "₹399/month",
      enterprise: "₹799/month",
    },
    users: "1,200+",
    rating: 4.9,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    link: "/products/reckonbook",
  },
  {
    icon: GraduationCap,
    title: "EduFlow",
    status: "Coming Soon",
    tagline: "Next-Gen E-Learning Platform",
    description:
      "Revolutionary e-learning platform with AI-powered personalized learning paths, interactive courses, and comprehensive skill development programs for individuals and organizations.",
    features: [
      "AI-Powered Learning Paths",
      "Interactive Video Courses",
      "Real-time Progress Tracking",
      "Skill Assessment & Certification",
      "Live Virtual Classrooms",
      "Community Forums & Discussion",
      "Mobile Learning App",
      "Corporate Training Solutions",
    ],
    benefits: [
      "Personalized learning experience",
      "Industry-recognized certifications",
      "Learn at your own pace",
      "Access to expert instructors",
    ],
    pricing: {
      basic: "TBA",
      pro: "TBA",
      enterprise: "TBA",
    },
    users: "Pre-launch",
    rating: null,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    link: "/products/eduflow",
  },
  {
    icon: Calendar,
    title: "PlanTrack Pro",
    status: "In Development",
    tagline: "Advanced Personal Planning",
    description:
      "Comprehensive personal planning and tracking application designed for productivity enthusiasts. Set goals, track habits, manage time, and achieve more with intelligent insights.",
    features: [
      "Smart Goal Setting & Tracking",
      "Habit Formation & Monitoring",
      "Time Management Tools",
      "Progress Analytics & Insights",
      "Team Collaboration Features",
      "Smart Reminders & Notifications",
      "Calendar Integration",
      "Productivity Reports",
    ],
    benefits: [
      "Increase productivity by 40%",
      "Build lasting positive habits",
      "Better time management",
      "Data-driven goal achievement",
    ],
    pricing: {
      basic: "TBA",
      pro: "TBA",
      enterprise: "TBA",
    },
    users: "In Development",
    rating: null,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    link: "/products/plantrack",
  },
]

export default function ProductsPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SaaS Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Innovative subscription-based solutions designed to solve real-world problems. From property management to
              personal finance, we're building the future of productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                2 Live Products
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                2 Coming Soon
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                1,700+ Active Users
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => {
              const Icon = product.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Product Info */}
                  <div className={isEven ? "lg:pr-8" : "lg:pl-8 lg:col-start-2"}>
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge
                        variant={product.status === "Live" ? "default" : "secondary"}
                        className={product.status === "Live" ? "bg-green-100 text-green-800" : ""}
                      >
                        {product.status}
                      </Badge>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h2>
                    <p className={`text-lg font-medium mb-4 ${product.textColor}`}>{product.tagline}</p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.description}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="font-semibold">{product.users}</span>
                        <span className="text-gray-500 text-sm">users</span>
                      </div>
                      {product.rating && (
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-500 fill-current" />
                          <span className="font-semibold">{product.rating}</span>
                          <span className="text-gray-500 text-sm">rating</span>
                        </div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Benefits:</h4>
                      <div className="space-y-2">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-gray-600">
                            <Zap className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Pricing:</h4>
                      <div className="flex gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Basic</div>
                          <div className="font-semibold">{product.pricing.basic}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Pro</div>
                          <div className="font-semibold">{product.pricing.pro}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Enterprise</div>
                          <div className="font-semibold">{product.pricing.enterprise}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-4">
                      <Link href={product.link}>
                        <Button
                          className={`bg-gradient-to-r ${product.color} hover:opacity-90 text-white`}
                          disabled={product.status !== "Live"}
                        >
                          {product.status === "Live" ? "Try Free" : "Learn More"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      {product.status !== "Live" && <Button variant="outline">Notify Me</Button>}
                    </div>
                  </div>

                  {/* Product Features Card */}
                  <div className={isEven ? "lg:pl-8" : "lg:pr-8 lg:col-start-1 lg:row-start-1"}>
                    <Card className="border-0 shadow-xl">
                      <div className={`h-2 bg-gradient-to-r ${product.color}`}></div>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Features & Capabilities
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${product.color}`}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Join thousands of users who are already benefiting from our innovative SaaS solutions. Start your free
              trial today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent"
              >
                Compare Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
