import { Cloud, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useStore } from '@/store/useStore';

export function WeatherSection() {
  const { weather, notices } = useStore();
  const weatherNotices = notices.filter(notice => notice.type === 'weather');

  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Cloud className="h-10 w-10 text-white" />
          <h2 className="text-4xl font-bold text-white">Weather Update</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <div className="space-y-6">
            <Card className="bg-white/20 backdrop-blur-sm border-white/30 p-8 text-white">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">{weather.temperature}°C</div>
                <div className="text-xl font-medium">{weather.condition}</div>
              </div>
            </Card>

            <Card className="bg-red-500/90 backdrop-blur-sm border-red-400/50 p-6 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">{weather.alert}</div>
              </div>
            </Card>
          </div>

          {/* Notices and Forecast */}
          <div className="space-y-6">
            <Card className="bg-white/20 backdrop-blur-sm border-white/30 p-6">
              <h3 className="text-2xl font-bold text-white text-center mb-6">NOTICE</h3>
              <div className="space-y-3">
                {weatherNotices.map((notice) => (
                  <Button
                    key={notice.id}
                    variant="outline"
                    className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30 text-left justify-start"
                  >
                    {notice.title}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Weekly Forecast */}
            <Card className="bg-white/20 backdrop-blur-sm border-white/30 p-6">
              <div className="grid grid-cols-7 gap-2">
                {weather.forecast.map((day, index) => (
                  <div key={index} className="text-center text-white">
                    <div className="text-2xl mb-2">{day.icon}</div>
                    <div className="text-sm font-medium">{day.day}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* India Map */}
          <Card className="bg-white/20 backdrop-blur-sm border-white/30 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <MapPin className="h-24 w-24 mx-auto mb-4 text-blue-300" />
              <div className="text-lg font-medium">India Weather Map</div>
              <div className="text-sm opacity-80 mt-2">Regional Overview</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}