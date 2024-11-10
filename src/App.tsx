import React from 'react';
import Navbar from './components/Navbar';
import WeatherHero from './components/WeatherHero';
import WeatherMap from './components/WeatherMap';
import WeatherCharts from './components/WeatherCharts';
import WeatherAlerts from './components/WeatherAlerts';
import Forecast from './components/Forecast';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <WeatherHero />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center mb-12">
            <SearchBar />
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Interactive Weather Map</h2>
            <WeatherMap />
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Weather Trends</h2>
            <WeatherCharts />
          </div>
        </div>
        <WeatherAlerts />
        <Forecast />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;