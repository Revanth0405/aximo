
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaText: string;
  ctaLink: string;
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  popular = false,
  ctaText,
  ctaLink,
}: PricingCardProps) => {
  return (
    <div 
    className={`bg-white rounded-xl shadow-lg p-8 relative text-center ${
      popular ? "border-2 border-primary" : ""
    }`}
  >
    {popular && (
      <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
        Most Popular
      </div>
    )}
    <div className="mb-4">
      <span className="text-3xl font-bold">{price}</span>
      <span className="text-gray-500">/{period}</span>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center justify-center">
          <span className={`mr-2 ${feature.included ? "text-primary" : "text-gray-300"}`}>
            <Check size={16} />
          </span>
          <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
    <Button 
      className={`w-full ${
        popular 
          ? "bg-primary hover:bg-primary/90 text-white" 
          : "bg-white border border-gray-300 hover:bg-gray-50 text-gray-800"
      }`}
      onClick={() => window.location.href = ctaLink}
    >
      {ctaText}
    </Button>
  </div>
  );
};

export default PricingCard;
