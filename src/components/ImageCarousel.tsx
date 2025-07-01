
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ImageCarousel = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Grand Marina Resort"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Metropolitan Suites"
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Oceanview Boutique"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Alpine Lodge"
    }
  ];

  return (
    <section className="relative">
      <div className="w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 rounded-none overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
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
