import * as Dialog from "@radix-ui/react-dialog";
import { WasteData } from "../types/waste";

interface SkipDetailsModalProps {
  waste: WasteData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SkipDetailsModal = ({
  waste,
  isOpen,
  onClose,
}: SkipDetailsModalProps) => {
  if (!waste) return null;

  const calculateTotalPrice = (waste: WasteData): number => {
    const basePrice = waste.price_before_vat || 0;
    const vatAmount = (basePrice * waste.vat) / 100;
    return basePrice + vatAmount;
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <Dialog.Title className="text-2xl font-bold text-gray-900 mb-4">
            {waste.size} Yard Skip Details
          </Dialog.Title>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Base Price:</span>
              <span className="font-semibold">£{waste.price_before_vat}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">VAT ({waste.vat}%):</span>
              <span className="font-semibold">
                £{((waste.price_before_vat * waste.vat) / 100).toFixed(2)}
              </span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total Price:</span>
                <span>£{calculateTotalPrice(waste).toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
