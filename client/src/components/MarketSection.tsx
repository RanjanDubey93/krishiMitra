import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Cell } from 'recharts';
import { useStore } from '@/store/useStore';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function MarketSection() {
  const { marketData, notices } = useStore();
  const marketNotices = notices.filter(notice => notice.type === 'market');

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">KNOW YOUR MARKET</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Charts Section */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Commodity-wise Graph */}
            <Card className="shadow-lg">
              <CardHeader className="bg-green-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  COMMODITY-WISE GRAPH
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={marketData.commodityGraph}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Market-wise Graph */}
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  MARKET-WISE GRAPH
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ResponsiveContainer width="100%" height={200}>
                  <RechartsPieChart>
                    <Tooltip />
                    <RechartsPieChart data={marketData.marketGraph} cx="50%" cy="50%" outerRadius={80}>
                      {marketData.marketGraph.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </RechartsPieChart>
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Daily Market Report */}
            <Card className="shadow-lg">
              <CardHeader className="bg-orange-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  DAILY MARKET REPORT
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {marketData.dailyReport.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-medium">{item.commodity}</span>
                      <div className="text-right">
                        <div className="font-bold">₹{item.price}</div>
                        <div className={`text-sm ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {item.change >= 0 ? '+' : ''}{item.change}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Price Trend */}
            <Card className="shadow-lg">
              <CardHeader className="bg-purple-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  PRICE TREND
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={marketData.priceTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8B5CF6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Notices Section */}
          <Card className="shadow-lg">
            <CardHeader className="bg-indigo-600 text-white">
              <CardTitle className="text-center text-2xl">NOTICE</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {marketNotices.map((notice) => (
                  <Button
                    key={notice.id}
                    variant="outline"
                    className="w-full bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 h-12 text-left justify-start"
                  >
                    {notice.title}
                  </Button>
                ))}
                {/* Additional notices to match the design */}
                <Button
                  variant="outline"
                  className="w-full bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 h-12 text-left justify-start"
                >
                  Notice 2
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 h-12 text-left justify-start"
                >
                  Notice 2
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 h-12 text-left justify-start"
                >
                  Notice 2
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}