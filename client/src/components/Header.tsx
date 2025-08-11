// ✨ 1. All necessary imports are combined at the top of the file.
import { useState } from 'react';
import { Bell, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store/useStore';
import { NotificationPanel } from './notificationpanel';
import { useScrollDirection } from '@/hooks/useScrollDirection';

export function Header() {
  // ✨ 3. All hooks and state from both versions are declared together here.
  const scrollDirection = useScrollDirection();
  const { user, logout } = useStore();
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  return (
    <>
      {/* ✨ 4. The className logic for the scroll effect has been merged into the final header element.
        It now includes the sticky positioning, styling, and the conditional class for hiding/showing on scroll.
      */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b transition-transform duration-300 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌾</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-green-700">Krishi</h1>
              <p className="text-sm text-green-600 -mt-1">Mitra</p>
            </div>
          </div>

          {/* Controls Section */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={togglePanel}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
            </Button>

            {user.isAuthenticated ? (
              <Button
                variant="ghost"
                onClick={logout}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">Logout</span>
              </Button>
            ) : (
              <Button className="bg-green-600 text-white hover:bg-green-700 px-5 font-semibold rounded-lg transition-colors">
                Login / SignUp
              </Button>
            )}

            <Button variant="ghost" size="icon" className="lg:hidden text-gray-600">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Notification panel is correctly rendered outside the header */}
      <NotificationPanel isOpen={isPanelOpen} onClose={togglePanel} />
    </>
  );
}