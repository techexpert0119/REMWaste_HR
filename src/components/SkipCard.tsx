import { WasteData } from "../types/waste";

interface SkipCardProps {
  waste: WasteData;
  isSelected: boolean;
  onSelect: (size: number) => void;
}

export const SkipCard = ({ waste, isSelected, onSelect }: SkipCardProps) => {
  const calculateTotalPrice = (waste: WasteData): number => {
    const basePrice = waste.price_before_vat || 0;
    const vatAmount = (basePrice * waste.vat) / 100;
    return basePrice + vatAmount;
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-2xl hover:scale-105 ${
        isSelected ? "ring-2 ring-primary-500" : ""
      }`}
    >
      <div className="relative">
        <img
          src={"/4-yarder-skip.jpg"}
          alt={`${waste.size} Yard Skip`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {waste.allowed_on_road && (
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Road Access
            </span>
          )}
          {waste.allows_heavy_waste && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Heavy Waste
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900">
            {waste.size} Yard Skip
          </h3>
          <span className="text-lg font-semibold text-primary-600">
            £{calculateTotalPrice(waste).toFixed(2)}
          </span>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <svg
              className="w-5 h-5 mr-2 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {waste.hire_period_days} days hire period
          </div>
        </div>

        <button
          onClick={() => onSelect(waste.size)}
          className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
        >
          Select Skip
        </button>
      </div>
    </div>
  );
};
