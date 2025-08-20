import React from 'react';
import { AlertTriangle, Shield, Phone } from 'lucide-react';

const ATTSecurityAlert = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Main Alert Card */}
        <div className="bg-white rounded-t-2xl rounded-b-none shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-500 px-6 py-4 flex items-center space-x-3">
            <div className="bg-white rounded-full p-1">
              <AlertTriangle className="w-6 h-6 text-blue-500" />
            </div>
            <h1 className="text-white text-xl font-medium">AT&T Security Alert</h1>
          </div>

          {/* Content */}
          <div className="px-6 py-8">
            <h2 className="text-gray-900 text-xl font-medium leading-tight mb-8">
              Suspicious activity detected on your AT&T Wi-Fi network
            </h2>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200">
                Scan Device Now
              </button>
              
              <button className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5" /> 
                <span>Secure My Network</span>
              </button>
            </div>

            {/* Support Info */}
            <div className="text-center">
              <p className="text-gray-700 text-base mb-2">
                Call AT&T Security Support:
              </p>
              <div className="flex items-center justify-center space-x-2 text-gray-900 font-medium text-lg">
                <Phone className="w-5 h-5" />
                <span>1-800-123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rounded section for visual completion */}
        <div className="bg-white h-4 rounded-b-2xl shadow-lg"></div>
      </div>
    </div>
  );
};

export default ATTSecurityAlert;