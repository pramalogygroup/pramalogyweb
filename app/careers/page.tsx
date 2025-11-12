import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Heart, Coffee, Laptop, GraduationCap, ArrowRight, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description:
    "Join Pramalogy and be part of an innovative team building the future of technology. Explore career opportunities and grow with us.",
}

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-15 LPA",
    description:
      "We are looking for a skilled Full Stack Developer to join our engineering team and help build our next-generation SaaS products.",
    requirements: [
      "Strong experience with React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Knowledge of database design and optimization",
      "Familiarity with DevOps practices",
      "Strong problem-solving skills",
    ],
    benefits: ["Health Insurance", "Flexible Hours", "Remote Work", "Learning Budget"],
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Mumbai, India / Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹10-18 LPA",
    description:
      "Join our product team to drive the strategy and execution of our innovative SaaS products from conception to launch.",
    requirements: [
      "Experience in product management for SaaS products",
      "Strong analytical and data-driven mindset",
      "Excellent communication and leadership skills",
      "Understanding of user experience principles",
      "Experience with agile development methodologies",
    ],
    benefits: ["Health Insurance", "Stock Options", "Flexible Hours", "Conference Budget"],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹6-12 LPA",
    description: "Create beautiful and intuitive user experiences for our SaaS products and client projects.",
    requirements: [
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of user-centered design principles",
      "Experience with design systems",
      "Knowledge of front-end technologies is a plus",
    ],
    benefits: ["Health Insurance", "Creative Tools Budget", "Flexible Hours", "Design Conference Access"],
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Mumbai, India / Remote",
    type: "Full-time",
    experience: "3-6 years",
    salary: "₹9-16 LPA",
    description:
      "Help us build and maintain scalable infrastructure for our growing SaaS products and client applications.",
    requirements: [
      "Experience with AWS/Azure cloud platforms",
      "Proficiency in Docker, Kubernetes",
      "Knowledge of CI/CD pipelines",
      "Experience with Infrastructure as Code (Terraform)",
      "Strong scripting skills (Python, Bash)",
    ],
    benefits: ["Health Insurance", "Certification Budget", "Remote Work", "Tech Allowance"],
  },
  {
    title: "Business Development Executive",
    department: "Sales",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹4-8 LPA + Commission",
    description:
      "Drive business growth by identifying new opportunities and building relationships with potential clients.",
    requirements: [
      "Strong communication and presentation skills",
      "Experience in B2B sales or business development",
      "Understanding of technology services and SaaS",
      "Ability to build and maintain client relationships",
      "Goal-oriented with a track record of meeting targets",
    ],
    benefits: ["Health Insurance", "Commission Structure", "Travel Allowance", "Sales Incentives"],
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Mumbai, India / Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹5-10 LPA",
    description: "Lead our digital marketing efforts to promote our SaaS products and build brand awareness.",
    requirements: [
      "Experience in digital marketing and content creation",
      "Knowledge of SEO, SEM, and social media marketing",
      "Proficiency in marketing tools (Google Analytics, HubSpot)",
      "Strong writing and communication skills",
      "Experience with B2B SaaS marketing preferred",
    ],
    benefits: ["Health Insurance", "Marketing Tools Access", "Flexible Hours", "Conference Budget"],
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family, plus wellness programs.",
  },
  {
    icon: Laptop,
    title: "Latest Technology",
    description: "Work with the latest tools and technologies. We provide top-tier equipment.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work-life balance is important. Flexible working hours and remote work options.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Continuous learning opportunities, conference attendance, and skill development.",
  },
  {
    icon: Coffee,
    title: "Great Culture",
    description: "Collaborative environment with team events, celebrations, and fun activities.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Competitive salaries, performance bonuses, and stock options for eligible roles.",
  },
]

const culture = [
  {
    title: "Innovation First",
    description: "We encourage experimentation and creative problem-solving.",
  },
  {
    title: "Collaborative Team",
    description: "We believe in the power of teamwork and open communication.",
  },
  {
    title: "Growth Mindset",
    description: "Continuous learning and personal development are core to our culture.",
  },
  {
    title: "Work-Life Balance",
    description: "We respect your time and support a healthy work-life balance.",
  },
]

export default function CareersPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Be part of an innovative team that's building the future of technology. We're looking for passionate
              individuals who want to make a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                6 Open Positions
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Remote Friendly
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Great Benefits
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Pramalogy, we believe that great products are built by great teams. Here's what makes our workplace
              special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {culture.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to take the next step in your career? Explore our current openings and find the perfect role for
              you.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2">{position.title}</CardTitle>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{position.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {position.type} • {position.experience}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{position.salary}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <Badge key={benefitIndex} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how
              you'd like to contribute to Pramalogy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Send Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
