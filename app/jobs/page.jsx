"use client"

import { useState, useEffect } from "react"
import { Building, MapPin, Clock, Briefcase, Filter, Search, MapPinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Pagination from "@/components/pagination"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeProvider } from "next-themes"

// Sample job data
const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    description:
      "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications.",
    requirements: [
      "5+ years of experience with React",
      "Strong knowledge of JavaScript, HTML, and CSS",
      "Experience with state management libraries",
      "Bachelor's degree in Computer Science or related field",
    ],
    responsibilities: [
      "Develop and maintain user interfaces for web applications",
      "Collaborate with backend developers to integrate APIs",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable code",
    ],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Contract",
    salary: "$80,000 - $100,000",
    posted: "1 week ago",
    description: "DesignHub is seeking a talented UX/UI Designer to create amazing user experiences for our clients.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency with design tools like Figma and Adobe XD",
      "Portfolio showcasing your design work",
      "Strong communication skills",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
      "Stay up-to-date with design trends and best practices",
    ],
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    posted: "3 days ago",
    description: "DataSystems is looking for a Backend Engineer to help build and maintain our server infrastructure.",
    requirements: [
      "4+ years of experience with Node.js or Python",
      "Experience with databases like PostgreSQL or MongoDB",
      "Knowledge of cloud services (AWS, GCP, or Azure)",
      "Understanding of microservices architecture",
    ],
    responsibilities: [
      "Design and implement backend services and APIs",
      "Optimize database queries and performance",
      "Ensure high availability and scalability of services",
      "Collaborate with frontend developers to integrate APIs",
    ],
  },
  {
    id: 4,
    title: "Product Manager",
    company: "InnovateCo",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    posted: "5 days ago",
    description:
      "InnovateCo is seeking a Product Manager to lead our product development efforts and drive innovation.",
    requirements: [
      "3+ years of experience in product management",
      "Strong analytical and problem-solving skills",
      "Experience with agile methodologies",
      "Excellent communication and leadership skills",
    ],
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize product requirements",
      "Work closely with engineering, design, and marketing teams",
      "Analyze market trends and competition",
    ],
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$125,000 - $155,000",
    posted: "1 day ago",
    description: "CloudTech is looking for a DevOps Engineer to help automate and optimize our infrastructure.",
    requirements: [
      "4+ years of experience in DevOps or SRE roles",
      "Experience with containerization and orchestration tools",
      "Knowledge of infrastructure as code (Terraform, CloudFormation)",
      "Strong scripting skills (Bash, Python)",
    ],
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage and optimize cloud infrastructure",
      "Monitor system performance and reliability",
      "Collaborate with development teams to improve deployment processes",
    ],
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$135,000 - $165,000",
    posted: "4 days ago",
    description:
      "AnalyticsPro is seeking a Data Scientist to help extract insights from our vast datasets and build predictive models.",
    requirements: [
      "Master's or PhD in Statistics, Computer Science, or related field",
      "Strong programming skills in Python or R",
      "Experience with machine learning frameworks like TensorFlow or PyTorch",
      "Knowledge of data visualization tools",
    ],
    responsibilities: [
      "Develop and implement machine learning models",
      "Analyze large datasets to identify patterns and trends",
      "Create data visualizations to communicate findings",
      "Collaborate with engineering and product teams to implement solutions",
    ],
  },
  {
    id: 7,
    title: "Mobile Developer (iOS)",
    company: "AppWorks",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$115,000 - $145,000",
    posted: "6 days ago",
    description:
      "AppWorks is looking for an iOS Developer to join our mobile team and build innovative mobile applications.",
    requirements: [
      "3+ years of experience with Swift and iOS development",
      "Strong understanding of iOS design patterns",
      "Experience with RESTful APIs and JSON",
      "Knowledge of Core Data and other iOS frameworks",
    ],
    responsibilities: [
      "Develop and maintain iOS applications",
      "Collaborate with designers to implement UI/UX",
      "Optimize applications for performance and responsiveness",
      "Stay up-to-date with Apple's design guidelines and development best practices",
    ],
  },
  {
    id: 8,
    title: "Technical Writer",
    company: "DocuTech",
    location: "Remote",
    type: "Part-time",
    salary: "$40 - $60 per hour",
    posted: "1 week ago",
    description:
      "DocuTech is seeking a Technical Writer to create clear and concise documentation for our software products.",
    requirements: [
      "2+ years of experience in technical writing",
      "Strong writing and editing skills",
      "Ability to understand complex technical concepts",
      "Experience with documentation tools like Markdown, AsciiDoc, or reStructuredText",
    ],
    responsibilities: [
      "Create user guides, API documentation, and tutorials",
      "Work with engineers to understand product features",
      "Maintain and update existing documentation",
      "Ensure documentation is accurate and up-to-date",
    ],
  },
  {
    id: 9,
    title: "QA Engineer",
    company: "QualitySoft",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$90,000 - $110,000",
    posted: "3 days ago",
    description:
      "QualitySoft is looking for a QA Engineer to ensure the quality of our software products through manual and automated testing.",
    requirements: [
      "3+ years of experience in software testing",
      "Experience with test automation frameworks",
      "Knowledge of testing methodologies",
      "Strong analytical and problem-solving skills",
    ],
    responsibilities: [
      "Develop and execute test plans and test cases",
      "Identify, document, and track bugs",
      "Create and maintain automated tests",
      "Collaborate with developers to resolve issues",
    ],
  },
  {
    id: 10,
    title: "Project Coordinator",
    company: "ManagePro",
    location: "Miami, FL",
    type: "Contract",
    salary: "$70,000 - $85,000",
    posted: "5 days ago",
    description:
      "ManagePro is seeking a Project Coordinator to help manage our software development projects and ensure timely delivery.",
    requirements: [
      "2+ years of experience in project coordination or management",
      "Knowledge of agile methodologies",
      "Strong organizational and communication skills",
      "Experience with project management tools like Jira or Asana",
    ],
    responsibilities: [
      "Coordinate project activities and resources",
      "Track project progress and report status",
      "Facilitate communication between team members",
      "Identify and mitigate project risks",
    ],
  },
  {
    id: 11,
    title: "Network Administrator",
    company: "NetSolutions",
    location: "Phoenix, AZ",
    type: "Full-time",
    salary: "$95,000 - $115,000",
    posted: "2 days ago",
    description:
      "NetSolutions is looking for a Network Administrator to manage and maintain our network infrastructure.",
    requirements: [
      "4+ years of experience in network administration",
      "CCNA or equivalent certification",
      "Experience with firewalls, routers, and switches",
      "Knowledge of network security best practices",
    ],
    responsibilities: [
      "Configure and maintain network equipment",
      "Monitor network performance and troubleshoot issues",
      "Implement security measures to protect the network",
      "Plan and implement network upgrades",
    ],
  },
  {
    id: 12,
    title: "Marketing Specialist",
    company: "GrowthHub",
    location: "Remote",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    posted: "1 week ago",
    description:
      "GrowthHub is seeking a Marketing Specialist to help drive our digital marketing efforts and increase brand awareness.",
    requirements: [
      "3+ years of experience in digital marketing",
      "Experience with SEO, SEM, and social media marketing",
      "Knowledge of marketing analytics tools",
      "Strong writing and communication skills",
    ],
    responsibilities: [
      "Develop and implement marketing campaigns",
      "Manage social media accounts and content",
      "Analyze marketing metrics and optimize campaigns",
      "Collaborate with design and content teams",
    ],
  },
]

