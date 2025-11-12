"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Ideas?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your project and explore how Pramalogy can help you achieve your goals. From concept to
            deployment, we're here to make your vision a reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
              <div className="text-blue-200">No commitment required</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Quick Response</div>
              <div className="text-blue-200">Within 24 hours</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Expert Team</div>
              <div className="text-blue-200">Experienced professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
