import { useState, useEffect } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

export default function AccountSecurityScan() {
  const [scanState, setScanState] = useState('initial'); // 'initial', 'scanning', 'complete'
  const [progress, setProgress] = useState(0);
  const [completedChecks, setCompletedChecks] = useState([]);

  const securityChecks = [
    'Scanning Email',
    'Scanning Contacts',
    'Scanning Applications',
    'Scanning Finance Applications'
  ];

  const startScan = () => {
    setScanState('scanning');
    setProgress(0);
    setCompletedChecks([]);
   
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 25;
       
        if (newProgress >= 25 && !completedChecks.includes(0)) {
          setCompletedChecks(prev => [...prev, 0]);
        }
        if (newProgress >= 50 && !completedChecks.includes(1)) {
          setCompletedChecks(prev => [...prev, 1]);
        }
        if (newProgress >= 75 && !completedChecks.includes(2)) {
          setCompletedChecks(prev => [...prev, 2]);
        }
        if (newProgress >= 100 && !completedChecks.includes(3)) {
          setCompletedChecks(prev => [...prev, 3]);
          setTimeout(() => setScanState('complete'), 500);
          clearInterval(interval);
        }
       
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 800);

    return () => clearInterval(interval);
  };

  const resetScan = () => {
    setScanState('initial');
    setProgress(0);
    setCompletedChecks([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mx-auto">
       
        {scanState === 'initial' && (
          <>
            {/* Header Section */}
            <div className="text-center px-6 sm:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8">
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Scan Your Account
              </h1>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                Check your account and connected devices<br />
                for unusual activity.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100"></div>

            {/* Start Scan Section */}
            <div className="text-center px-6 sm:px-8 py-8 sm:py-12">
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Start Scan
              </h2>
              <p className="text-gray-500 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
                Click below to run a quick scan of your account<br />
                activity and connected devices.
              </p>
             
              <button
                onClick={startScan}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-colors duration-200 text-base sm:text-lg"
              >
                Start Scan
              </button>
            </div>
          </>
        )}

        {scanState === 'scanning' && (
          <div className="px-6 sm:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Scanning Your Account...
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                This may take up to 2 minutes.<br />
                Please do not close this window.
              </p>
            </div>
           
            {/* Progress Bar */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin mr-3 sm:mr-4 flex-shrink-0"></div>
                <div className="flex-1 bg-gray-200 rounded-full h-3 sm:h-4">
                  <div
                    className="bg-blue-600 h-3 sm:h-4 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
             
              {/* Security Check List */}
              <div className="space-y-3 sm:space-y-4">
                {securityChecks.map((check, index) => (
                  <div key={index} className="flex items-center text-base sm:text-lg">
                    {completedChecks.includes(index) ? (
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-3 sm:mr-4 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-300 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                    )}
                    <span className={completedChecks.includes(index) ? 'text-gray-900' : 'text-gray-500'}>
                      {check}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {scanState === 'complete' && (
          <div className="px-6 sm:px-8 py-8 sm:py-12 text-center">
            {/* Success Icon and Message */}
            <div className="mb-8 sm:mb-12">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 inline-block mr-2 sm:mr-3" />
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 inline-block">
                Your Account Looks Secure
              </h2>
              <p className="text-gray-500 text-base sm:text-lg mt-3 sm:mt-4">
                No unusual activity detected. You're good to go!
              </p>
            </div>
           
            <button
              onClick={resetScan}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-colors duration-200 text-base sm:text-lg"
            >
              Go Back to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}