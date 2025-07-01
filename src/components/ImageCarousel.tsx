
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/6b553e4e-7b6d-430a-9b29-8b9a5400bb14.png",
      alt: "Travelodge Hotel Exterior"
    },
    {
      src: "/lovable-uploads/22e0a815-dede-4b3b-8502-ef7cfc194bfe.png",
      alt: "Hotel Room Interior"
    },
    {
      src: "/lovable-uploads/56a98ddb-5119-45e9-964d-f3002600f6ef.png",
      alt: "Hotel Lobby and Reception"
    },
    {
      src: "/lovable-uploads/9ef73cb6-22d2-458e-9591-ee55ef5a33ef.png",
      alt: "Super 8 Hotel Exterior"
    },
    {
      src: "/lovable-uploads/5e6b71ee-13a3-445a-8bd3-455976a8e442.png",
      alt: "Hotel Atrium and Lounge"
    }
  ];

  return (
    <section className="relative h-screen">
      <div className="w-full h-full">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 rounded-none overflow-hidden h-screen">
                  <CardContent className="p-0 h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-4 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
