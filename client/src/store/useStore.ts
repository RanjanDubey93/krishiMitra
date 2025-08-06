import { create } from "zustand";

export interface WeatherData {
  temperature: number;
  condition: string;
  alert: string;
  forecast: {
    day: string;
    condition: string;
    icon: string;
  }[];
}

export interface Notice {
  id: string;
  title: string;
  type: "weather" | "market" | "general";
  priority: "high" | "medium" | "low";
  date: string;
}

export interface MarketData {
  commodityGraph: {
    name: string;
    value: number;
    month: string;
  }[];
  marketGraph: {
    category: string;
    growth: number;
  }[];
  dailyReport: {
    commodity: string;
    price: number;
    change: number;
  }[];
  priceTrend: {
    date: string;
    price: number;
  }[];
}

interface AppState {
  user: {
    name: string;
    isAuthenticated: boolean;
  };
  weather: WeatherData;
  notices: Notice[];
  marketData: MarketData;
  chatMessage: string;
  setChatMessage: (message: string) => void;
  login: (name: string) => void;
  logout: () => void;
}

export const useStore = create<AppState>((set) => ({
  user: {
    name: "kishan",
    isAuthenticated: true,
  },
  weather: {
    temperature: 27,
    condition: "Mild Rain",
    alert: "ALERT",
    forecast: [
      { day: "Mon", condition: "Rainy", icon: "🌧️" },
      { day: "Tue", condition: "Rainy", icon: "🌧️" },
      { day: "Wed", condition: "Rainy", icon: "🌧️" },
      { day: "Thur", condition: "Rainy", icon: "🌧️" },
      { day: "Fri", condition: "Rainy", icon: "🌧️" },
      { day: "Sat", condition: "Rainy", icon: "🌧️" },
      { day: "Sun", condition: "Rainy", icon: "🌧️" },
    ],
  },
  notices: [
    {
      id: "1",
      title: "Weather update 1",
      type: "weather",
      priority: "high",
      date: "2025-01-08",
    },
    {
      id: "2",
      title: "Forecast report",
      type: "weather",
      priority: "medium",
      date: "2025-01-08",
    },
    {
      id: "3",
      title: "IMD Issues warning",
      type: "weather",
      priority: "high",
      date: "2025-01-08",
    },
    {
      id: "4",
      title: "Notice 1",
      type: "market",
      priority: "medium",
      date: "2025-01-08",
    },
    {
      id: "5",
      title: "Notice 2",
      type: "market",
      priority: "low",
      date: "2025-01-08",
    },
  ],
  marketData: {
    commodityGraph: [
      { name: "Rice", value: 4000, month: "Jan" },
      { name: "Wheat", value: 3500, month: "Jan" },
      { name: "Corn", value: 2800, month: "Jan" },
      { name: "Soybean", value: 5200, month: "Jan" },
      { name: "Cotton", value: 6800, month: "Jan" },
    ],
    marketGraph: [
      { category: "Grains", growth: 15 },
      { category: "Vegetables", growth: 8 },
      { category: "Fruits", growth: 22 },
      { category: "Pulses", growth: 12 },
    ],
    dailyReport: [
      { commodity: "Rice", price: 4000, change: 2.5 },
      { commodity: "Wheat", price: 3500, change: -1.2 },
      { commodity: "Corn", price: 2800, change: 3.8 },
      { commodity: "Soybean", price: 5200, change: 1.5 },
    ],
    priceTrend: [
      { date: "2025-01-01", price: 3800 },
      { date: "2025-01-02", price: 3850 },
      { date: "2025-01-03", price: 3900 },
      { date: "2025-01-04", price: 3950 },
      { date: "2025-01-05", price: 4000 },
      { date: "2025-01-06", price: 3980 },
      { date: "2025-01-07", price: 4020 },
      { date: "2025-01-08", price: 4000 },
    ],
  },
  chatMessage: "",
  setChatMessage: (message) => set({ chatMessage: message }),
  login: (name) =>
    set((state) => ({
      user: { ...state.user, name, isAuthenticated: true },
    })),
  logout: () =>
    set((state) => ({
      user: { ...state.user, isAuthenticated: false },
    })),
}));
