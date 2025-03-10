import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const DynamicCarousel = dynamic(() => import('@/components/SkillsCarousel'), {
  loading: () => <p>Loading skills...</p>,
})

const DynamicProjects = dynamic(() => import('@/components/Projects'), {
  loading: () => <p>Loading projects...</p>,
})

const DynamicQuoteBoard = dynamic(() => import('@/components/QuoteBoard'), {
  loading: () => null,
})

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <DynamicQuoteBoard />
      
      <div className="py-8 md:py-12 relative">
        <Card className="max-w-3xl mx-auto transform hover:-translate-y-1 transition-transform duration-300 bg-gradient-to-r from-purple-50 to-pink-50 border-none shadow-xl">
          <CardContent className="p-6 md:p-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-purple-300 font-serif">"</div>
              <div className="absolute -bottom-4 -right-4 text-6xl text-pink-300 font-serif rotate-180">"</div>
              <p className="text-lg md:text-xl text-center font-playfair italic text-gray-700 px-8">
                Change with time or time will change.
              </p>
              <p className="text-right mt-4 text-sm md:text-base font-montserrat text-gray-600">
                — Chitralekha Yaduvanshi
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <section id="about" className="py-10 md:py-20 text-center relative">
        <div className="absolute inset-0 bg-[url('/background.jpg')] opacity-10 z-0"></div>
        <div className="relative z-10">
          <Image
            src="/Profile.jpg"
            alt="Chitralekha Yaduvanshi"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-4 md:mb-6 border-4 border-white shadow-lg w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 font-playfair">Chitralekha Yaduvanshi</h1>
          <p className="text-xl md:text-2xl mb-4 md:mb-6 font-montserrat font-light">Engineer</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8">
            <Button asChild className="font-montserrat w-full sm:w-auto">
              <a href="mailto:chitralekha813@gmail.com">Contact Me</a>
            </Button>
            <Button variant="outline" asChild className="font-montserrat w-full sm:w-auto">
              <a href="https://www.linkedin.com/in/chitralekha-y" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
          </div>
          <p className="max-w-2xl mx-auto text-base md:text-lg font-montserrat px-4">
            Experienced Associate Engineer with a focus on leveraging analytical skills, strategic vision, and a user-centric approach to guide products from conception through launch. Skilled in fostering collaboration and driving product success across global teams.
          </p>
        </div>
      </section>

      <section id="experience" className="py-10 md:py-20 bg-white bg-opacity-80 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-center font-playfair">Work Experience</h2>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle>Associate Engineer (Working Globally)</CardTitle>
              <CardDescription>Larsen & Toubro (Digital Energy Solutions, PT&D) | 2022 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Developed comprehensive understanding of the power sector, leading to a 25% increase in product development efficiency and innovation.</li>
                <li>Collaborated with cross-functional teams to generate new ideas and design scalable solutions, resulting in a 30% improvement in solution reliability and global scalability.</li>
                <li>Built expertise in the tendering process, leading to a 20% increase in successful bids.</li>
                <li>Engaged with international clients to present tailored solutions, contributing to a 15% increase in client retention and satisfaction.</li>
                <li>Oversaw key aspects of commercial operations and supply chain activities, leading to a 10% reduction in supply chain costs.</li>
                <li>Leveraged various tools to streamline workflows, achieving a 20% improvement in product functionality and project tracking.</li>
                <li>Created simplified documentation for service level agreements, leading to a 25% reduction in process complexity and time-to-delivery.</li>
                <li>Developed key performance indicators (KPIs) to assess and track product success, resulting in a 15% improvement in product performance and stakeholder alignment.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="skills" className="py-10 md:py-20 relative">
        <div className="absolute inset-0 bg-[url('/background.jpg')] opacity-5 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-center font-playfair">Skills</h2>
          <div className="px-4 md:px-8">
            <DynamicCarousel />
          </div>
        </div>
      </section>

      <section id="projects" className="py-10 md:py-20 bg-white bg-opacity-80 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-center font-playfair">Projects</h2>
        <div className="px-4 md:px-8">
          <DynamicProjects />
        </div>
      </section>

      <section id="education" className="py-10 md:py-20 relative">
        <div className="absolute inset-0 bg-[url('/background.jpg')] opacity-10 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-center font-playfair">Education</h2>
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Bachelor of Technology in Computer Science Engineering</CardTitle>
              <CardDescription className="text-lg font-montserrat">Rajasthan Technical University, Kota | 2018 - 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-montserrat">Gained proficient knowledge in Data Structures and Algorithms, DBMS, AI/ML, Blockchain Technology, Cloud Computing, Nature Inspired Algorithms, Social Engineering, SDLCs Model, and Cyber Security.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="accomplishments" className="py-10 md:py-20 bg-white bg-opacity-80 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-center font-playfair">Accomplishments & Certifications</h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
          <Badge variant="secondary" className="text-base md:text-lg py-1.5 md:py-2 px-3 md:px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-montserrat">Salesforce Associate Certified (Dec'23)</Badge>
          <Badge variant="secondary" className="text-base md:text-lg py-1.5 md:py-2 px-3 md:px-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-montserrat">Salesforce AI Associate Certified (Nov'24)</Badge>
          <Badge variant="secondary" className="text-base md:text-lg py-1.5 md:py-2 px-3 md:px-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-montserrat">Marketing in Digital World (Honours) - University of Illinois</Badge>
          <Badge variant="secondary" className="text-base md:text-lg py-1.5 md:py-2 px-3 md:px-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-montserrat">Student Excellence and Learning Program (Art of Living)</Badge>
          <Badge variant="secondary" className="text-base md:text-lg py-1.5 md:py-2 px-3 md:px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-montserrat">Certified in User Centric Computing for HCI (NPTEL)</Badge>
        </div>
      </section>

      <section id="contact" className="py-10 md:py-20 relative">
        <div className="absolute inset-0 bg-[url('/background.jpg')] opacity-10 z-0"></div>
        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-center font-playfair">Contact Me</h2>
          <Card className="max-w-md mx-auto bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Get in Touch</CardTitle>
              <CardDescription className="font-montserrat">Feel free to reach out for any inquiries or opportunities.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" action={async (formData: FormData) => {
                'use server'
                
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  message: formData.get('message'),
                  timestamp: new Date().toISOString()
                }

                try {
                  // You can store this data in your preferred way:
                  // Option 1: Save to a file
                  await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                      access_key: '8220b2f9-1129-4f09-b1d8-855fd7823baf', // Get from web3forms.com
                      ...data
                    })
                  })

                  // Show success message
                  console.log('Message sent successfully!')
                } catch (error) {
                  console.error('Error sending message:', error)
                }
              }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-montserrat">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-montserrat" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-montserrat">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-montserrat" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-montserrat">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-montserrat" required></textarea>
                </div>
                <Button type="submit" className="w-full font-montserrat">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

