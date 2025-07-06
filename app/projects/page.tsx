import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Calendar, Users, TreePine, Droplets, BarChart3, Filter, Search } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Al Ain Oasis Restoration",
      location: "Al Ain, Abu Dhabi",
      status: "Completed",
      category: "Restoration",
      year: "2023",
      duration: "18 months",
      team: "25 specialists",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Comprehensive restoration of the historic Al Ain Oasis with modern irrigation systems, native plant rehabilitation, and visitor pathway development.",
      highlights: [
        "Restored 1,200 hectares of oasis landscape",
        "Installed smart irrigation covering 100% of the area",
        "Rehabilitated 15,000 date palms",
        "Created 5km of eco-friendly visitor pathways",
      ],
      impact: {
        trees: "15,000",
        water: "30%",
        biodiversity: "40%",
      },
    },
    {
      id: 2,
      title: "Jebel Hafeet Forest Expansion",
      location: "Jebel Hafeet, Al Ain",
      status: "Ongoing",
      category: "Reforestation",
      year: "2024",
      duration: "24 months",
      team: "35 specialists",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Large-scale reforestation project adding 50,000 native trees to the mountain ecosystem with advanced monitoring systems.",
      highlights: [
        "Planting 50,000 native trees across 800 hectares",
        "Installing 25 environmental monitoring stations",
        "Creating wildlife corridors for local fauna",
        "Implementing drone-based forest monitoring",
      ],
      impact: {
        trees: "50,000",
        area: "800 ha",
        monitoring: "25 stations",
      },
    },
    {
      id: 3,
      title: "Smart City Green Corridors",
      location: "Abu Dhabi City",
      status: "Planning",
      category: "Urban Landscaping",
      year: "2024",
      duration: "36 months",
      team: "45 specialists",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Creating interconnected green spaces with smart monitoring throughout the capital city to enhance urban biodiversity.",
      highlights: [
        "Developing 15km of green corridors",
        "Installing 100+ smart monitoring sensors",
        "Creating habitat bridges for urban wildlife",
        "Implementing AI-powered maintenance systems",
      ],
      impact: {
        corridors: "15 km",
        sensors: "100+",
        species: "25+",
      },
    },
    {
      id: 4,
      title: "Coastal Mangrove Restoration",
      location: "Abu Dhabi Coast",
      status: "Completed",
      category: "Marine Restoration",
      year: "2022",
      duration: "12 months",
      team: "20 specialists",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Restoration and expansion of coastal mangrove forests to protect shorelines and enhance marine biodiversity.",
      highlights: [
        "Planted 25,000 mangrove seedlings",
        "Restored 300 hectares of coastal habitat",
        "Created protected nursery areas",
        "Established long-term monitoring program",
      ],
      impact: {
        mangroves: "25,000",
        habitat: "300 ha",
        species: "15+",
      },
    },
    {
      id: 5,
      title: "Desert Research Station",
      location: "Liwa Desert, Abu Dhabi",
      status: "Ongoing",
      category: "Research",
      year: "2023",
      duration: "60 months",
      team: "15 researchers",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Establishing a comprehensive desert research facility for studying arid land restoration and climate adaptation strategies.",
      highlights: [
        "Building state-of-the-art research facility",
        "Testing 50+ desert plant species",
        "Developing drought-resistant varieties",
        "Training next-generation researchers",
      ],
      impact: {
        species: "50+",
        research: "5 years",
        training: "100+ students",
      },
    },
    {
      id: 6,
      title: "Urban Forest Initiative",
      location: "Al Ain City",
      status: "Completed",
      category: "Urban Forestry",
      year: "2021",
      duration: "24 months",
      team: "30 specialists",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Comprehensive urban forest development project creating green spaces throughout Al Ain city with focus on air quality improvement.",
      highlights: [
        "Planted 10,000 trees across 50 urban sites",
        "Created 20 neighborhood parks",
        "Installed air quality monitoring systems",
        "Developed community engagement programs",
      ],
      impact: {
        trees: "10,000",
        parks: "20",
        air: "25% improvement",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#336666] to-[#2a5555] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-0">Our Projects</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transforming UAE's
              <span className="block text-[#7dd3c0]">Natural Landscape</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Discover our portfolio of environmental projects that are reshaping the Emirates' ecosystem and
              contributing to a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="bg-[#336666] text-white border-[#336666]">
                All Projects
              </Button>
              <Button variant="outline" size="sm">
                Completed
              </Button>
              <Button variant="outline" size="sm">
                Ongoing
              </Button>
              <Button variant="outline" size="sm">
                Planning
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      project.status === "Completed"
                        ? "bg-green-500"
                        : project.status === "Ongoing"
                          ? "bg-blue-500"
                          : "bg-orange-500"
                    } text-white border-0`}
                  >
                    {project.status}
                  </Badge>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/50 text-white border-0">{project.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <Calendar className="h-5 w-5 text-[#336666] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{project.year}</div>
                      <div className="text-xs text-gray-600">Year</div>
                    </div>
                    <div className="text-center">
                      <BarChart3 className="h-5 w-5 text-[#336666] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{project.duration}</div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-[#336666] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{project.team}</div>
                      <div className="text-xs text-gray-600">Team Size</div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#336666] rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.impact).map(([key, value], index) => (
                      <div key={index} className="text-center p-3 border border-gray-200 rounded-lg">
                        <div className="text-lg font-bold text-[#336666]">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-[#336666] hover:bg-[#2a5555] text-white">View Project Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#336666] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Impact Overview</h2>
            <p className="text-xl text-gray-200">Measurable results across all our environmental initiatives</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <TreePine className="h-12 w-12" />,
                number: "500K+",
                label: "Trees Planted",
                description: "Native species across all projects",
              },
              {
                icon: <MapPin className="h-12 w-12" />,
                number: "150+",
                label: "Projects Completed",
                description: "Successful environmental initiatives",
              },
              {
                icon: <Droplets className="h-12 w-12" />,
                number: "40%",
                label: "Water Savings",
                description: "Through smart irrigation systems",
              },
              {
                icon: <BarChart3 className="h-12 w-12" />,
                number: "25+",
                label: "Monitoring Sites",
                description: "Real-time environmental data",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Partner With Us</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Environmental Project?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join us in creating a sustainable future for the UAE. Our team of experts is ready to help you plan and
            execute your environmental vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#336666] hover:bg-[#2a5555] text-white px-8 py-4 text-lg">
              Start a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#336666] text-[#336666] hover:bg-[#336666] hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
