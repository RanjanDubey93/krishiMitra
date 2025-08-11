// Change: Imported specific icons to match the new design.
import { Cloud, CloudRain, AlertTriangle, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useStore } from '@/store/useStore';

export function WeatherSection() {
  const { weather, notices } = useStore();
  const weatherNotices = notices.filter(notice => notice.type === 'weather');

  return (
    // Change: Set section to be full-screen and use flex to center the content vertically.
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 py-16 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Cloud className="h-10 w-10 text-white" />
          <h2 className="text-4xl font-bold text-white">Weather Update</h2>
        </div>

        {/* Change: The entire grid is restructured to match your 3-column design. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- Column 1: Current Weather & Alert --- */}
          {/* Change: This column now holds two vertically stacked cards. */}
          <div className="flex flex-col gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white text-center p-6 flex-grow flex flex-col justify-center">
              <CardContent className="p-0">
                <div className="text-7xl font-bold">{weather.temperature}°C</div>
                <div className="text-xl font-medium mt-2 opacity-90">{weather.condition}</div>
              </CardContent>
            </Card>
            <Card className="bg-red-500/80 backdrop-blur-lg border-red-400/50 text-white text-center p-6 flex-grow flex flex-col justify-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold tracking-wider">{weather.alert}</div>
              </CardContent>
            </Card>
          </div>

          {/* --- Column 2: Notices & Forecast --- */}
          {/* Change: This column also holds two vertically stacked cards. */}
          <div className="flex flex-col gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">NOTICE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {weatherNotices.map((notice) => (
                  // Change: Buttons are restyled for a cleaner look with an icon.
                  <Button
                    key={notice.id}
                    variant="outline"
                    className="w-full flex justify-between items-center bg-white/10 border-white/20 hover:bg-white/20 text-white"
                  >
                    <span>{notice.title}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white p-4">
              <CardContent className="p-2">
                <div className="grid grid-cols-7 gap-2">
                  {weather.forecast.map((day, index) => (
                    <div key={index} className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors cursor-default">
                      {/* Change: Replaced emoji with a consistent Lucide icon. */}
                      <CloudRain className="h-7 w-7 mx-auto mb-2 opacity-80" />
                      <div className="text-sm font-semibold">{day.day}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* --- Column 3: India Map --- */}
          {/* Change: This column is now a single, full-height card. */}
          <div className="flex">
            <Card className="w-full bg-white/10 backdrop-blur-lg border-white/20 text-white p-8 flex flex-col items-center justify-center">
              <CardContent className="p-0 text-center">
                <MapPin className="h-24 w-24 mx-auto text-blue-300" />
                <div className="text-xl font-semibold mt-4">India Weather Map</div>
                <div className="text-sm opacity-80 mt-1">Regional Overview</div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}