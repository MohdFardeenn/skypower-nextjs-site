import { FeatureProps } from "./CosmoGreenFeatures";

const FeatureItem: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div
      id="features"
      className="bg-gray-900 p-10 rounded-lg flex flex-col items-start justify-center border border-transparent hover:shadow-md shadow-green-500/20 hover:border-green-800 transition-all duration-300"
    >
      <div className="text-green-400 mb-4 rounded-lg p-4 bg-slate-800">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureItem;
