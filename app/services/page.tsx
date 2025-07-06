import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Leaf,
  BarChart3,
  Droplets,
  TreePine,
  Bug,
  Cpu,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Users,
} from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#336666] to-[#2a5555] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-0">Our Services</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Environmental
              <span className="block text-[#7dd3c0]">Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From landscape design to smart monitoring systems, we deliver integrated solutions that enhance the UAE's
              natural environment and support sustainable development goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Service Excellence</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Integrated Environmental Management</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our comprehensive suite of services addresses every aspect of environmental stewardship, from initial
                planning and design to long-term monitoring and maintenance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine traditional expertise with cutting-edge technology to deliver solutions that are both
                environmentally sound and economically viable.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Environmental Services"
                width={700}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Landscape Design & Execution */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-[#336666]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="h-8 w-8 text-[#336666]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Landscape Design & Execution</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional landscape architecture and implementation services tailored to the UAE's unique climate
                  and environmental conditions.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Master planning and site analysis",
                    "Native plant selection and design",
                    "Hardscape and infrastructure development",
                    "Project management and execution",
                    "Post-installation maintenance programs",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#336666] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#336666]">200+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#336666]">95%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>

                <Button className="w-full bg-[#336666] hover:bg-[#2a5555] text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Smart Environmental Monitoring */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-[#336666]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-[#336666]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Environmental Monitoring</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced IoT systems for real-time environmental data collection, analysis, and reporting to support
                  informed decision-making.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Real-time air quality monitoring",
                    "Soil health and moisture tracking",
                    "Weather station networks",
                    "Biodiversity monitoring systems",
                    "Data analytics and reporting dashboards",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#336666] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#336666]">50+</div>
                    <div className="text-sm text-gray-600">Monitoring Sites</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#336666]">24/7</div>
                    <div className="text-sm text-gray-600">Data Collection</div>
                  </div>
                </div>

                <Button className="w-full bg-[#336666] hover:bg-[#2a5555] text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Smart Irrigation Systems */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-[#336666]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Droplets className="h-8 w-8 text-[#336666]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Irrigation Systems</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Water-efficient irrigation solutions with automated controls, designed to optimize water usage while
                  maintaining healthy landscapes.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Drip irrigation system design",
                    "Smart controller installation",
                    "Soil moisture sensor integration",
                    "Water usage optimization",
                    "Remote monitoring and control",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#336666] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#336666]">40%</div>
                    <div className="text-sm text-gray-600">Water Savings</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#336666]">100+</div>
                    <div className="text-sm text-gray-600">Systems Installed</div>
                  </div>
                </div>

                <Button className="w-full bg-[#336666] hover:bg-[#2a5555] text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Reforestation & Tree Management */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-[#336666]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TreePine className="h-8 w-8 text-[#336666]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reforestation & Tree Management</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Large-scale tree planting and forest management programs designed to enhance biodiversity and support
                  carbon sequestration goals.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Native species propagation",
                    "Large-scale planting programs",
                    "Tree health monitoring",
                    "Forest management planning",
                    "Carbon offset calculations",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#336666] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#336666]">500K+</div>
                    <div className="text-sm text-gray-600">Trees Planted</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#336666]">85%</div>
                    <div className="text-sm text-gray-600">Survival Rate</div>
                  </div>
                </div>

                <Button className="w-full bg-[#336666] hover:bg-[#2a5555] text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Specialized Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Environmental Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge services that leverage the latest technology and scientific research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bug className="h-8 w-8" />,
                title: "Biodiversity Tracking",
                description:
                  "Advanced monitoring systems to track and preserve local wildlife populations and ecosystem health.",
              },
              {
                icon: <Cpu className="h-8 w-8" />,
                title: "AI-Powered Analytics",
                description: "Machine learning algorithms for predictive environmental modeling and optimization.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Renewable Energy Integration",
                description:
                  "Solar-powered systems for irrigation and monitoring equipment to reduce carbon footprint.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Environmental Compliance",
                description: "Regulatory compliance consulting and environmental impact assessment services.",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Climate Adaptation",
                description: "Strategies and solutions to help landscapes adapt to changing climate conditions.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community Engagement",
                description: "Educational programs and community involvement initiatives for environmental awareness.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#336666]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#336666] transition-colors duration-300">
                    <div className="text-[#336666] group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Our Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Deliver Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures every project meets the highest standards of quality and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Comprehensive site analysis and strategic planning phase",
              },
              {
                step: "02",
                title: "Design & Engineering",
                description: "Detailed design development with technical specifications",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Professional execution with quality control measures",
              },
              {
                step: "04",
                title: "Monitoring & Maintenance",
                description: "Ongoing support and performance optimization",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#336666] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#336666] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Environment?</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Contact our team of experts to discuss your environmental project needs and discover how AFLS can help you
            achieve your sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#336666] hover:bg-gray-100 px-8 py-4 text-lg">
              Get a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#336666] px-8 py-4 text-lg bg-transparent"
            >
              View Our Projects
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