// Filter options
const filterOptions = ["All Jobs", "Full-time", "Part-time", "Remote", "Contract"]

// Extract unique locations for location filter
const getUniqueLocations = () => {
  const locations = jobListings.map((job) => job.location)
  const uniqueLocations = [...new Set(locations)]
  return ["All Locations", ...uniqueLocations]
}

const locationOptions = getUniqueLocations()

// Number of jobs per page
const JOBS_PER_PAGE = 5

export default function Home() {
  const [selectedJob, setSelectedJob] = useState(jobListings[0])
  const [activeFilter, setActiveFilter] = useState("All Jobs")
  const [activeLocation, setActiveLocation] = useState("All Locations")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredJobs, setFilteredJobs] = useState(jobListings)
  const [currentPage, setCurrentPage] = useState(1)
  const [paginatedJobs, setPaginatedJobs] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  // Filter jobs based on selected filters and search query
  useEffect(() => {
    let filtered = [...jobListings]

    // Filter by job type
    if (activeFilter !== "All Jobs") {
      filtered = filtered.filter((job) => job.type.includes(activeFilter))
    }

    // Filter by location
    if (activeLocation !== "All Locations") {
      filtered = filtered.filter((job) => job.location === activeLocation)
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.description.toLowerCase().includes(query),
      )
    }

    setFilteredJobs(filtered)
    setTotalPages(Math.ceil(filtered.length / JOBS_PER_PAGE))
    setCurrentPage(1) // Reset to first page when filters change
  }, [activeFilter, activeLocation, searchQuery])

  // Update paginated jobs when filtered jobs or current page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * JOBS_PER_PAGE
    const endIndex = startIndex + JOBS_PER_PAGE
    setPaginatedJobs(filteredJobs.slice(startIndex, endIndex))

    // If no jobs on current page (e.g., after filtering), go to first page
    if (filteredJobs.length > 0 && startIndex >= filteredJobs.length) {
      setCurrentPage(1)
    }

    // If no job is selected or selected job is not in current filtered list, select first job
    if (!selectedJob || !filteredJobs.some((job) => job.id === selectedJob.id)) {
      if (filteredJobs.length > 0) {
        setSelectedJob(filteredJobs[0])
      }
    }
  }, [filteredJobs, currentPage, selectedJob])

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll to top of job listings
    const jobListingsElement = document.getElementById("job-listings")
    if (jobListingsElement) {
      jobListingsElement.scrollTop = 0
    }
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex flex-col min-h-screen bg-background">

        <main className="flex-1 container mx-auto py-6 px-4 md:px-6">
          {/* Full-width search bar */}
          <div className="w-full mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for jobs, companies, or keywords..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Filters row - spans full width */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Job Type:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    {activeFilter}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {filterOptions.map((filter) => (
                    <DropdownMenuItem
                      key={filter}
                      className={activeFilter === filter ? "bg-accent text-accent-foreground" : ""}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Location:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4" />
                    {activeLocation}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {locationOptions.map((location) => (
                    <DropdownMenuItem
                      key={location}
                      className={activeLocation === location ? "bg-accent text-accent-foreground" : ""}
                      onClick={() => setActiveLocation(location)}
                    >
                      {location}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Two-column layout for job listings and details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-14rem)]">
            {/* Left column - Job listings */}
            <div className="md:col-span-1 h-full">
              {/* Job listings - scrollable */}
              <div id="job-listings" className="overflow-y-auto pr-2 h-full">
                {filteredJobs.length > 0 ? (
                  <div className="space-y-4">
                    {paginatedJobs.map((job) => (
                      <div
                        key={job.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                          selectedJob.id === job.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedJob(job)}
                      >
                        <h3 className="font-medium text-lg">{job.title}</h3>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <Building className="h-4 w-4 mr-1" />
                          <span className="text-sm">{job.company}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <Badge variant="outline">{job.type}</Badge>
                          <span className="text-xs text-muted-foreground">{job.posted}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 border rounded-lg">
                    <p className="text-muted-foreground">No jobs found matching your criteria</p>
                    <Button
                      variant="link"
                      onClick={() => {
                        setActiveFilter("All Jobs")
                        setActiveLocation("All Locations")
                        setSearchQuery("")
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-4 mb-2">
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                  </div>
                )}
              </div>
            </div>

            {/* Right column - Job details */}
            <div className="md:col-span-2 border rounded-lg h-full overflow-hidden flex flex-col">
              <div className="p-6 overflow-y-auto h-full">
                {selectedJob ? (
                  <div>
                    <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                    <div className="flex flex-wrap gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        <span>{selectedJob.company}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{selectedJob.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{selectedJob.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Posted {selectedJob.posted}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="text-lg font-medium">Salary Range</div>
                      <p className="mt-1">{selectedJob.salary}</p>
                    </div>

                    <div className="mt-6">
                      <div className="text-lg font-medium">Job Description</div>
                      <p className="mt-1">{selectedJob.description}</p>
                    </div>

                    <div className="mt-6">
                      <div className="text-lg font-medium">Requirements</div>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <div className="text-lg font-medium">Responsibilities</div>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        {selectedJob.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 mb-4">
                      <Button size="lg">Apply Now</Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Select a job to view details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

