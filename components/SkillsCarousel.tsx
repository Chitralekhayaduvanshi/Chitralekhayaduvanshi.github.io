import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  "Product Management",
  "Project Management",
  "Stakeholder Management",
  "Leadership",
  "Task Management",
  "Time Management",
  "Risk Management",
  "Agile Methodology",
  "Quality Management",
  "CRM",
  "ERM",
  "Cloud Computing",
  "Typescript",
  "C/C++",
  "Python",
  "SQL",
  "Cursor",
  "V0 by Vercel"
]

export default function SkillsCarousel() {
  return (
    <Carousel className="max-w-xs mx-auto">
      <CarouselContent>
        {skills.map((skill, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-white shadow-lg">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 font-playfair">{skill}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

