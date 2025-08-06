import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { WeatherSection } from '@/components/WeatherSection';
import { MarketSection } from '@/components/MarketSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WeatherSection />
        <MarketSection />
      </main>
    </div>
  );
}

export default App;