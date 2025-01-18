import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="bg-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-playfair">Application of Machine Learning in Eye Disease Prediction</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/AML.jpg"
            alt="Eye disease prediction project"
            width={400}
            height={300}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <p className="font-montserrat">Developed a machine learning model to predict eye diseases based on various input parameters, improving early diagnosis accuracy by 30%.</p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-playfair">Amazon Product Price Prediction</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/APP.jpg"
            alt="Amazon price prediction project"
            width={400}
            height={300}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <p className="font-montserrat">Created a web scraping tool using Selenium to predict Amazon product prices based on historical data, achieving 85% accuracy in price forecasts.</p>
        </CardContent>
      </Card>
    </div>
  )
}

