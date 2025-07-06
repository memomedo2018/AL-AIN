import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Eye, Users, Award, Globe, TreePine } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#336666] to-[#2a5555] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-0">About AFLS</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Guardians of UAE's
              <span className="block text-[#7dd3c0]">Natural Heritage</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              For over 15 years, AFLS has been at the forefront of environmental stewardship, transforming landscapes
              and preserving biodiversity across the Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Who We Are</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">A Legacy of Environmental Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Al Ain Forestry & Landscaping Services (AFLS) stands as a beacon of environmental innovation in the UAE.
                As a semi-governmental entity, we bridge the gap between public environmental goals and cutting-edge
                implementation strategies.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our multidisciplinary team of environmental scientists, landscape architects, and technology specialists
                work collaboratively to deliver solutions that not only meet today's needs but anticipate tomorrow's
                challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From the historic oases of Al Ain to the modern urban landscapes of Abu Dhabi, our work spans the full
                spectrum of environmental management, always with sustainability and innovation at our core.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="AFLS Team"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#336666]">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Vision & Mission</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Driving UAE's Environmental Future</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-[#336666]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-[#336666]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading environmental stewardship organization in the MENA region, setting global standards
                  for sustainable forestry management, innovative landscaping, and biodiversity preservation while
                  contributing to the UAE's Net Zero 2050 vision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-[#336666]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#336666]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To enhance and preserve the UAE's natural environment through innovative forestry management,
                  sustainable landscaping practices, advanced environmental monitoring, and community engagement, while
                  supporting national sustainability initiatives and economic diversification goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Core Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Principles That Guide Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values form the foundation of everything we do, ensuring excellence in environmental stewardship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TreePine className="h-8 w-8" />,
                title: "Sustainability",
                description: "Every decision we make considers long-term environmental impact and future generations",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description: "We strive for the highest standards in all our projects and professional practices",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaboration",
                description: "Working together with communities, partners, and stakeholders for shared success",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Innovation",
                description: "Embracing cutting-edge technologies and creative solutions for environmental challenges",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="bg-[#336666]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-[#336666]">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Our Journey</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Milestones in Environmental Excellence</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#336666]/20"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2008",
                  title: "AFLS Establishment",
                  description: "Founded as a specialized environmental services entity under Abu Dhabi government",
                },
                {
                  year: "2012",
                  title: "First Major Reforestation",
                  description: "Launched the Al Ain Mountain Reforestation Project, planting 100,000 native trees",
                },
                {
                  year: "2016",
                  title: "Smart Technology Integration",
                  description: "Introduced IoT-based environmental monitoring systems across all major projects",
                },
                {
                  year: "2020",
                  title: "Net Zero Commitment",
                  description: "Aligned all operations with UAE's Net Zero 2050 strategic initiative",
                },
                {
                  year: "2023",
                  title: "Regional Recognition",
                  description:
                    "Awarded MENA Environmental Excellence Award for outstanding contribution to sustainability",
                },
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-[#336666] mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#336666] rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Leadership Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Environmental Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in environmental science, technology,
              and sustainable development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Ahmed Al Mansouri",
                position: "Director General",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Environmental scientist with 20+ years in sustainable development",
              },
              {
                name: "Eng. Fatima Al Zahra",
                position: "Head of Operations",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Landscape architecture expert specializing in arid region solutions",
              },
              {
                name: "Dr. Mohammed Al Rashid",
                position: "Chief Technology Officer",
                image: "/placeholder.svg?height=400&width=400",
                bio: "IoT and smart systems specialist driving digital transformation",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#336666] font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
