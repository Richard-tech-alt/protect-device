import { X, MoreHorizontal, Shield, Edit, MousePointer, Download, Share } from 'lucide-react';

export default function SecurityAlertLayout() {
  return (
    <div className="bg-blac min-h-screen w-screen  relative">
      {/* Top Navigation */}
      {/* Central Alert Modal */}
      <div className="flex items-center justify-center px-4 py-8 md:py-16">
        <div className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-sm md:max-w-md shadow-2xl">
          {/* Security Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500 rounded-full p-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          {/* Alert Content */}
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Security Alert
            </h2>
            <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">
              Unusual login attempt detected
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Your account has been temporarily locked due to a potential security issue.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Verify Account
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}