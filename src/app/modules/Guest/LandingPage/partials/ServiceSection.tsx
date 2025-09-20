import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, MapPin, Package, Zap } from "lucide-react"

const ServiceSection = () => {

   const services = [
    {
      icon: MapPin,
      title: "Door-to-door Shipping",
      description:
        "Nationwide delivery with extensive network coverage across all provinces, ensuring fast and reliable delivery times.",
    },
    {
      icon: Zap,
      title: "Express Delivery",
      description:
        "Same-day delivery service in major cities and surrounding areas, ensuring packages reach customers as quickly as possible.",
    },
    {
      icon: Package,
      title: "Warehousing & Packaging",
      description:
        "Professional storage services and careful packaging, ensuring goods are preserved in the best condition during transport.",
    },
    {
      icon: Globe,
      title: "International Shipping",
      description:
        "Global connectivity with international shipping services to over 200 countries and territories worldwide.",
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SGNExpress provides diverse shipping services to meet all customer needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection