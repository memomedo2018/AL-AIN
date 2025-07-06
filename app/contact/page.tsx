import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#336666] to-[#2a5555] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-0">Contact Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Create a<span className="block text-[#7dd3c0]">Sustainable Future</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to discuss your environmental project? Our team of experts is here to help you achieve your
              sustainability goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Get In Touch</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Your Environmental Project Today</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours to discuss your project
                requirements and how we can help.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <Input
                      placeholder="Enter your first name"
                      className="border-gray-300 focus:border-[#336666] focus:ring-[#336666]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <Input
                      placeholder="Enter your last name"
                      className="border-gray-300 focus:border-[#336666] focus:ring-[#336666]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="border-gray-300 focus:border-[#336666] focus:ring-[#336666]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border-gray-300 focus:border-[#336666] focus:ring-[#336666]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization/Company</label>
                  <Input
                    placeholder="Enter your organization name"
                    className="border-gray-300 focus:border-[#336666] focus:ring-[#336666]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#336666] focus:border-[#336666]">
                    <option value="">Select project type</option>
                    <option value="landscape-design">Landscape Design & Execution</option>
                    <option value="environmental-monitoring">Environmental Monitoring</option>
                    <option value="smart-irrigation">Smart Irrigation Systems</option>
                    <option value="reforestation">Reforestation & Tree Management</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <Textarea
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                    rows={6}
                    className="border-gray-300 focus:border-[#336666] focus:ring-[#336666]"
                  />
                </div>

                <Button size="lg" className="w-full bg-[#336666] hover:bg-[#2a5555] text-white">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Contact Information</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Multiple Ways to Reach Us</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Choose the most convenient way to get in touch with our team. We're here to help with all your
                  environmental project needs.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#336666]/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-[#336666]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Head Office</h4>
                        <p className="text-gray-600">
                          Al Ain Forestry & Landscaping Services
                          <br />
                          P.O. Box 1234, Al Ain
                          <br />
                          Abu Dhabi, United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#336666]/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-[#336666]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Phone Numbers</h4>
                        <p className="text-gray-600">
                          Main Office: +971 3 123 4567
                          <br />
                          Emergency: +971 50 123 4567
                          <br />
                          Fax: +971 3 123 4568
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#336666]/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-[#336666]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Email Addresses</h4>
                        <p className="text-gray-600">
                          General Inquiries: info@afls.ae
                          <br />
                          Projects: projects@afls.ae
                          <br />
                          Careers: careers@afls.ae
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#336666]/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-[#336666]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                        <p className="text-gray-600">
                          Sunday - Thursday: 8:00 AM - 5:00 PM
                          <br />
                          Friday: 8:00 AM - 12:00 PM
                          <br />
                          Saturday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Find Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have multiple locations across the UAE to better serve our clients
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Al Ain Head Office",
                address: "Al Ain Forestry Complex, Al Ain",
                phone: "+971 3 123 4567",
                email: "alain@afls.ae",
              },
              {
                title: "Abu Dhabi Branch",
                address: "Environmental District, Abu Dhabi",
                phone: "+971 2 123 4567",
                email: "abudhabi@afls.ae",
              },
              {
                title: "Research Station",
                address: "Liwa Desert Research Facility",
                phone: "+971 2 987 6543",
                email: "research@afls.ae",
              },
            ].map((office, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4 text-[#336666]" />
                      {office.address}
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-[#336666]" />
                      {office.phone}
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4 text-[#336666]" />
                      {office.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Embedded Map Placeholder */}
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Google Maps integration would be embedded here</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Questions About Our Services</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of environmental projects does AFLS handle?",
                answer:
                  "AFLS specializes in landscape design and execution, smart environmental monitoring, irrigation systems, reforestation, and biodiversity tracking. We handle projects ranging from small residential landscapes to large-scale governmental environmental initiatives.",
              },
              {
                question: "How long does a typical project take to complete?",
                answer:
                  "Project timelines vary depending on scope and complexity. Small landscaping projects may take 2-4 weeks, while large reforestation or monitoring system installations can take 6-24 months. We provide detailed timelines during the planning phase.",
              },
              {
                question: "Do you provide maintenance services after project completion?",
                answer:
                  "Yes, we offer comprehensive maintenance packages for all our projects. This includes regular monitoring, system maintenance, plant care, and performance optimization to ensure long-term success.",
              },
              {
                question: "Can AFLS help with environmental compliance and regulations?",
                answer:
                  "Absolutely. Our team includes environmental compliance specialists who can help navigate UAE environmental regulations, conduct impact assessments, and ensure your project meets all regulatory requirements.",
              },
              {
                question: "What makes AFLS different from other environmental service providers?",
                answer:
                  "AFLS combines traditional environmental expertise with cutting-edge technology, including IoT monitoring systems and AI-powered analytics. As a semi-governmental entity, we have unique access to resources and align with national sustainability goals.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-[#336666] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Choose Your Preferred Contact Method</h2>
            <p className="text-xl text-gray-200">We're available through multiple channels to serve you better</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                action: "Start Chat",
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Phone Call",
                description: "Speak directly with our experts",
                action: "Call Now",
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email Support",
                description: "Send us detailed project requirements",
                action: "Send Email",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Schedule Meeting",
                description: "Book a consultation with our team",
                action: "Book Now",
              },
            ].map((method, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 text-white text-center hover:bg-white/20 transition-colors duration-300"
              >
                <CardContent className="p-6">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-gray-200 mb-4">{method.description}</p>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#336666] bg-transparent"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
