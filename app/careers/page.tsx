import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  MapPin,
  Clock,
  Users,
  GraduationCap,
  Heart,
  Zap,
  Globe,
  Award,
  ArrowRight,
  Briefcase,
  DollarSign,
} from "lucide-react"
import Image from "next/image"

export default function CareersPage() {
  const openRoles = [
    {
      id: 1,
      title: "Senior Environmental Scientist",
      department: "Research & Development",
      location: "Al Ain, Abu Dhabi",
      type: "Full-time",
      experience: "5+ years",
      salary: "AED 15,000 - 20,000",
      description:
        "Lead environmental research projects and develop innovative solutions for sustainable landscaping in arid regions.",
      requirements: [
        "PhD in Environmental Science or related field",
        "5+ years experience in environmental consulting",
        "Experience with GIS and environmental modeling",
        "Fluency in English and Arabic preferred",
      ],
    },
    {
      id: 2,
      title: "Landscape Architect",
      department: "Design & Planning",
      location: "Abu Dhabi City",
      type: "Full-time",
      experience: "3+ years",
      salary: "AED 12,000 - 16,000",
      description: "Design sustainable landscape solutions for urban and rural environments across the UAE.",
      requirements: [
        "Bachelor's degree in Landscape Architecture",
        "3+ years of professional experience",
        "Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite",
        "Knowledge of native UAE plant species",
      ],
    },
    {
      id: 3,
      title: "IoT Systems Engineer",
      department: "Technology",
      location: "Al Ain, Abu Dhabi",
      type: "Full-time",
      experience: "4+ years",
      salary: "AED 14,000 - 18,000",
      description: "Develop and maintain smart monitoring systems for environmental data collection and analysis.",
      requirements: [
        "Bachelor's degree in Engineering or Computer Science",
        "4+ years experience with IoT systems",
        "Programming skills in Python, JavaScript, and C++",
        "Experience with cloud platforms (AWS, Azure)",
      ],
    },
    {
      id: 4,
      title: "Project Manager - Reforestation",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "6+ years",
      salary: "AED 16,000 - 22,000",
      description:
        "Oversee large-scale reforestation projects from planning to completion, ensuring quality and timeline adherence.",
      requirements: [
        "Bachelor's degree in Forestry, Environmental Management, or related field",
        "6+ years of project management experience",
        "PMP certification preferred",
        "Strong leadership and communication skills",
      ],
    },
    {
      id: 5,
      title: "Research Assistant",
      department: "Research & Development",
      location: "Al Ain, Abu Dhabi",
      type: "Full-time",
      experience: "1-2 years",
      salary: "AED 8,000 - 12,000",
      description: "Support research activities in desert ecology and plant adaptation studies.",
      requirements: [
        "Master's degree in Biology, Ecology, or related field",
        "1-2 years research experience",
        "Strong analytical and writing skills",
        "Willingness to work in field conditions",
      ],
    },
    {
      id: 6,
      title: "Irrigation Specialist",
      department: "Operations",
      location: "Al Ain, Abu Dhabi",
      type: "Full-time",
      experience: "3+ years",
      salary: "AED 10,000 - 14,000",
      description: "Design, install, and maintain smart irrigation systems for various landscaping projects.",
      requirements: [
        "Diploma in Agricultural Engineering or related field",
        "3+ years experience in irrigation systems",
        "Knowledge of drip irrigation and smart controllers",
        "Valid UAE driving license",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#336666] to-[#2a5555] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-0">Join Our Team</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build Your Career in
              <span className="block text-[#7dd3c0]">Environmental Excellence</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Join AFLS and be part of the UAE's environmental transformation. Work with cutting-edge technology and
              passionate professionals dedicated to creating a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Why Choose AFLS</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Workplace That Inspires Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits and opportunities that make AFLS an exceptional place to build your career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Purpose-Driven Work",
                description: "Contribute to meaningful environmental projects that impact the UAE's future",
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Continuous Learning",
                description: "Access to training programs, conferences, and professional development opportunities",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaborative Culture",
                description: "Work with diverse, talented teams in an inclusive and supportive environment",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Innovation Focus",
                description: "Use cutting-edge technology and contribute to groundbreaking environmental solutions",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="bg-[#336666]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-[#336666]">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Our Culture</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Where Innovation Meets Sustainability</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At AFLS, we foster a culture of innovation, collaboration, and environmental stewardship. Our team
                members are passionate about making a positive impact on the UAE's natural environment while advancing
                their professional careers.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in work-life balance, professional growth, and creating an inclusive environment where every
                team member can thrive and contribute to our mission of environmental excellence.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Globe className="h-6 w-6" />, label: "Global Impact", value: "15+ Countries" },
                  { icon: <Users className="h-6 w-6" />, label: "Team Size", value: "200+ Professionals" },
                  { icon: <Award className="h-6 w-6" />, label: "Awards Won", value: "25+ Recognition" },
                  { icon: <GraduationCap className="h-6 w-6" />, label: "Training Hours", value: "1000+ Annually" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-[#336666]/10 p-2 rounded-lg">
                      <div className="text-[#336666]">{stat.icon}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="AFLS Team Culture"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#336666]">95%</div>
                  <div className="text-sm text-gray-600">Employee Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Open Positions</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role to advance your career in environmental
              excellence
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <Card key={role.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{role.title}</h3>
                        <Badge className="bg-[#336666]/10 text-[#336666] border-[#336666]/20">{role.department}</Badge>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4 text-[#336666]" />
                          {role.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4 text-[#336666]" />
                          {role.type}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Briefcase className="h-4 w-4 text-[#336666]" />
                          {role.experience}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <DollarSign className="h-4 w-4 text-[#336666]" />
                          {role.salary}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {role.requirements.slice(0, 2).map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#336666] rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:w-48">
                      <Button className="bg-[#336666] hover:bg-[#2a5555] text-white">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#336666] text-[#336666] hover:bg-[#336666] hover:text-white bg-transparent"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#336666] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Benefits Package</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We offer competitive compensation and benefits to support your professional and personal well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Wellness",
                benefits: [
                  "Comprehensive health insurance",
                  "Annual health checkups",
                  "Wellness programs",
                  "Mental health support",
                ],
              },
              {
                title: "Professional Development",
                benefits: [
                  "Training and certification programs",
                  "Conference attendance",
                  "Mentorship opportunities",
                  "Career advancement paths",
                ],
              },
              {
                title: "Work-Life Balance",
                benefits: [
                  "Flexible working hours",
                  "Remote work options",
                  "Generous vacation policy",
                  "Family-friendly policies",
                ],
              },
              {
                title: "Financial Benefits",
                benefits: [
                  "Competitive salary packages",
                  "Performance bonuses",
                  "Retirement savings plan",
                  "Transportation allowance",
                ],
              },
              {
                title: "Additional Perks",
                benefits: [
                  "Modern office facilities",
                  "Team building activities",
                  "Employee recognition programs",
                  "Sustainability initiatives",
                ],
              },
              {
                title: "Location Benefits",
                benefits: [
                  "UAE residence visa",
                  "Relocation assistance",
                  "Housing allowance",
                  "Education support for children",
                ],
              },
            ].map((category, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#7dd3c0] rounded-full mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#336666]/10 text-[#336666] border-[#336666]/20">Application Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process is designed to identify the best candidates while providing a positive
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Apply online with your resume and cover letter",
              },
              {
                step: "02",
                title: "Initial Screening",
                description: "HR review and initial phone/video screening",
              },
              {
                step: "03",
                title: "Technical Interview",
                description: "In-depth discussion with hiring managers and team leads",
              },
              {
                step: "04",
                title: "Final Decision",
                description: "Reference checks and job offer for successful candidates",
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Make an Environmental Impact?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our team of environmental professionals and help shape the UAE's sustainable future. Your expertise and
            passion can make a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#336666] hover:bg-[#2a5555] text-white px-8 py-4 text-lg">
              View All Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#336666] text-[#336666] hover:bg-[#336666] hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
