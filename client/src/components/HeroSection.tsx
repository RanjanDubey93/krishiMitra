import { Mic, Send, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useStore } from '@/store/useStore';

export function HeroSection() {
  const { user, chatMessage, setChatMessage } = useStore();

  return (
    <section className="relative min-h-[600px] flex flex-col items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2132178/pexels-photo-2132178.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Hello {user.name}
        </h1>
        <p className="text-2xl md:text-3xl font-medium mb-12 drop-shadow-md">
          Know what is best for your farm !
        </p>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Input
              placeholder="Hello ! How may I help you today ?"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="flex-1 bg-transparent border-none text-gray-700 text-lg placeholder:text-gray-500 focus-visible:ring-0"
            />
            <Button
              size="icon"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full"
            >
              <Mic className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-800"
            >
              <Download className="h-5 w-5" />
            </Button>
            <Button
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6"
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}