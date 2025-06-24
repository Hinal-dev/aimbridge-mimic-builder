
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/4ea551dd-fca8-4c5f-840d-fa546ed9602f.png",
      alt: "Travelodge hotel exterior with modern glass pyramid entrance",
      title: "Modern Hotel Architecture"
    },
    {
      src: "/lovable-uploads/5a77c197-bfae-4161-8fa4-1a4322905eb8.png",
      alt: "Luxury hotel room with blue accent wall and comfortable bedding",
      title: "Premium Guest Accommodations"
    },
    {
      src: "/lovable-uploads/88c5ee8f-5737-4403-888f-9cdb951cff2e.png",
      alt: "Travelodge hotel lobby with modern amenities and breakfast area",
      title: "Welcoming Hospitality Spaces"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience exceptional hospitality across our carefully managed portfolio of premium properties.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0 shadow-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {image.title}
                          </h3>
                          <p className="text-gray-200 text-lg">
                            Delivering excellence in hospitality management
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
