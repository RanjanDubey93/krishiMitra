import { Bell, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store/useStore';

export function Header() {
  const { user, logout } = useStore();

  return (
    <header className="flex items-center justify-between p-4 bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">🌾</span>
        </div>
        <div>
          <h1 className="font-bold text-xl text-green-700">Krishi</h1>
          <p className="text-sm text-green-600 -mt-1">Madad</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="relative bg-yellow-100 hover:bg-yellow-200 text-yellow-700"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
        </Button>

        {user.isAuthenticated ? (
          <Button
            variant="ghost"
            onClick={logout}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200"
          >
            <User className="h-4 w-4" />
            <span className="text-sm">Logout</span>
          </Button>
        ) : (
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
            Login/SignUp
          </Button>
        )}

        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}