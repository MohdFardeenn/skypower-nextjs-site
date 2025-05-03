import React from "react";
import LeafIcon from "../Figures/LeafIcon";
import ClockIcon from "../Figures/ClockIcon";
import ChartIcon from "../Figures/ChartIcon";
import BatteryIcon from "../Figures/BatteryIcon";
import FeatureItem from "./FeatureItem";

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CosmoGreenFeatures: React.FC = () => {
  const features = [
    {
      icon: <BatteryIcon />,
      title: "Long Battery Life",
      description:
        "Our batteries are designed to provide extended operational hours, reducing the need for frequent recharges.",
    },
    {
      icon: <LeafIcon />,
      title: "Eco-Friendly",
      description:
        "Sustainable energy solutions that reduce carbon footprint and align with green transportation initiatives.",
    },
    {
      icon: <ClockIcon />,
      title: "Quick Charging",
      description:
        "Advanced technology enables faster charging times, keeping your battery on the run for longer.",
    },
    {
      icon: <ChartIcon />,
      title: "High Performance",
      description:
        "Consistent power output even in challenging conditions, ensuring reliable operation day after day.",
    },
  ];

  return (
    <div id="features" className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Why Choose Sky Power</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our batteries are built with cutting-edge technology to provide
            superior performance, reliability, and value for all electric
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CosmoGreenFeatures;
