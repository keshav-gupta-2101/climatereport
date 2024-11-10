import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { WeatherAlert } from '../types/weather';

const alerts: WeatherAlert[] = [
  {
    type: 'Heavy Rain',
    severity: 'high',
    message: 'Heavy rainfall expected in Mumbai and surrounding areas',
    region: 'Maharashtra',
    timestamp: new Date().toISOString()
  },
  {
    type: 'Heat Wave',
    severity: 'medium',
    message: 'Heat wave conditions likely in Rajasthan',
    region: 'Rajasthan',
    timestamp: new Date().toISOString()
  }
];

const WeatherAlerts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center mb-8">
        <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Weather Alerts</h2>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg border ${
              alert.severity === 'high'
                ? 'bg-red-50 border-red-200'
                : alert.severity === 'medium'
                ? 'bg-orange-50 border-orange-200'
                : 'bg-yellow-50 border-yellow-200'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {alert.type} - {alert.region}
                </h3>
                <p className="text-gray-600">{alert.message}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                alert.severity === 'high'
                  ? 'bg-red-100 text-red-800'
                  : alert.severity === 'medium'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherAlerts;