import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import CallToAction from "@/components/ui/CallToAction";

const programs = {
  undergraduate: [
    {
      faculty: "Business & Economics",
      programs: [
        {
          name: "Bachelor of Business Administration",
          duration: "4 years",
          description: "A comprehensive program covering management, marketing, finance, and entrepreneurship."
        },
        {
          name: "Bachelor of Economics",
          duration: "3 years",
          description: "Study economic theory, policy, and applications in both macro and microeconomics."
        },
        {
          name: "Bachelor of Accounting",
          duration: "4 years",
          description: "Develop expertise in financial reporting, taxation, auditing, and business analytics."
        }
      ]
    },
    {
      faculty: "Engineering & Technology",
      programs: [
        {
          name: "Bachelor of Civil Engineering",
          duration: "4 years",
          description: "Learn to design, construct, and maintain infrastructure projects and systems."
        },
        {
          name: "Bachelor of Computer Science",
          duration: "4 years",
          description: "Study algorithms, programming languages, software development, and data structures."
        },
        {
          name: "Bachelor of Electrical Engineering",
          duration: "4 years",
          description: "Focus on power systems, electronics, control systems, and telecommunications."
        }
      ]
    },
    {
      faculty: "Arts & Humanities",
      programs: [
        {
          name: "Bachelor of Fine Arts",
          duration: "4 years",
          description: "Develop creative skills in visual arts, design, performance, or digital media."
        },
        {
          name: "Bachelor of English Literature",
          duration: "3 years",
          description: "Analyze literary texts, develop critical thinking, and hone writing skills."
        },
        {
          name: "Bachelor of Philosophy",
          duration: "3 years",
          description: "Explore ethics, logic, metaphysics, and the history of philosophical thought."
        }
      ]
    }
  ],
  graduate: [
    {
      faculty: "Business & Economics",
      programs: [
        {
          name: "Master of Business Administration (MBA)",
          duration: "1-2 years",
          description: "Advanced business education with specializations in various management disciplines."
        },
        {
          name: "Master of Finance",
          duration: "1 year",
          description: "In-depth study of financial markets, investment strategies, and corporate finance."
        },
        {
          name: "Ph.D. in Economics",
          duration: "3-5 years",
          description: "Research-focused doctoral program in economic theory and policy analysis."
        }
      ]
    },
    {
      faculty: "Engineering & Technology",
      programs: [
        {
          name: "Master of Computer Science",
          duration: "2 years",
          description: "Advanced study in artificial intelligence, data science, or software engineering."
        },
        {
          name: "Master of Engineering Management",
          duration: "1-2 years",
          description: "Combines technical expertise with business and management principles."
        },
        {
          name: "Ph.D. in Mechanical Engineering",
          duration: "4-6 years",
          description: "Research in areas such as robotics, materials, or sustainable energy systems."
        }
      ]
    },
    {
      faculty: "Arts & Humanities",
      programs: [
        {
          name: "Master of Literature",
          duration: "1-2 years",
          description: "Advanced literary analysis and research in various literary traditions."
        },
        {
          name: "Master of Fine Arts",
          duration: "2 years",
          description: "Professional studio practice and theoretical study in chosen art discipline."
        },
        {
          name: "Ph.D. in Philosophy",
          duration: "3-5 years",
          description: "Original research contribution to philosophical knowledge and discourse."
        }
      ]
    }
  ],
  research: [
    {
      name: "Center for Sustainable Development",
      description: "Interdisciplinary research on environmental, economic, and social sustainability challenges."
    },
    {
      name: "Institute for Artificial Intelligence",
      description: "Cutting-edge research in machine learning, natural language processing, and AI ethics."
    },
    {
      name: "Global Health Research Center",
      description: "Collaborative research addressing public health challenges and healthcare innovations."
    },
    {
      name: "Renewable Energy Laboratory",
      description: "Research focused on solar, wind, and other renewable energy technologies and applications."
    }
  ]
};

export default function AcademicPrograms() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
            <p className="text-xl md:text-2xl text-white/90">Discover our diverse range of programs designed to prepare you for success</p>
          </div>
        </div>
      </div>

      {/* Academic Programs Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Explore Our Programs</h2>
            <p className="text-lg text-neutral-700">
              At Universitas IIU, we offer a wide range of undergraduate and graduate programs designed to provide students with the knowledge, skills, and experiences they need to succeed in their chosen fields and make meaningful contributions to society.
            </p>
          </div>
          
          <Tabs defaultValue="undergraduate" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>
            
            <TabsContent value="undergraduate">
              <div className="space-y-10">
                {programs.undergraduate.map((faculty, idx) => (
                  <div key={idx}>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-6 border-b border-neutral-200 pb-2">
                      Faculty of {faculty.faculty}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {faculty.programs.map((program, pIdx) => (
                        <Card key={pIdx} className="h-full">
                          <CardHeader>
                            <CardTitle>{program.name}</CardTitle>
                            <CardDescription>Duration: {program.duration}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-neutral-700 mb-4">{program.description}</p>
                            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                              Program Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="graduate">
              <div className="space-y-10">
                {programs.graduate.map((faculty, idx) => (
                  <div key={idx}>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-6 border-b border-neutral-200 pb-2">
                      Faculty of {faculty.faculty}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {faculty.programs.map((program, pIdx) => (
                        <Card key={pIdx} className="h-full">
                          <CardHeader>
                            <CardTitle>{program.name}</CardTitle>
                            <CardDescription>Duration: {program.duration}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-neutral-700 mb-4">{program.description}</p>
                            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                              Program Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="research">
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">Research Centers & Initiatives</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {programs.research.map((center, idx) => (
                    <Card key={idx}>
                      <CardHeader>
                        <CardTitle>{center.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-700 mb-4">{center.description}</p>
                        <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Admission Requirements */}
          <div className="bg-neutral-50 rounded-lg p-8 shadow-md mb-16">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">Admission Requirements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-xl font-semibold text-primary mb-4">Undergraduate Programs</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Completed secondary education with satisfactory academic performance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Standardized test scores (SAT, ACT, or equivalent)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>English proficiency (TOEFL, IELTS, or equivalent for non-native speakers)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Personal statement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Letters of recommendation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-primary mb-4">Graduate Programs</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Bachelor's degree from an accredited institution</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Minimum GPA of 3.0 on a 4.0 scale</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Graduate entrance exam scores (GRE, GMAT, etc. as required by program)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Statement of purpose</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Professional resume/CV</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Letters of recommendation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold">Apply Now</Button>
            </div>
          </div>
          
          {/* Academic Calendar */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">Academic Calendar</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fall Semester 2023</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-semibold">Orientation Week</span>
                      <span>August 21-25</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Classes Begin</span>
                      <span>August 28</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Mid-term Examinations</span>
                      <span>October 16-20</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Thanksgiving Break</span>
                      <span>November 23-24</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Final Examinations</span>
                      <span>December 11-15</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Semester Ends</span>
                      <span>December 15</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spring Semester 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-semibold">New Student Orientation</span>
                      <span>January 8-12</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Classes Begin</span>
                      <span>January 15</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Spring Break</span>
                      <span>March 11-15</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Mid-term Examinations</span>
                      <span>March 4-8</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Final Examinations</span>
                      <span>May 6-10</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Commencement</span>
                      <span>May 18</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Download Full Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
