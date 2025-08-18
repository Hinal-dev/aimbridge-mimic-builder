import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: "/uploads/6b553e4e-7b6d-430a-9b29-8b9a5400bb14.png",
      alt: "Travelodge Hotel Exterior"
    },
    {
      src: "/uploads/22e0a815-dede-4b3b-8502-ef7cfc194bfe.png",
      alt: "Hotel Room Interior"
    },
    {
      src: "/uploads/56a98ddb-5119-45e9-964d-f3002600f6ef.png",
      alt: "Hotel Lobby and Reception"
    },
    {
      src: "/uploads/9ef73cb6-22d2-458e-9591-ee55ef5a33ef.png",
      alt: "Super 8 Hotel Exterior"
    },
    {
      src: "/uploads/5e6b71ee-13a3-445a-8bd3-455976a8e442.png",
      alt: "Hotel Atrium and Lounge"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Carousel 
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
