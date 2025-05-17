
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink }: HeroProps) => {
  return (
    <div className="hero-section min-h-[80vh] flex items-center py-16">
      <div className="hero-blob"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              {subtitle}
            </p>
            <Link to={ctaLink}>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg">
                {ctaText}
              </Button>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-square bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src="/images/hero-img.png" alt="Hero Image" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                Smart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
