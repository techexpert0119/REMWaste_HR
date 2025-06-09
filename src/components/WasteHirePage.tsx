import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SkipCard } from "./SkipCard";
import { SkipDetailsModal } from "./SkipDetailsModal";
import { wasteData } from "../data/wasteData";
import { WasteData } from "../types/waste";
import { HeaderStepTimeline } from "./HeaderStepTimeline";
import {
  FaMapMarkerAlt,
  FaTrash,
  FaCheckCircle,
  FaClipboardCheck,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";

const WasteHirePage = () => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const steps = [
    { name: "Postcode", icon: <FaMapMarkerAlt className="w-5 h-5" /> },
    { name: "Waste Type", icon: <FaTrash className="w-5 h-5" /> },
    { name: "Select Skip", icon: <FaCheckCircle className="w-5 h-5" /> },
    { name: "Permit Check", icon: <FaClipboardCheck className="w-5 h-5" /> },
    { name: "Choose Date", icon: <FaCalendarAlt className="w-5 h-5" /> },
    { name: "Payment", icon: <FaCreditCard className="w-5 h-5" /> },
  ];
  const currentStep = 3; // 'Select Skip'

  const { data = wasteData } = useQuery<WasteData[]>({
    queryKey: ["wasteData"],
    queryFn: () => Promise.resolve(wasteData),
  });

  const selectedWaste = data.find((w) => w.size === selectedSize);

  const handleSelect = (size: number) => {
    setSelectedSize(size);
    setShowDetails(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <HeaderStepTimeline steps={steps} currentStep={currentStep} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Skip Size</h1>
          <p className="text-lg">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((waste) => (
            <SkipCard
              key={waste.id}
              waste={waste}
              isSelected={selectedSize === waste.size}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <SkipDetailsModal
          waste={selectedWaste || null}
          isOpen={showDetails}
          onClose={() => setShowDetails(false)}
        />
      </div>
    </div>
  );
};

export default WasteHirePage;
