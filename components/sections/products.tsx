"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, DollarSign, GraduationCap, Calendar, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    icon: Home,
    title: "BhadaSeva",
    status: "Live",
    description: "Complete property and rent management solution for landlords and tenants.",
    features: [
      "Property Management",
      "Rent Collection",
      "Tenant Screening",
      "Maintenance Tracking",
      "Financial Reports",
      "Document Storage",
    ],
    pricing: "Starting at ₹299/month",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    icon: DollarSign,
    title: "ReckOnBook",
    status: "Live",
    description: "Personal finance management made simple. Track income, expenses, and achieve financial goals.",
    features: [
      "Expense Tracking",
      "Budget Planning",
      "Financial Goals",
      "Investment Tracking",
      "Bill Reminders",
      "Analytics Dashboard",
    ],
    pricing: "Starting at ₹199/month",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    icon: GraduationCap,
    title: "EduFlow",
    status: "Coming Soon",
    description: "Next-generation e-learning platform with interactive courses and AI-powered learning paths.",
    features: [
      "Interactive Courses",
      "AI Learning Paths",
      "Progress Tracking",
      "Certification",
      "Live Sessions",
      "Community Forums",
    ],
    pricing: "Pricing TBA",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
  {
    icon: Calendar,
    title: "PlanTrack Pro",
    status: "In Development",
    description: "Advanced personal planning and tracking application for productivity enthusiasts.",
    features: [
      "Goal Setting",
      "Habit Tracking",
      "Time Management",
      "Progress Analytics",
      "Team Collaboration",
      "Smart Reminders",
    ],
    pricing: "Pricing TBA",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
  },
]

export default function Products() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SaaS Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative subscription-based solutions designed to solve real-world problems and empower individuals and
            businesses to achieve more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${product.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
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
                  <CardTitle className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-500">Pricing</p>
                      <p className="font-semibold text-lg">{product.pricing}</p>
                    </div>
                    <Button
                      className={`bg-gradient-to-r ${product.color} hover:opacity-90 text-white`}
                      disabled={product.status !== "Live"}
                    >
                      {product.status === "Live" ? "Try Free" : "Notify Me"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
