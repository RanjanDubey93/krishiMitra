import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 1. Define the type for the component's props
interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void; // A function that takes no arguments and returns nothing
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  // The rest of the component logic is the same.
  // TypeScript now ensures `isOpen` is a boolean and `onClose` is a function.
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50" 
        onClick={onClose}
      ></div>

      {/* The Panel Itself */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Notification Content */}
        <div className="p-4">
          <p className="text-gray-500">You have no new notifications.</p>
        </div>
      </div>
    </>
  );
}