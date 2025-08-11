// ✨ 1. Import the 'useRef' hook from React.
import { useRef } from 'react';
import { Mic, Send, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useStore } from '@/store/useStore';

export function HeroSection() {
  const { user, chatMessage, setChatMessage } = useStore();

  // ✨ 2. Create a ref to link to our hidden file input element.
  const fileInputRef = useRef<HTMLInputElement>(null);

  const greeting = user.isAuthenticated 
    ? <>Hello <span className="text-green-400">{user.name}</span>,</> 
    : "Hello,";
  
  const subGreeting = "allow me to help you find the best for your farm";

  // ✨ 3. Create a handler for when the visible Upload button is clicked.
  const handleUploadClick = () => {
    // This programmatically clicks the hidden input element.
    fileInputRef.current?.click();
  };

  // ✨ 4. Create a handler for when a file is selected in the dialog.
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // You now have the selected file.
    // From here, you can upload it to a server, display a preview, etc.
    console.log("Selected file:", file.name);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background and other JSX remains the same... */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.pexels.com/photos/2132178/pexels-photo-2132178.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')` }} />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center px-4 w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg opacity-0 animate-fade-slide-in [animation-delay:200ms]">
          {greeting}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 drop-shadow-md opacity-0 animate-fade-slide-in [animation-delay:400ms]">
          {subGreeting}
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 max-w-2xl mx-auto shadow-2xl ring-1 ring-white/20 opacity-0 animate-fade-slide-in [animation-delay:600ms]">
          <div className="p-3">
            <Textarea
              placeholder="Ask me anything about crops, soil, or weather..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="w-full bg-transparent border-none text-white text-lg placeholder:text-gray-300 focus-visible:ring-0 resize-none h-20"
            />
          </div>
          
          <div className="flex items-center justify-between border-t border-white/20 p-2">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white hover:bg-white/10 rounded-full">
                <Mic className="h-5 w-5" />
              </Button>
              {/* ✨ 5. The Upload button now calls our new click handler. */}
              <Button onClick={handleUploadClick} variant="ghost" size="icon" className="text-gray-200 hover:text-white hover:bg-white/10 rounded-full">
                <Upload className="h-5 w-5" />
              </Button>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 font-semibold transition-colors">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
        
        {/* ✨ 6. Add the hidden file input element here. */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*" // This encourages the browser to show image files, camera, and gallery
          className="hidden"
        />
      </div>
    </section>
  );
}