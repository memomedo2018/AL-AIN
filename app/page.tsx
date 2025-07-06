"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Leaf, Droplets, TreePine, BarChart3, Award, Play, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CountUpAnimation } from "@/components/count-up-animation"
import { AnimatedSection } from "@/components/animated-section"
import { VideoModal } from "@/components/video-modal"

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "AFLS represents the pinnacle of environmental excellence in the UAE, driving our nation's commitment to sustainable development and the Net Zero 2050 vision through innovative solutions and unwavering dedication.",
      author: "H.E. Dr. Ahmed Al Mansouri",
      position: "Director General, AFLS",
      image: "/images/team/director-general.jpg",
    },
    {
      quote:
        "Through cutting-edge technology and deep environmental expertise, AFLS has transformed how we approach landscape management in the UAE, setting new standards for sustainability across the region.",
      author: "Eng. Fatima Al Zahra",
      position: "Head of Environmental Operations",
      image: "/images/team/head-operations.jpg",
    },
    {
      quote:
        "The integration of smart monitoring systems and AI-driven analytics by AFLS has revolutionized our understanding of ecosystem health, enabling data-driven decisions for environmental preservation.",
      author: "Dr. Mohammed Al Rashid",
      position: "Chief Technology Officer",
      image: "/images/team/cto.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section - Fully Responsive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#336666]/85 via-[#2a5555]/75 to-black/60 z-10" />
          <Image
            src="/images/hero/uae-landscape.jpg"
            alt="UAE Desert Landscape with Sustainable Development"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
        </div>

        {/* Floating Elements - Hidden on mobile for performance */}
        <div className="absolute inset-0 z-5 hidden md:block">
          <div className="absolute top-32 left-16 w-3 h-3 bg-[#7dd3c0] rounded-full animate-bounce opacity-60" />
          <div className="absolute top-48 right-24 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
          <div className="absolute bottom-48 left-32 w-1 h-1 bg-[#7dd3c0]/80 rounded-full animate-ping" />
        </div>

        {/* Main Hero Content - Mobile First */}
        <div className="relative z-20 text-center text-white w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="opacity-0 animate-fade-in">
              {/* UAE Badge - Responsive */}
              <div className="mb-6 sm:mb-8">
                <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">UAE Net Zero 2050 Strategic Initiative</span>
                  <span className="sm:hidden">UAE Net Zero 2050</span>
                </Badge>
              </div>

              {/* Main Headline - Responsive Typography */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-white via-[#7dd3c0] to-white bg-clip-text text-transparent">
                  Cultivating
                </span>
                <span className="block text-[#7dd3c0] font-light">UAE's Green Legacy</span>
              </h1>

              {/* Subtitle - Responsive */}
              <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 leading-relaxed font-light px-4 sm:px-0">
                  Leading the Emirates' environmental transformation through innovative forestry management, sustainable
                  landscaping excellence, and cutting-edge environmental monitoring technologies.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-3 sm:mt-4 font-light">
                  Proudly serving Al Ain and Abu Dhabi regions since 2008
                </p>
              </div>

              {/* CTA Buttons - Mobile First */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-16">
                <Button
                  size="lg"
                  className="group bg-[#336666] hover:bg-[#2a5555] text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <span className="sm:hidden">Explore Impact</span>
                  <span className="hidden sm:inline">Explore Our Impact</span>
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-md px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full bg-white/5 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <Play className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="sm:hidden">Our Story</span>
                  <span className="hidden sm:inline">Watch Our Story</span>
                </Button>
              </div>

              {/* Key Stats Preview - Responsive Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                {[
                  { number: "500K+", label: "Trees Planted" },
                  { number: "150+", label: "Projects Completed" },
                  { number: "25+", label: "Monitoring Sites" },
                  { number: "15", label: "Years Excellence" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7dd3c0] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-300 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20 hidden sm:block">
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm opacity-80 font-medium">Discover More</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Decorative Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-15" />
      </section>

      {/* About Section - Responsive */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
                <div>
                  <Badge className="mb-4 sm:mb-6 bg-[#336666]/10 text-[#336666] border-[#336666]/20 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
                    About AFLS
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                    Pioneering
                    <span className="block bg-gradient-to-r from-[#336666] to-[#7dd3c0] bg-clip-text text-transparent">
                      Environmental Excellence
                    </span>
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                  <p className="text-lg sm:text-xl">
                    Al Ain Forestry & Landscaping Services (AFLS) stands as the UAE's premier environmental stewardship
                    organization, bridging governmental vision with innovative implementation across the Emirates.
                  </p>
                  <p className="hidden sm:block">
                    As a distinguished semi-governmental entity, we advance the nation's environmental sustainability
                    goals through comprehensive forestry management, cutting-edge landscaping solutions, and
                    revolutionary environmental monitoring technologies.
                  </p>
                </div>

                {/* Key Features Grid - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      icon: <TreePine className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />,
                      label: "500K+ Trees Planted",
                      sublabel: "Native Species Focus",
                    },
                    {
                      icon: <Droplets className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />,
                      label: "40% Water Savings",
                      sublabel: "Smart Irrigation",
                    },
                    {
                      icon: <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />,
                      label: "25+ Monitoring Sites",
                      sublabel: "Real-time Data",
                    },
                    {
                      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />,
                      label: "15+ Years Excellence",
                      sublabel: "Proven Track Record",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="bg-[#336666]/10 p-2 sm:p-3 rounded-lg sm:rounded-xl group-hover:bg-[#336666] transition-all duration-300 flex-shrink-0">
                          <div className="text-[#336666] group-hover:text-white transition-colors duration-300">
                            {item.icon}
                          </div>
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{item.label}</div>
                          <div className="text-xs sm:text-sm text-gray-600">{item.sublabel}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/about">
                  <Button className="group bg-[#336666] hover:bg-[#2a5555] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg w-full sm:w-auto">
                    Discover Our Story
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                    <Image
                      src="/images/about/team-action.jpg"
                      alt="AFLS Environmental Team in Action"
                      width={600}
                      height={700}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Floating Achievement Card - Responsive */}
                  <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 max-w-xs">
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                      <div className="bg-gradient-to-br from-[#336666] to-[#7dd3c0] p-3 sm:p-4 rounded-full shadow-lg flex-shrink-0">
                        <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">15+</div>
                        <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                          Years of Environmental Excellence
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section - Mobile First Grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <Badge className="mb-6 sm:mb-8 bg-[#336666]/10 text-[#336666] border-[#336666]/20 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
                Our Expertise
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Comprehensive
                <span className="block bg-gradient-to-r from-[#336666] to-[#7dd3c0] bg-clip-text text-transparent">
                  Environmental Solutions
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                From landscape architecture to smart monitoring systems, we deliver integrated solutions that enhance
                the UAE's natural environment with cutting-edge technology.
              </p>
            </div>
          </AnimatedSection>

          {/* Services Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />,
                title: "Landscape Design & Execution",
                description:
                  "Professional landscape architecture with sustainable practices and native plant integration",
                bgColor: "bg-green-50",
                features: ["Master Planning", "Native Species", "Sustainable Design", "Project Management"],
              },
              {
                icon: <BarChart3 className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />,
                title: "Smart Environmental Monitoring",
                description: "Advanced IoT systems for real-time environmental data collection and AI-powered analysis",
                bgColor: "bg-blue-50",
                features: ["IoT Sensors", "Real-time Data", "AI Analytics", "Predictive Insights"],
              },
              {
                icon: <Droplets className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />,
                title: "Smart Irrigation Systems",
                description: "Water-efficient irrigation solutions with automated controls and predictive maintenance",
                bgColor: "bg-cyan-50",
                features: ["Smart Controllers", "Water Optimization", "Remote Monitoring", "Predictive Maintenance"],
              },
              {
                icon: <TreePine className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />,
                title: "Reforestation & Tree Management",
                description: "Large-scale tree planting and forest management programs with biodiversity focus",
                bgColor: "bg-emerald-50",
                features: ["Native Propagation", "Large-scale Planting", "Forest Management", "Carbon Sequestration"],
              },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
                  <CardContent className="p-6 sm:p-8 relative h-full flex flex-col">
                    {/* Icon */}
                    <div
                      className={`${service.bgColor} w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-[#336666] group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#336666] transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-4 sm:mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500"
                          >
                            <div className="w-1.5 h-1.5 bg-[#336666] rounded-full flex-shrink-0" />
                            <span className="text-center">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#336666] to-[#7dd3c0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12 sm:mt-16">
              <Link href="/services">
                <Button
                  size="lg"
                  className="group bg-[#336666] hover:bg-[#2a5555] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
                >
                  Explore All Services
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects - Responsive Cards */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <Badge className="mb-6 sm:mb-8 bg-[#336666]/10 text-[#336666] border-[#336666]/20 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
                Featured Projects
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Transforming
                <span className="block bg-gradient-to-r from-[#336666] to-[#7dd3c0] bg-clip-text text-transparent">
                  UAE's Ecosystem
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                Discover our most impactful environmental projects that are reshaping the Emirates' natural landscape
                and contributing to a sustainable future for generations to come.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                title: "Al Ain Oasis UNESCO Heritage Restoration",
                location: "Al Ain, Abu Dhabi Emirate",
                status: "Completed",
                year: "2023",
                image: "/images/projects/al-ain-oasis.jpg",
                description:
                  "Comprehensive restoration of the historic Al Ain Oasis with modern smart irrigation systems, preserving UNESCO World Heritage status while enhancing sustainability.",
                stats: {
                  trees: "15,000 Date Palms",
                  area: "1,200 Hectares",
                  water: "30% Water Reduction",
                },
                impact: "Heritage Preservation & Modern Sustainability",
              },
              {
                title: "Jebel Hafeet Mountain Forest Expansion",
                location: "Jebel Hafeet, Al Ain",
                status: "Ongoing",
                year: "2024",
                image: "/images/projects/jebel-hafeet.jpg",
                description:
                  "Large-scale reforestation initiative adding 50,000 native trees to the mountain ecosystem with advanced environmental monitoring systems.",
                stats: {
                  trees: "50,000 Native Trees",
                  area: "800 Hectares",
                  monitoring: "25 Smart Stations",
                },
                impact: "Biodiversity Enhancement & Carbon Sequestration",
              },
              {
                title: "Abu Dhabi Smart Green Corridors Network",
                location: "Abu Dhabi Capital District",
                status: "Planning",
                year: "2024-2027",
                image: "/images/projects/green-corridors.jpg",
                description:
                  "Creating interconnected green spaces with smart monitoring throughout the capital city to enhance urban biodiversity and air quality.",
                stats: {
                  corridors: "15 Km Network",
                  sensors: "100+ IoT Devices",
                  species: "25+ Native Species",
                },
                impact: "Urban Sustainability & Smart City Integration",
              },
            ].map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Status Badge */}
                    <Badge
                      className={`absolute top-4 sm:top-6 right-4 sm:right-6 ${
                        project.status === "Completed"
                          ? "bg-green-500 hover:bg-green-600"
                          : project.status === "Ongoing"
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-orange-500 hover:bg-orange-600"
                      } text-white border-0 shadow-lg px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium`}
                    >
                      {project.status}
                    </Badge>

                    {/* Year Badge */}
                    <Badge className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-black/50 backdrop-blur-sm text-white border-0 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                      {project.year}
                    </Badge>
                  </div>

                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#336666] transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="mb-4 sm:mb-6">
                      <Badge className="bg-[#336666]/10 text-[#336666] border-[#336666]/20 px-3 py-1 text-xs">
                        {project.impact}
                      </Badge>
                    </div>

                    {/* Project Stats - Responsive Grid */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div
                          key={statIndex}
                          className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl group-hover:bg-[#336666]/5 transition-colors duration-300"
                        >
                          <div className="text-xs sm:text-sm font-bold text-[#336666] mb-1 leading-tight">{value}</div>
                          <div className="text-xs text-gray-600 capitalize leading-tight">
                            {key.replace(/([A-Z])/g, " $1")}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-[#336666] hover:bg-[#2a5555] text-white rounded-full group-hover:shadow-lg transition-all duration-300 py-2 sm:py-3 text-sm sm:text-base">
                      View Project Details
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12 sm:mt-16">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="group bg-[#336666] hover:bg-[#2a5555] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
                >
                  Explore All Projects
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#336666] via-[#2a5555] to-[#1a4444] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <Badge className="mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
                Environmental Impact
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                Measurable Results for
                <span className="block text-[#7dd3c0]">UAE's Sustainable Future</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                Our commitment to environmental excellence is reflected in tangible outcomes that contribute directly to
                the UAE's Net Zero 2050 strategic objectives.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <TreePine className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16" />,
                number: 500000,
                suffix: "+",
                label: "Trees Planted",
                description: "Native species across all Emirates",
                metric: "Carbon Sequestration: 2,500 tons CO₂/year",
              },
              {
                icon: <Award className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16" />,
                number: 150,
                suffix: "+",
                label: "Projects Completed",
                description: "Successful environmental initiatives",
                metric: "100% Client Satisfaction Rate",
              },
              {
                icon: <Droplets className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16" />,
                number: 40,
                suffix: "%",
                label: "Water Conservation",
                description: "Through smart irrigation systems",
                metric: "15 Million Liters Saved Annually",
              },
              {
                icon: <BarChart3 className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16" />,
                number: 25,
                suffix: "+",
                label: "Monitoring Sites",
                description: "Real-time environmental data",
                metric: "24/7 Data Collection & Analysis",
              },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:bg-white/20 transition-all duration-300 shadow-2xl border border-white/10">
                    <div className="text-[#7dd3c0]">{stat.icon}</div>
                  </div>

                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4">
                    <CountUpAnimation end={stat.number} suffix={stat.suffix} />
                  </div>

                  <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{stat.label}</div>
                  <div className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4 px-2">
                    {stat.description}
                  </div>
                  <div className="text-xs sm:text-sm text-[#7dd3c0] font-medium bg-white/5 rounded-full px-3 sm:px-4 py-1 sm:py-2 inline-block">
                    <span className="hidden sm:inline">{stat.metric}</span>
                    <span className="sm:hidden">{stat.metric.split(":")[0]}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <Badge className="mb-6 sm:mb-8 bg-[#336666]/10 text-[#336666] border-[#336666]/20 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
                Leadership Voices
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Trusted by Environmental
                <span className="block bg-gradient-to-r from-[#336666] to-[#7dd3c0] bg-clip-text text-transparent">
                  Leaders & Innovators
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
              <CardContent className="p-8 sm:p-12 lg:p-16">
                <div className="text-center">
                  <div className="mb-6 sm:mb-8">
                    <div className="w-2 h-12 sm:h-16 bg-[#336666] mx-auto mb-6 sm:mb-8 rounded-full" />
                  </div>

                  <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed mb-8 sm:mb-12 italic px-4 sm:px-0">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].author}
                      width={100}
                      height={100}
                      className="rounded-full shadow-xl border-4 border-white w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover"
                    />
                    <div className="text-center sm:text-left">
                      <p className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-1 sm:mb-2">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-[#336666] font-medium text-sm sm:text-base lg:text-lg">
                        {testimonials[currentTestimonial].position}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Indicators - Mobile Friendly */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 ${
                    index === currentTestimonial
                      ? "w-8 sm:w-12 h-2 sm:h-3 bg-[#336666] rounded-full"
                      : "w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 rounded-full hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      <Footer />
    </div>
  )
}
