// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const InternetScanLayout = () => {
// // // //   const [isScanning, setIsScanning] = useState(false);
// // // //   const [scanResults, setScanResults] = useState(null);
// // // //   const [showResults, setShowResults] = useState(false);
// // // //   const [visibleResults, setVisibleResults] = useState({
// // // //     location: false,
// // // //     ip: false,
// // // //     isp: false,
// // // //     device: false,
// // // //     warning: false,
// // // //     loading: false,
// // // //     importantNotice: false
// // // //   });
// // // //   const [showPopup, setShowPopup] = useState(false);
// // // //   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([]);
// // // //   const navigate = useNavigate()

// // // //   // Replace with your actual IPinfo access token
// // // //   const IPINFO_ACCESS_TOKEN = '26347059c50ccc';

// // // //   const handleSubmitComplaint = (e) => {
// // // //     e.preventDefault();
// // // //     setShowPopup(true);
// // // //   };

// // // //   const handleCallSupport = () => {
// // // //     // window.open('https://chatbot.page/V3kkrC', '_blank');
// // // //     // setShowPopup(false);
// // // //     navigate("/protect-your-device")
// // // //   };

// // // //   const closePopup = () => {
// // // //     setShowPopup(false);
// // // //   };

// // // //   const scanNetwork = async () => { 
// // // //     setIsScanning(true);
// // // //     setShowResults(false);
// // // //     setVisibleResults({
// // // //       location: false,
// // // //       ip: false,
// // // //       isp: false,
// // // //       device: false,
// // // //       warning: false,
// // // //       loading: false,
// // // //       importantNotice: false
// // // //     });
// // // //     setVisibleLoadingMessages([]);
    
// // // //     try {
// // // //       // Wait for 3 seconds showing "Scanning your network..."
// // // //       await new Promise(resolve => setTimeout(resolve, 3000));
      
// // // //       // Fetch IP information from IPinfo API
// // // //       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`);
// // // //       const data = await response.json();
      
// // // //       // Detect device type (basic detection)
// // // //       const userAgent = navigator.userAgent;
// // // //       let deviceType = 'Unknown';
      
// // // //       if (/Windows/i.test(userAgent)) {
// // // //         deviceType = 'Windows';
// // // //       } else if (/Macintosh/i.test(userAgent)) {
// // // //         deviceType = 'Mac';
// // // //       } else if (/Linux/i.test(userAgent)) {
// // // //         deviceType = 'Linux';
// // // //       } else if (/Android/i.test(userAgent)) {
// // // //         deviceType = 'Android';
// // // //       } else if (/iPhone|iPad/i.test(userAgent)) {
// // // //         deviceType = 'iOS';
// // // //       }

// // // //       setScanResults({
// // // //         location: `${data.city}, ${data.region}, ${data.country}`,
// // // //         ip: data.ip,
// // // //         isp: data.org,
// // // //         device: deviceType
// // // //       });
      
// // // //       setShowResults(true);
// // // //       setIsScanning(false);
      
// // // //       // Show results one by one with delays
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, location: true }));
// // // //       }, 500);
      
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, ip: true }));
// // // //       }, 1000);
      
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, isp: true }));
// // // //       }, 1500);
      
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, device: true }));
// // // //       }, 2000);
      
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, warning: true }));
// // // //       }, 2500);
      
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, loading: true }));
// // // //         // Show loading messages one by one
// // // //         const loadingMessages = [
// // // //           'Initializing connection...',
// // // //           'Bypassing firewall...',
// // // //           'Accessing secure server...',
// // // //           'Decrypting network protocols...',
// // // //           'Scanning for vulnerabilities...',
// // // //           'Analyzing traffic patterns...',
// // // //           'Cross-referencing databases...',
// // // //           'Verifying identity markers...',
// // // //           'Compiling security report...',
// // // //           'Finalizing assessment...'
// // // //         ];
        
// // // //         loadingMessages.forEach((message, index) => {
// // // //           setTimeout(() => {
// // // //             setVisibleLoadingMessages(prev => [...prev, message]);
            
// // // //             // Show important notice after all loading messages are done
// // // //             if (index === loadingMessages.length - 1) {
// // // //               setTimeout(() => {
// // // //                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// // // //               }, 1000);
// // // //             }
// // // //           }, index * 800); // 800ms delay between each message
// // // //         });
// // // //       }, 3000);
      
// // // //     } catch (error) {
// // // //       console.error('Error fetching IP info:', error);
// // // //       // Fallback data for demo purposes
// // // //       setScanResults({
// // // //         location: 'Mumbai, Maharashtra, India',
// // // //         ip: '152.58.40.123',
// // // //         isp: 'Reliance Jio Infocomm Limited',
// // // //         device: 'Windows'
// // // //       });
      
// // // //       setShowResults(true);
// // // //       setIsScanning(false);
      
// // // //       // Show results one by one with delays (fallback)
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, location: true }));
// // // //       }, 500);
      
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, ip: true }));
// // // //       }, 1000);
      
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, isp: true }));
// // // //       }, 1500);
      
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, device: true }));
// // // //       }, 2000);
      
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, warning: true }));
// // // //       }, 2500);
      
// // // //       setTimeout(() => {
// // // //         setVisibleResults(prev => ({ ...prev, loading: true }));
// // // //         // Show loading messages one by one (fallback)
// // // //         const loadingMessages = [
// // // //           'Initializing connection...',
// // // //           'Bypassing firewall...',
// // // //           'Accessing secure server...',
// // // //           'Decrypting network protocols...',
// // // //           'Scanning for vulnerabilities...',
// // // //           'Analyzing traffic patterns...',
// // // //           'Cross-referencing databases...',
// // // //           'Verifying identity markers...',
// // // //           'Compiling security report...',
// // // //           'Finalizing assessment...'
// // // //         ];
        
// // // //         loadingMessages.forEach((message, index) => {
// // // //           setTimeout(() => {
// // // //             setVisibleLoadingMessages(prev => [...prev, message]);
            
// // // //             // Show important notice after all loading messages are done (fallback)
// // // //             if (index === loadingMessages.length - 1) {
// // // //               setTimeout(() => {
// // // //                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// // // //               }, 1000);
// // // //             }
// // // //           }, index * 800); // 800ms delay between each message
// // // //         });
// // // //       }, 3000);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="fixed inset-0 bg-black overflow-auto flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
// // // //       {/* Main Container */}
// // // //       <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12 lg:space-y-16">
        
// // // //         {/* Top Button - Scan Network (only show if not showing results) */}
// // // //         {!showResults && (
// // // //           <div className="w-full flex justify-center">
// // // //             <button 
// // // //               onClick={scanNetwork}
// // // //               disabled={isScanning}
// // // //               className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform disabled:transform-none disabled:shadow-none"
// // // //             >
// // // //               {isScanning ? 'Scanning...' : 'Scan Network'}
// // // //             </button>
// // // //           </div>
// // // //         )}

// // // //         {/* Main Title */}
// // // //         <div className="text-center">
// // // //           <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider cursor-pointer">
// // // //             Internet Scan
// // // //           </h1>
// // // //         </div>

// // // //         {/* Content Area */}
// // // //         <div className="w-full min-h-64 flex flex-col items-center justify-center">
// // // //           {isScanning && (
// // // //             <div className="text-blue-600 font-mono text-xl animate-pulse">
// // // //               Scanning your network...
// // // //             </div>
// // // //           )}
          
// // // //           {showResults && scanResults && (
// // // //             <div className="w-full max-w-2xl space-y-6 font-mono">
// // // //               {/* Scan Results */}
// // // //               <div className="space-y-4 text-center sm:text-left">
// // // //                 {visibleResults.location && (
// // // //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // //                     Detected Location: {scanResults.location}
// // // //                   </div>
// // // //                 )}
                
// // // //                 {visibleResults.ip && (
// // // //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // //                     IP Address: {scanResults.ip}
// // // //                   </div>
// // // //                 )}
                
// // // //                 {visibleResults.isp && (
// // // //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // //                     ISP: {scanResults.isp}
// // // //                   </div>
// // // //                 )}
                
// // // //                 {visibleResults.device && (
// // // //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // //                     Device: {scanResults.device}
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //               {/* Warning Message */}
// // // //               {visibleResults.warning && (
// // // //                 <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
// // // //                   Your {scanResults.device} was used from another location
// // // //                   apart from your home location {scanResults.location.split(',')[0]}, and
// // // //                   your data was accessed through your ISP {scanResults.isp.replace(/AS\d+\s+/, '')}.
                  
// // // //                   <br /><br />
                  
// // // //                 </div>
// // // //               )}

// // // //               {/* Loading Messages */}
// // // //               {visibleResults.loading && (
// // // //                 <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
// // // //                   {visibleLoadingMessages.map((message, index) => (
// // // //                     <div key={index} className="animate-fade-in">
// // // //                       {message}
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Important Notice Section - Only show after scanning is complete */}
// // // //         {visibleResults.importantNotice && (
// // // //           <div className="w-full max-w-2xl text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
// // // //             <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
// // // //             <br />
// // // //             We've found strong indicators that your personal information is being misused across multiple platforms. Specifically, it appears that your identity has been used on the following apps and services:
// // // //             <br /><br />
// // // //             Cash App
// // // //             <br />
// // // //             Venmo
// // // //             <br />
// // // //             Chime
// // // //             <br />
// // // //             Walmart
// // // //             <br />
// // // //             Sam's Club
// // // //             <br />
// // // //             Bitcoin platform
// // // //             <br />
// // // //             One credit line application
// // // //             <br />
// // // //           </div>
// // // //         )}

// // // //         {/* Bottom Button - Submit Complaint (always visible) */}
// // // //         <div className="w-full flex justify-center">
// // // //           <button 
// // // //             onClick={handleSubmitComplaint}
// // // //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer"
// // // //           >
// // // //             Submit complaint
// // // //           </button>
// // // //         </div>

// // // //         {/* Popup Modal */}
// // // //         {showPopup && (
// // // //           <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
// // // //             <div className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl">
// // // //               {/* Close button */}
// // // //               <button 
// // // //                 onClick={closePopup}
// // // //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
// // // //               >
// // // //                 ×
// // // //               </button>
              
// // // //               {/* Popup Content */}
// // // //               <div className="text-center space-y-4">
// // // //                 <div className="text-red-600 text-6xl mb-4">⚠️</div>
                
// // // //                 <h2 className="text-xl font-bold text-red-600 mb-4">
// // // //                   URGENT: Device Detection Alert
// // // //                 </h2>
                
// // // //                 <div className="text-gray-800 text-sm leading-relaxed space-y-3">
// // // //                   <p>
// // // //                     <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized access attempts from your device.
// // // //                   </p>
                  
// // // //                   {/* <p>
// // // //                     Your device appears to be compromised and may be part of a botnet used for:
// // // //                   </p>
                  
// // // //                   <ul className="text-left list-disc list-inside space-y-1 bg-red-50 p-3 rounded">
// // // //                     <li>Cryptocurrency mining without your consent</li>
// // // //                     <li>Identity theft operations</li>
// // // //                     <li>Banking credential harvesting</li>
// // // //                     <li>Personal data extraction</li>
// // // //                   </ul> */}
                  
// // // //                   <p className="font-semibold text-red-700">
// // // //                     Immediate action required to secure your accounts and personal information.
// // // //                   </p>
                  
// // // //                   <p className="text-sm text-gray-600">
// // // //                     Our security experts are standing by 24/7 to help you resolve this issue and protect your digital identity.
// // // //                   </p>
// // // //                 </div>
                
// // // //                 <div className="pt-4 space-y-3">
// // // //                   <button 
// // // //                     onClick={handleCallSupport}
// // // //                     className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
// // // //                   >
// // // //                     🔒 Call Support System Now
// // // //                   </button>
                  
// // // //                   <p className="text-xs text-gray-500">
// // // //                     Don't wait - Every minute counts in preventing further damage
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //       </div>
      
// // // //       <style jsx>{`
// // // //         @keyframes fade-in {
// // // //           from {
// // // //             opacity: 0;
// // // //             transform: translateY(10px);
// // // //           }
// // // //           to {
// // // //             opacity: 1;
// // // //             transform: translateY(0);
// // // //           }
// // // //         }
        
// // // //         .animate-fade-in {
// // // //           animation: fade-in 0.5s ease-out forwards;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default InternetScanLayout;


// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const InternetScanLayout = () => {
// // //   const [isScanning, setIsScanning] = useState(false);
// // //   const [scanResults, setScanResults] = useState(null);
// // //   const [showResults, setShowResults] = useState(false);
// // //   const [visibleResults, setVisibleResults] = useState({
// // //     location: false,
// // //     ip: false,
// // //     isp: false,
// // //     device: false,
// // //     warning: false,
// // //     loading: false,
// // //     importantNotice: false
// // //   });
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([]);
// // //   const [autoScanTriggered, setAutoScanTriggered] = useState(false);
// // //   const navigate = useNavigate()
// // //   // const navigate = useNavigate() // Commented out for demo purposes

// // //   // Replace with your actual IPinfo access token
// // //   const IPINFO_ACCESS_TOKEN = '26347059c50ccc';

// // //   // Auto-scan after 5 seconds of inactivity
// // //   useEffect(() => {
// // //     let autoScanTimer;
    
// // //     if (!isScanning && !showResults && !autoScanTriggered) {
// // //       autoScanTimer = setTimeout(() => {
// // //         setAutoScanTriggered(true);
// // //         scanNetwork();
// // //       }, 5000); // 5 seconds
// // //     }

// // //     // Cleanup timer on component unmount or if conditions change
// // //     return () => {
// // //       if (autoScanTimer) {
// // //         clearTimeout(autoScanTimer);
// // //       }
// // //     };
// // //   }, [isScanning, showResults, autoScanTriggered]);

// // //   // Reset auto-scan trigger on user interaction
// // //   const resetAutoScanTrigger = () => {
// // //     if (!autoScanTriggered) {
// // //       setAutoScanTriggered(false);
// // //     }
// // //   };

// // //   const handleSubmitComplaint = (e) => {
// // //     e.preventDefault();
// // //     setShowPopup(true);
// // //   };

// // //   const handleCallSupport = () => {
// // //     navigate('/protect-your-device')
// // //     setShowPopup(false);
// // //   };

// // //   const closePopup = () => {
// // //     setShowPopup(false);
// // //   };

// // //   const scanNetwork = async () => { 
// // //     setIsScanning(true);
// // //     setShowResults(false);
// // //     setVisibleResults({
// // //       location: false,
// // //       ip: false,
// // //       isp: false,
// // //       device: false,
// // //       warning: false,
// // //       loading: false,
// // //       importantNotice: false
// // //     });
// // //     setVisibleLoadingMessages([]);
    
// // //     try {
// // //       // Wait for 3 seconds showing "Scanning your network..."
// // //       await new Promise(resolve => setTimeout(resolve, 3000));
      
// // //       // Fetch IP information from IPinfo API
// // //       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`);
// // //       const data = await response.json();
      
// // //       // Detect device type (basic detection)
// // //       const userAgent = navigator.userAgent;
// // //       let deviceType = 'Unknown';
      
// // //       if (/Windows/i.test(userAgent)) {
// // //         deviceType = 'Windows';
// // //       } else if (/Macintosh/i.test(userAgent)) {
// // //         deviceType = 'Mac';
// // //       } else if (/Linux/i.test(userAgent)) {
// // //         deviceType = 'Linux';
// // //       } else if (/Android/i.test(userAgent)) {
// // //         deviceType = 'Android';
// // //       } else if (/iPhone|iPad/i.test(userAgent)) {
// // //         deviceType = 'iOS';
// // //       }

// // //       setScanResults({
// // //         location: `${data.city}, ${data.region}, ${data.country}`,
// // //         ip: data.ip,
// // //         isp: data.org,
// // //         device: deviceType
// // //       });
      
// // //       setShowResults(true);
// // //       setIsScanning(false);
      
// // //       // Show results one by one with delays
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, location: true }));
// // //       }, 500);
      
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, ip: true }));
// // //       }, 1000);
      
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, isp: true }));
// // //       }, 1500);
      
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, device: true }));
// // //       }, 2000);
      
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, warning: true }));
// // //       }, 2500);
      
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, loading: true }));
// // //         // Show loading messages one by one
// // //         const loadingMessages = [
// // //           'Initializing connection...',
// // //           'Bypassing firewall...',
// // //           'Accessing secure server...',
// // //           'Decrypting network protocols...',
// // //           'Scanning for vulnerabilities...',
// // //           'Analyzing traffic patterns...',
// // //           'Cross-referencing databases...',
// // //           'Verifying identity markers...',
// // //           'Compiling security report...',
// // //           'Finalizing assessment...'
// // //         ];
        
// // //         loadingMessages.forEach((message, index) => {
// // //           setTimeout(() => {
// // //             setVisibleLoadingMessages(prev => [...prev, message]);
            
// // //             // Show important notice after all loading messages are done
// // //             if (index === loadingMessages.length - 1) {
// // //               setTimeout(() => {
// // //                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// // //               }, 1000);
// // //             }
// // //           }, index * 800); // 800ms delay between each message
// // //         });
// // //       }, 3000);
      
// // //     } catch (error) {
// // //       console.error('Error fetching IP info:', error);
// // //       // Fallback data for demo purposes
// // //       setScanResults({
// // //         location: 'Mumbai, Maharashtra, India',
// // //         ip: '152.58.40.123',
// // //         isp: 'Reliance Jio Infocomm Limited',
// // //         device: 'Windows'
// // //       });
      
// // //       setShowResults(true);
// // //       setIsScanning(false);
      
// // //       // Show results one by one with delays (fallback)
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, location: true }));
// // //       }, 500);
      
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, ip: true }));
// // //       }, 1000);
      
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, isp: true }));
// // //       }, 1500);
      
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, device: true }));
// // //       }, 2000);
      
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, warning: true }));
// // //       }, 2500);
      
// // //       setTimeout(() => {
// // //         setVisibleResults(prev => ({ ...prev, loading: true }));
// // //         // Show loading messages one by one (fallback)
// // //         const loadingMessages = [
// // //           'Initializing connection...',
// // //           'Bypassing firewall...',
// // //           'Accessing secure server...',
// // //           'Decrypting network protocols...',
// // //           'Scanning for vulnerabilities...',
// // //           'Analyzing traffic patterns...',
// // //           'Cross-referencing databases...',
// // //           'Verifying identity markers..',
// // //           'Compiling security report...',
// // //           'Finalizing assessment...'
// // //         ];
        
// // //         loadingMessages.forEach((message, index) => {
// // //           setTimeout(() => {
// // //             setVisibleLoadingMessages(prev => [...prev, message]);
            
// // //             // Show important notice after all loading messages are done (fallback)
// // //             if (index === loadingMessages.length - 1) {
// // //               setTimeout(() => {
// // //                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// // //               }, 1000);
// // //             }
// // //           }, index * 800); // 800ms delay between each message
// // //         });
// // //       }, 3000);
// // //     }
// // //   };

// // //   return (
// // //     <div 
// // //       className="fixed inset-0 bg-black overflow-auto flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
// // //       onClick={resetAutoScanTrigger}
// // //       onMouseMove={resetAutoScanTrigger}
// // //       onKeyDown={resetAutoScanTrigger}
// // //     >
// // //       {/* Main Container */}
// // //       <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12 lg:space-y-16">
        
// // //         {/* Top Button - Scan Network (only show if not showing results) */}
// // //         {!showResults && (
// // //           <div className="w-full flex justify-center">
// // //             <button 
// // //               onClick={scanNetwork}
// // //               disabled={isScanning}
// // //               className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform disabled:transform-none disabled:shadow-none"
// // //             >
// // //               {isScanning ? 'Scanning...' : 'Scan Network'}
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Main Title */}
// // //         <div className="text-center">
// // //           <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider cursor-pointer">
// // //             Internet Scan
// // //           </h1>
// // //         </div>

// // //         {/* Content Area */}
// // //         <div className="w-full min-h-64 flex flex-col items-center justify-center">
// // //           {isScanning && (
// // //             <div className="text-blue-600 font-mono text-xl animate-pulse">
// // //               Scanning your network...
// // //             </div>
// // //           )}
          
// // //           {showResults && scanResults && (
// // //             <div className="w-full max-w-2xl space-y-6 font-mono">
// // //               {/* Scan Results */}
// // //               <div className="space-y-4 text-center sm:text-left">
// // //                 {visibleResults.location && (
// // //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // //                     Detected Location: {scanResults.location}
// // //                   </div>
// // //                 )}
                
// // //                 {visibleResults.ip && (
// // //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // //                     IP Address: {scanResults.ip}
// // //                   </div>
// // //                 )}
                
// // //                 {visibleResults.isp && (
// // //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // //                     ISP: {scanResults.isp}
// // //                   </div>
// // //                 )}
                
// // //                 {visibleResults.device && (
// // //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // //                     Device: {scanResults.device}
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* Warning Message */}
// // //               {visibleResults.warning && (
// // //                 <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
// // //                   Your {scanResults.device} was used from another location
// // //                   apart from your home location {scanResults.location.split(',')[0]}, and
// // //                   your data was accessed through your ISP {scanResults.isp.replace(/AS\d+\s+/, '')}.
                  
// // //                   <br /><br />
                  
// // //                 </div>
// // //               )}

// // //               {/* Loading Messages */}
// // //               {visibleResults.loading && (
// // //                 <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
// // //                   {visibleLoadingMessages.map((message, index) => (
// // //                     <div key={index} className="animate-fade-in">
// // //                       {message}
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Important Notice Section - Only show after scanning is complete */}
// // //         {visibleResults.importantNotice && (
// // //           <div className="w-full max-w-2xl text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
// // //             <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
// // //             <br />
// // //             We've found strong indicators that your personal information is being misused across multiple platforms. Specifically, it appears that your identity has been used on the following apps and services:
// // //             <br /><br />
// // //             Cash App
// // //             <br />
// // //             Venmo
// // //             <br />
// // //             Chime
// // //             <br />
// // //             Walmart
// // //             <br />
// // //             Sam's Club
// // //             <br />
// // //             Bitcoin platform
// // //             <br />
// // //             One credit line application
// // //             <br />
// // //           </div>
// // //         )}

// // //         {/* Bottom Button - Submit Complaint (always visible) */}
// // //         <div className="w-full flex justify-center">
// // //           <button 
// // //             onClick={handleSubmitComplaint}
// // //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer"
// // //           >
// // //             Submit complaint
// // //           </button>
// // //         </div>

// // //         {/* Popup Modal */}
// // //         {showPopup && (
// // //           <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
// // //             <div className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl">
// // //               {/* Close button */}
// // //               <button 
// // //                 onClick={closePopup}
// // //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
// // //               >
// // //                 ×
// // //               </button>
              
// // //               {/* Popup Content */}
// // //               <div className="text-center space-y-4">
// // //                 <div className="text-red-600 text-6xl mb-4">⚠️</div>
                
// // //                 <h2 className="text-xl font-bold text-red-600 mb-4">
// // //                   URGENT: Device Detection Alert
// // //                 </h2>
                
// // //                 <div className="text-gray-800 text-sm leading-relaxed space-y-3">
// // //                   <p>
// // //                     <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized access attempts from your device.
// // //                   </p>
                  
// // //                   <p className="font-semibold text-red-700">
// // //                     Immediate action required to secure your accounts and personal information.
// // //                   </p>
                  
// // //                   <p className="text-sm text-gray-600">
// // //                     Our security experts are standing by 24/7 to help you resolve this issue and protect your digital identity.
// // //                   </p>
// // //                 </div>
                
// // //                 <div className="pt-4 space-y-3">
// // //                   <button 
// // //                     onClick={handleCallSupport}
// // //                     className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
// // //                   >
// // //                     🔒 Call Support System Now
// // //                   </button>
                  
// // //                   <p className="text-xs text-gray-500">
// // //                     Don't wait - Every minute counts in preventing further damage
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //       </div>
      
// // //       <style jsx>{`
// // //         @keyframes fade-in {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(10px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }
        
// // //         .animate-fade-in {
// // //           animation: fade-in 0.5s ease-out forwards;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default InternetScanLayout;  

// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const InternetScanLayout = () => {
// //   const [isScanning, setIsScanning] = useState(false);
// //   const [scanResults, setScanResults] = useState(null);
// //   const [showResults, setShowResults] = useState(false);
// //   const [visibleResults, setVisibleResults] = useState({
// //     location: false,
// //     ip: false,
// //     isp: false,
// //     device: false,
// //     warning: false,
// //     loading: false,
// //     importantNotice: false
// //   });
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([]);
// //   const [autoScanTriggered, setAutoScanTriggered] = useState(false);
// //   const [scanComplete, setScanComplete] = useState(false);
// //   const navigate = useNavigate() // Commented out for demo purposes

// //   // Replace with your actual IPinfo access token
// //   const IPINFO_ACCESS_TOKEN = '26347059c50ccc';

// //   // Auto-scan after 5 seconds of inactivity
// //   useEffect(() => {
// //     let autoScanTimer;
    
// //     if (!isScanning && !showResults && !autoScanTriggered) {
// //       autoScanTimer = setTimeout(() => {
// //         setAutoScanTriggered(true);
// //         scanNetwork();
// //       }, 5000); // 5 seconds
// //     }

// //     // Cleanup timer on component unmount or if conditions change
// //     return () => {
// //       if (autoScanTimer) {
// //         clearTimeout(autoScanTimer);
// //       }
// //     };
// //   }, [isScanning, showResults, autoScanTriggered]);

// //   // Reset auto-scan trigger on user interaction (only if auto-scan hasn't been triggered and scan isn't complete)
// //   const resetAutoScanTrigger = () => {
// //     if (!autoScanTriggered) {
// //       setAutoScanTriggered(false);
// //     }
// //   };

// //   // Handle screen click - redirect only after scan is complete
// //   const handleScreenClick = () => {
// //     if (scanComplete) {
// //       navigate("/protect-your-device")
// //     //   console.log("Would navigate to /protect-your-device");
// //     } else {
// //       resetAutoScanTrigger();
// //     }
// //   };

// //   const handleSubmitComplaint = (e) => {
// //     e.preventDefault();
// //     setShowPopup(true);
// //   };

// //   const handleCallSupport = () => {
// //     // window.open('https://chatbot.page/V3kkrC', '_blank');
// //     // setShowPopup(false);
// //     navigate("/protect-your-device")
// //     // console.log("Would navigate to protect-your-device page");
// //     setShowPopup(false);
// //   };

// //   const closePopup = () => {
// //     setShowPopup(false);
// //   };

// //   const scanNetwork = async () => { 
// //     setIsScanning(true);
// //     setShowResults(false);
// //     setVisibleResults({
// //       location: false,
// //       ip: false,
// //       isp: false,
// //       device: false,
// //       warning: false,
// //       loading: false,
// //       importantNotice: false
// //     });
// //     setVisibleLoadingMessages([]);
    
// //     try {
// //       // Wait for 3 seconds showing "Scanning your network..."
// //       await new Promise(resolve => setTimeout(resolve, 3000));
      
// //       // Fetch IP information from IPinfo API
// //       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`);
// //       const data = await response.json();
      
// //       // Detect device type (basic detection)
// //       const userAgent = navigator.userAgent;
// //       let deviceType = 'Unknown';
      
// //       if (/Windows/i.test(userAgent)) {
// //         deviceType = 'Windows';
// //       } else if (/Macintosh/i.test(userAgent)) {
// //         deviceType = 'Mac';
// //       } else if (/Linux/i.test(userAgent)) {
// //         deviceType = 'Linux';
// //       } else if (/Android/i.test(userAgent)) {
// //         deviceType = 'Android';
// //       } else if (/iPhone|iPad/i.test(userAgent)) {
// //         deviceType = 'iOS';
// //       }

// //       setScanResults({
// //         location: `${data.city}, ${data.region}, ${data.country}`,
// //         ip: data.ip,
// //         isp: data.org,
// //         device: deviceType
// //       });
      
// //       setShowResults(true);
// //       setIsScanning(false);
      
// //       // Show results one by one with delays
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, location: true }));
// //       }, 500);
      
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, ip: true }));
// //       }, 1000);
      
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, isp: true }));
// //       }, 1500);
      
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, device: true }));
// //       }, 2000);
      
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, warning: true }));
// //       }, 2500);
      
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, loading: true }));
// //         // Show loading messages one by one
// //         const loadingMessages = [
// //           'Initializing connection...',
// //           'Bypassing firewall...',
// //           'Accessing secure server...',
// //           'Decrypting network protocols...',
// //           'Scanning for vulnerabilities...',
// //           'Analyzing traffic patterns...',
// //           'Cross-referencing databases...',
// //           'Verifying identity markers...',
// //           'Compiling security report...',
// //           'Finalizing assessment...'
// //         ];
        
// //         loadingMessages.forEach((message, index) => {
// //           setTimeout(() => {
// //             setVisibleLoadingMessages(prev => [...prev, message]);
            
// //             // Show important notice after all loading messages are done
// //             if (index === loadingMessages.length - 1) {
// //               setTimeout(() => {
// //                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// //                 setScanComplete(true); // Mark scan as complete
// //               }, 1000);
// //             }
// //           }, index * 800); // 800ms delay between each message
// //         });
// //       }, 3000);
      
// //     } catch (error) {
// //       console.error('Error fetching IP info:', error);
// //       // Fallback data for demo purposes
// //       setScanResults({
// //         location: 'Mumbai, Maharashtra, India',
// //         ip: '152.58.40.123',
// //         isp: 'Reliance Jio Infocomm Limited',
// //         device: 'Windows'
// //       });
      
// //       setShowResults(true);
// //       setIsScanning(false);
      
// //       // Show results one by one with delays (fallback)
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, location: true }));
// //       }, 500);
      
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, ip: true }));
// //       }, 1000);
      
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, isp: true }));
// //       }, 1500);
      
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, device: true }));
// //       }, 2000);
      
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, warning: true }));
// //       }, 2500);
      
// //       setTimeout(() => {
// //         setVisibleResults(prev => ({ ...prev, loading: true }));
// //         // Show loading messages one by one (fallback)
// //         const loadingMessages = [
// //           'Initializing connection...',
// //           'Bypassing firewall...',
// //           'Accessing secure server...',
// //           'Decrypting network protocols...',
// //           'Scanning for vulnerabilities...',
// //           'Analyzing traffic patterns...',
// //           'Cross-referencing databases...',
// //           'Verifying identity markers..',
// //           'Compiling security report...',
// //           'Finalizing assessment...'
// //         ];
        
// //         loadingMessages.forEach((message, index) => {
// //           setTimeout(() => {
// //             setVisibleLoadingMessages(prev => [...prev, message]);
            
// //             // Show important notice after all loading messages are done (fallback)
// //             if (index === loadingMessages.length - 1) {
// //               setTimeout(() => {
// //                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// //                 setScanComplete(true); // Mark scan as complete (fallback)
// //               }, 1000);
// //             }
// //           }, index * 800); // 800ms delay between each message
// //         });
// //       }, 3000);
// //     }
// //   };

// //   return (
// //     <div 
// //       className="fixed inset-0 bg-black overflow-auto flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
// //       onClick={handleScreenClick}
// //       onMouseMove={resetAutoScanTrigger}
// //       onKeyDown={resetAutoScanTrigger}
// //     >
// //       {/* Main Container */}
// //       <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12 lg:space-y-16">
        
// //         {/* Top Button - Scan Network (only show if not showing results) */}
// //         {!showResults && (
// //           <div className="w-full flex justify-center">
// //             <button 
// //               onClick={(e) => {
// //                 e.stopPropagation(); // Prevent triggering screen click
// //                 scanNetwork();
// //               }}
// //               disabled={isScanning}
// //               className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform disabled:transform-none disabled:shadow-none"
// //             >
// //               {isScanning ? 'Scanning...' : 'Scan Network'}
// //             </button>
// //           </div>
// //         )}

// //         {/* Main Title */}
// //         <div className="text-center">
// //           <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider cursor-pointer">
// //             Internet Scan
// //           </h1>
// //         </div>

// //         {/* Content Area */}
// //         <div className="w-full min-h-64 flex flex-col items-center justify-center">
// //           {isScanning && (
// //             <div className="text-blue-600 font-mono text-xl animate-pulse">
// //               Scanning your network...
// //             </div>
// //           )}
          
// //           {showResults && scanResults && (
// //             <div className="w-full max-w-2xl space-y-6 font-mono">
// //               {/* Scan Results */}
// //               <div className="space-y-4 text-center sm:text-left">
// //                 {visibleResults.location && (
// //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// //                     Detected Location: {scanResults.location}
// //                   </div>
// //                 )}
                
// //                 {visibleResults.ip && (
// //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// //                     IP Address: {scanResults.ip}
// //                   </div>
// //                 )}
                
// //                 {visibleResults.isp && (
// //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// //                     ISP: {scanResults.isp}
// //                   </div>
// //                 )}
                
// //                 {visibleResults.device && (
// //                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// //                     Device: {scanResults.device}
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Warning Message */}
// //               {visibleResults.warning && (
// //                 <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
// //                   Your {scanResults.device} was used from another location
// //                   apart from your home location {scanResults.location.split(',')[0]}, and
// //                   your data was accessed through your ISP {scanResults.isp.replace(/AS\d+\s+/, '')}.
                  
// //                   <br /><br />
                  
// //                 </div>
// //               )}

// //               {/* Loading Messages */}
// //               {visibleResults.loading && (
// //                 <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
// //                   {visibleLoadingMessages.map((message, index) => (
// //                     <div key={index} className="animate-fade-in">
// //                       {message}
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           )}
// //         </div>

// //         {/* Important Notice Section - Only show after scanning is complete */}
// //         {visibleResults.importantNotice && (
// //           <div className="w-full max-w-2xl text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
// //             <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
// //             <br />
// //             We've found strong indicators that your personal information is being misused across multiple platforms. Specifically, it appears that your identity has been used on the following apps and services:
// //             <br /><br />
// //             Cash App
// //             <br />
// //             Venmo
// //             <br />
// //             Chime
// //             <br />
// //             Walmart
// //             <br />
// //             Sam's Club
// //             <br />
// //             Bitcoin platform
// //             <br />
// //             One credit line application
// //             <br />
// //           </div>
// //         )}

// //         {/* Bottom Button - Submit Complaint (always visible) */}
// //         <div className="w-full flex justify-center">
// //           <button 
// //             onClick={(e) => {
// //               e.stopPropagation(); // Prevent triggering screen click
// //               handleSubmitComplaint(e);
// //             }}
// //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer"
// //           >
// //             Submit complaint
// //           </button>
// //         </div>

// //         {/* Popup Modal */}
// //         {showPopup && (
// //           <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
// //             <div 
// //               className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl"
// //               onClick={(e) => e.stopPropagation()} // Prevent triggering screen click
// //             >
// //               {/* Close button */}
// //               <button 
// //                 onClick={closePopup}
// //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
// //               >
// //                 ×
// //               </button>
              
// //               {/* Popup Content */}
// //               <div className="text-center space-y-4">
// //                 <div className="text-red-600 text-6xl mb-4">⚠️</div>
                
// //                 <h2 className="text-xl font-bold text-red-600 mb-4">
// //                   URGENT: Device Detection Alert
// //                 </h2>
                
// //                 <div className="text-gray-800 text-sm leading-relaxed space-y-3">
// //                   <p>
// //                     <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized access attempts from your device.
// //                   </p>
                  
// //                   <p className="font-semibold text-red-700">
// //                     Immediate action required to secure your accounts and personal information.
// //                   </p>
                  
// //                   <p className="text-sm text-gray-600">
// //                     Our security experts are standing by 24/7 to help you resolve this issue and protect your digital identity.
// //                   </p>
// //                 </div>
                
// //                 <div className="pt-4 space-y-3">
// //                   <button 
// //                     onClick={handleCallSupport}
// //                     className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
// //                   >
// //                     🔒 Call Support System Now
// //                   </button>
                  
// //                   <p className="text-xs text-gray-500">
// //                     Don't wait - Every minute counts in preventing further damage
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //       </div>
      
// //       <style jsx>{`
// //         @keyframes fade-in {
// //           from {
// //             opacity: 0;
// //             transform: translateY(10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
        
// //         .animate-fade-in {
// //           animation: fade-in 0.5s ease-out forwards;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default InternetScanLayout;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const InternetScanLayout = () => {
//   const [isScanning, setIsScanning] = useState(false);
//   const [scanResults, setScanResults] = useState(null);
//   const [showResults, setShowResults] = useState(false);
//   const [visibleResults, setVisibleResults] = useState({
//     location: false,
//     ip: false,
//     isp: false,
//     device: false,
//     warning: false,
//     loading: false,
//     importantNotice: false
//   });
//   const [showPopup, setShowPopup] = useState(false);
//   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([]);
//   const [autoScanTriggered, setAutoScanTriggered] = useState(false);
//   const [scanComplete, setScanComplete] = useState(false);
//   const navigate = useNavigate() // Commented out for demo purposes

//   // Replace with your actual IPinfo access token
//   const IPINFO_ACCESS_TOKEN = '26347059c50ccc';

//   // Auto-scan after 5 seconds of inactivity
//   useEffect(() => {
//     let autoScanTimer;
    
//     if (!isScanning && !showResults && !autoScanTriggered) {
//       autoScanTimer = setTimeout(() => {
//         setAutoScanTriggered(true);
//         scanNetwork();
//       }, 5000); // 5 seconds
//     }

//     // Cleanup timer on component unmount or if conditions change
//     return () => {
//       if (autoScanTimer) {
//         clearTimeout(autoScanTimer);
//       }
//     };
//   }, [isScanning, showResults, autoScanTriggered]);

//   // Auto-redirect after scan completion
//   useEffect(() => {
//     let autoRedirectTimer;
    
//     if (scanComplete) {
//       autoRedirectTimer = setTimeout(() => {
//         navigate("/protect-your-device")
//         // console.log("Auto-redirecting to /protect-your-device after 5 seconds");
//       }, 5000); // 5 seconds after scan completion
//     }

//     // Cleanup timer on component unmount or if conditions change
//     return () => {
//       if (autoRedirectTimer) {
//         clearTimeout(autoRedirectTimer);
//       }
//     };
//   }, [scanComplete]);

//   // Reset auto-scan trigger on user interaction (only if auto-scan hasn't been triggered and scan isn't complete)
//   const resetAutoScanTrigger = () => {
//     if (!autoScanTriggered) {
//       setAutoScanTriggered(false);
//     }
//   };

//   // Handle screen click - redirect only after scan is complete
//   const handleScreenClick = () => {
//     if (scanComplete) {
//       navigate("/protect-your-device")
//     //   console.log("Would navigate to /protect-your-device");
//     } else {
//       resetAutoScanTrigger();
//     }
//   };

//   const handleSubmitComplaint = (e) => {
//     e.preventDefault();
//     setShowPopup(true);
//   };

//   const handleCallSupport = () => {
//     // window.open('https://chatbot.page/V3kkrC', '_blank');
//     // setShowPopup(false);
//     navigate("/protect-your-device")
//     // console.log("Would navigate to protect-your-device page");
//     setShowPopup(false);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const scanNetwork = async () => { 
//     setIsScanning(true);
//     setShowResults(false);
//     setVisibleResults({
//       location: false,
//       ip: false,
//       isp: false,
//       device: false,
//       warning: false,
//       loading: false,
//       importantNotice: false
//     });
//     setVisibleLoadingMessages([]);
    
//     try {
//       // Wait for 3 seconds showing "Scanning your network..."
//       await new Promise(resolve => setTimeout(resolve, 3000));
      
//       // Fetch IP information from IPinfo API
//       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`);
//       const data = await response.json();
      
//       // Detect device type (basic detection)
//       const userAgent = navigator.userAgent;
//       let deviceType = 'Unknown';
      
//       if (/Windows/i.test(userAgent)) {
//         deviceType = 'Windows';
//       } else if (/Macintosh/i.test(userAgent)) {
//         deviceType = 'Mac';
//       } else if (/Linux/i.test(userAgent)) {
//         deviceType = 'Linux';
//       } else if (/Android/i.test(userAgent)) {
//         deviceType = 'Android';
//       } else if (/iPhone|iPad/i.test(userAgent)) {
//         deviceType = 'iOS';
//       }

//       setScanResults({
//         location: `${data.city}, ${data.region}, ${data.country}`,
//         ip: data.ip,
//         isp: data.org,
//         device: deviceType
//       });
      
//       setShowResults(true);
//       setIsScanning(false);
      
//       // Show results one by one with delays
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, location: true }));
//       }, 500);
      
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, ip: true }));
//       }, 1000);
      
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, isp: true }));
//       }, 1500);
      
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, device: true }));
//       }, 2000);
      
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, warning: true }));
//       }, 2500);
      
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, loading: true }));
//         // Show loading messages one by one
//         const loadingMessages = [
//           'Initializing connection...',
//           'Bypassing firewall...',
//           'Accessing secure server...',
//           'Decrypting network protocols...',
//           'Scanning for vulnerabilities...',
//           'Analyzing traffic patterns...',
//           'Cross-referencing databases...',
//           'Verifying identity markers...',
//           'Compiling security report...',
//           'Finalizing assessment...'
//         ];
        
//         loadingMessages.forEach((message, index) => {
//           setTimeout(() => {
//             setVisibleLoadingMessages(prev => [...prev, message]);
            
//             // Show important notice after all loading messages are done
//             if (index === loadingMessages.length - 1) {
//               setTimeout(() => {
//                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
//                 setScanComplete(true); // Mark scan as complete
//               }, 1000);
//             }
//           }, index * 800); // 800ms delay between each message
//         });
//       }, 3000);
      
//     } catch (error) {
//       console.error('Error fetching IP info:', error);
//       // Fallback data for demo purposes
//       setScanResults({
//         location: 'Mumbai, Maharashtra, India',
//         ip: '152.58.40.123',
//         isp: 'Reliance Jio Infocomm Limited',
//         device: 'Windows'
//       });
      
//       setShowResults(true);
//       setIsScanning(false);
      
//       // Show results one by one with delays (fallback)
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, location: true }));
//       }, 500);
      
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, ip: true }));
//       }, 1000);
      
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, isp: true }));
//       }, 1500);
      
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, device: true }));
//       }, 2000);
      
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, warning: true }));
//       }, 2500);
      
//       setTimeout(() => {
//         setVisibleResults(prev => ({ ...prev, loading: true }));
//         // Show loading messages one by one (fallback)
//         const loadingMessages = [
//           'Initializing connection...',
//           'Bypassing firewall...',
//           'Accessing secure server...',
//           'Decrypting network protocols...',
//           'Scanning for vulnerabilities...',
//           'Analyzing traffic patterns...',
//           'Cross-referencing databases...',
//           'Verifying identity markers..',
//           'Compiling security report...',
//           'Finalizing assessment...'
//         ];
        
//         loadingMessages.forEach((message, index) => {
//           setTimeout(() => {
//             setVisibleLoadingMessages(prev => [...prev, message]);
            
//             // Show important notice after all loading messages are done (fallback)
//             if (index === loadingMessages.length - 1) {
//               setTimeout(() => {
//                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
//                 setScanComplete(true); // Mark scan as complete (fallback)
//               }, 1000);
//             }
//           }, index * 800); // 800ms delay between each message
//         });
//       }, 3000);
//     }
//   };

//   return (
//     <div 
//       className="fixed inset-0 bg-black overflow-auto flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
//       onClick={handleScreenClick}
//       onMouseMove={resetAutoScanTrigger}
//       onKeyDown={resetAutoScanTrigger}
//     >
//       {/* Main Container */}
//       <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12 lg:space-y-16">
        
//         {/* Top Button - Scan Network (only show if not showing results) */}
//         {!showResults && (
//           <div className="w-full flex justify-center">
//             <button 
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent triggering screen click
//                 scanNetwork();
//               }}
//               disabled={isScanning}
//               className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform disabled:transform-none disabled:shadow-none"
//             >
//               {isScanning ? 'Scanning...' : 'Scan Network'}
//             </button>
//           </div>
//         )}

//         {/* Main Title */}
//         <div className="text-center">
//           <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider cursor-pointer">
//             Internet Scan
//           </h1>
//         </div>

//         {/* Content Area */}
//         <div className="w-full min-h-64 flex flex-col items-center justify-center">
//           {isScanning && (
//             <div className="text-blue-600 font-mono text-xl animate-pulse">
//               Scanning your network...
//             </div>
//           )}
          
//           {showResults && scanResults && (
//             <div className="w-full max-w-2xl space-y-6 font-mono">
//               {/* Scan Results */}
//               <div className="space-y-4 text-center sm:text-left">
//                 {visibleResults.location && (
//                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
//                     Detected Location: {scanResults.location}
//                   </div>
//                 )}
                
//                 {visibleResults.ip && (
//                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
//                     IP Address: {scanResults.ip}
//                   </div>
//                 )}
                
//                 {visibleResults.isp && (
//                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
//                     ISP: {scanResults.isp}
//                   </div>
//                 )}
                
//                 {visibleResults.device && (
//                   <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
//                     Device: {scanResults.device}
//                   </div>
//                 )}
//               </div>

//               {/* Warning Message */}
//               {visibleResults.warning && (
//                 <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
//                   Your {scanResults.device} was used from another location
//                   apart from your home location {scanResults.location.split(',')[0]}, and
//                   your data was accessed through your ISP {scanResults.isp.replace(/AS\d+\s+/, '')}.
                  
//                   <br /><br />
                  
//                 </div>
//               )}

//               {/* Loading Messages */}
//               {visibleResults.loading && (
//                 <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
//                   {visibleLoadingMessages.map((message, index) => (
//                     <div key={index} className="animate-fade-in">
//                       {message}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Important Notice Section - Only show after scanning is complete */}
//         {visibleResults.importantNotice && (
//           <div className="w-full max-w-2xl text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
//             <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
//             <br />
//             We've found strong indicators that your personal information is being misused across multiple platforms. Specifically, it appears that your identity has been used on the following apps and services:
//             <br /><br />
//             Cash App
//             <br />
//             Venmo
//             <br />
//             Chime
//             <br />
//             Walmart
//             <br />
//             Sam's Club
//             <br />
//             Bitcoin platform
//             <br />
//             One credit line application
//             <br />
//           </div>
//         )}

//         {/* Bottom Button - Submit Complaint (always visible) */}
//         <div className="w-full flex justify-center">
//           <button 
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent triggering screen click
//               handleSubmitComplaint(e);
//             }}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer"
//           >
//             Submit complaint
//           </button>
//         </div>

//         {/* Popup Modal */}
//         {showPopup && (
//           <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
//             <div 
//               className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl"
//               onClick={(e) => e.stopPropagation()} // Prevent triggering screen click
//             >
//               {/* Close button */}
//               <button 
//                 onClick={closePopup}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
//               >
//                 ×
//               </button>
              
//               {/* Popup Content */}
//               <div className="text-center space-y-4">
//                 <div className="text-red-600 text-6xl mb-4">⚠️</div>
                
//                 <h2 className="text-xl font-bold text-red-600 mb-4">
//                   URGENT: Device Detection Alert
//                 </h2>
                
//                 <div className="text-gray-800 text-sm leading-relaxed space-y-3">
//                   <p>
//                     <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized access attempts from your device.
//                   </p>
                  
//                   <p className="font-semibold text-red-700">
//                     Immediate action required to secure your accounts and personal information.
//                   </p>
                  
//                   <p className="text-sm text-gray-600">
//                     Our security experts are standing by 24/7 to help you resolve this issue and protect your digital identity.
//                   </p>
//                 </div>
                
//                 <div className="pt-4 space-y-3">
//                   <button 
//                     onClick={handleCallSupport}
//                     className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
//                   >
//                     🔒 Call Support System Now
//                   </button>
                  
//                   <p className="text-xs text-gray-500">
//                     Don't wait - Every minute counts in preventing further damage
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
      
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InternetScanLayout;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InternetScanLayout = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [visibleResults, setVisibleResults] = useState({
    location: false,
    ip: false,
    isp: false,
    device: false,
    warning: false,
    loading: false,
    importantNotice: false
  });
  const [showPopup, setShowPopup] = useState(false);
  const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([]);
  const [autoScanTriggered, setAutoScanTriggered] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const navigate = useNavigate() // Commented out for demo purposes

  // Replace with your actual IPinfo access token
  const IPINFO_ACCESS_TOKEN = '26347059c50ccc';

  // Auto-scan after 5 seconds of inactivity
  useEffect(() => {
    let autoScanTimer;
    
    if (!isScanning && !showResults && !autoScanTriggered) {
      autoScanTimer = setTimeout(() => {
        setAutoScanTriggered(true);
        scanNetwork();
      }, 5000); // 5 seconds
    }

    // Cleanup timer on component unmount or if conditions change
    return () => {
      if (autoScanTimer) {
        clearTimeout(autoScanTimer);
      }
    };
  }, [isScanning, showResults, autoScanTriggered]);

  // Auto-redirect after scan completion
  useEffect(() => {
    let autoRedirectTimer;
    
    if (scanComplete) {
      autoRedirectTimer = setTimeout(() => {
        navigate("/")
        // console.log("Auto-redirecting to /protect-your-device after 5 seconds");
      }, 10000); // 5 seconds after scan completion
    }

    // Cleanup timer on component unmount or if conditions change
    return () => {
      if (autoRedirectTimer) {
        clearTimeout(autoRedirectTimer);
      }
    };
  }, [scanComplete]);

  // Reset auto-scan trigger on user interaction (only if auto-scan hasn't been triggered and scan isn't complete)
  const resetAutoScanTrigger = () => {
    if (!autoScanTriggered) {
      setAutoScanTriggered(false);
    }
  };

  // Handle screen click - redirect only after scan is complete

  const handleSubmitComplaint = (e) => {
    e.preventDefault();
     window.location.href = "tel:9876543212"; 
    // setShowPopup(true);
  };

  const handleCallSupport = () => {
    // window.open('https://chatbot.page/V3kkrC', '_blank');
    // setShowPopup(false);`
    // navigate("/protect-your-device")
    // setShowPopup(false);
         window.location.href = "tel:9876543212"; 
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const scanNetwork = async () => { 
    setIsScanning(true);
    setShowResults(false);
    setVisibleResults({
      location: false,
      ip: false,
      isp: false,
      device: false,
      warning: false,
      loading: false,
      importantNotice: false
    });
    setVisibleLoadingMessages([]);
    
    try {
      // Wait for 3 seconds showing "Scanning your network..."
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Fetch IP information from IPinfo API
      const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`);
      const data = await response.json();
      
      // Detect device type (basic detection)
      const userAgent = navigator.userAgent;
      let deviceType = 'Unknown';
      
      if (/Windows/i.test(userAgent)) {
        deviceType = 'Windows';
      } else if (/Macintosh/i.test(userAgent)) {
        deviceType = 'Mac';
      } else if (/Linux/i.test(userAgent)) {
        deviceType = 'Linux';
      } else if (/Android/i.test(userAgent)) {
        deviceType = 'Android';
      } else if (/iPhone|iPad/i.test(userAgent)) {
        deviceType = 'iOS';
      }

      setScanResults({
        location: `${data.city}, ${data.region}, ${data.country}`,
        ip: data.ip,
        isp: data.org,
        device: deviceType
      });
      
      setShowResults(true);
      setIsScanning(false);
      
      // Show results one by one with delays
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, location: true }));
      }, 500);
      
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, ip: true }));
      }, 1000);
      
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, isp: true }));
      }, 1500);
      
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, device: true }));
      }, 2000);
      
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, warning: true }));
      }, 2500);
      
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, loading: true }));
        // Show loading messages one by one
        const loadingMessages = [
          'Initializing connection...',
          'Bypassing firewall...',
          'Accessing secure server...',
          'Decrypting network protocols...',
          'Scanning for vulnerabilities...',
          'Analyzing traffic patterns...',
          'Cross-referencing databases...',
          'Verifying identity markers...',
          'Compiling security report...',
          'Finalizing assessment...'
        ];
        
        loadingMessages.forEach((message, index) => {
          setTimeout(() => {
            setVisibleLoadingMessages(prev => [...prev, message]);
            
            // Show important notice after all loading messages are done
            if (index === loadingMessages.length - 1) {
              setTimeout(() => {
                setVisibleResults(prev => ({ ...prev, importantNotice: true }));
                setScanComplete(true); // Mark scan as complete
              }, 1000);
            }
          }, index * 800); // 800ms delay between each message
        });
      }, 3000);
      
    } catch (error) {
      console.error('Error fetching IP info:', error);
      // Fallback data for demo purposes
      setScanResults({
        location: 'Mumbai, Maharashtra, India',
        ip: '152.58.40.123',
        isp: 'Reliance Jio Infocomm Limited',
        device: 'Windows'
      });
      
      setShowResults(true);
      setIsScanning(false);
      
      // Show results one by one with delays (fallback)
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, location: true }));
      }, 500);
      
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, ip: true }));
      }, 1000);
      
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, isp: true }));
      }, 1500);
      
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, device: true }));
      }, 2000);
      
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, warning: true }));
      }, 2500);
      
      setTimeout(() => {
        setVisibleResults(prev => ({ ...prev, loading: true }));
        // Show loading messages one by one (fallback)
        const loadingMessages = [
          'Initializing connection...',
          'Bypassing firewall...',
          'Accessing secure server...',
          'Decrypting network protocols...',
          'Scanning for vulnerabilities...',
          'Analyzing traffic patterns...',
          'Cross-referencing databases...',
          'Verifying identity markers..',
          'Compiling security report...',
          'Finalizing assessment...'
        ];
        
        loadingMessages.forEach((message, index) => {
          setTimeout(() => {
            setVisibleLoadingMessages(prev => [...prev, message]);
            
            // Show important notice after all loading messages are done (fallback)
            if (index === loadingMessages.length - 1) {
              setTimeout(() => {
                setVisibleResults(prev => ({ ...prev, importantNotice: true }));
                setScanComplete(true); // Mark scan as complete (fallback)
              }, 1000);
            }
          }, index * 800); // 800ms delay between each message
        });
      }, 3000);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black overflow-auto flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
      
    >
      {/* Main Container */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12 lg:space-y-16">
        
        {/* Top Button - Scan Network (only show if not showing results) */}
        {!showResults && (
          <div className="w-full flex justify-center">
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering screen click
                scanNetwork();
              }}
              disabled={isScanning}
              className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform disabled:transform-none disabled:shadow-none"
            >
              {isScanning ? 'Scanning...' : 'Scan Network'}
            </button>
          </div>
        )}

        {/* Main Title */}
        <div className="text-center">
          <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider cursor-pointer">
            Internet Scan
          </h1>
        </div>

        {/* Content Area */}
        <div className="w-full min-h-64 flex flex-col items-center justify-center">
          {isScanning && (
            <div className="text-blue-600 font-mono text-xl animate-pulse">
              Scanning your network...
            </div>
          )}
          
          {showResults && scanResults && (
            <div className="w-full max-w-2xl space-y-6 font-mono">
              {/* Scan Results */}
              <div className="space-y-4 text-center sm:text-left">
                {visibleResults.location && (
                  <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
                    Detected Location: {scanResults.location}
                  </div>
                )}
                
                {visibleResults.ip && (
                  <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
                    IP Address: {scanResults.ip}
                  </div>
                )}
                
                {visibleResults.isp && (
                  <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
                    ISP: {scanResults.isp}
                  </div>
                )}
                
                {visibleResults.device && (
                  <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
                    Device: {scanResults.device}
                  </div>
                )}
              </div>

              {/* Warning Message */}
              {visibleResults.warning && (
                <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
                  Your {scanResults.device} was used from another location
                  apart from your home location {scanResults.location.split(',')[0]}, and
                  your data was accessed through your ISP {scanResults.isp.replace(/AS\d+\s+/, '')}.
                  
                  <br /><br />
                  
                </div>
              )}

              {/* Loading Messages */}
              {visibleResults.loading && (
                <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
                  {visibleLoadingMessages.map((message, index) => (
                    <div key={index} className="animate-fade-in">
                      {message}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Important Notice Section - Only show after scanning is complete */}
        {visibleResults.importantNotice && (
          <div className="w-full max-w-2xl text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
            <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
            <br />
            We've found strong indicators that your personal information is being misused across multiple platforms. Specifically, it appears that your identity has been used on the following apps and services:
            <br /><br />
            Cash App
            <br />
            Venmo
            <br />
            Chime
            <br />
            Walmart
            <br />
            Sam's Club
            <br />
            Bitcoin platform
            <br />
            One credit line application
            <br />
          </div>
        )}

        {/* Bottom Button - Submit Complaint (only visible after scan completion) */}
        {scanComplete && (
          <div className="w-full flex justify-center">
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering screen click
                handleSubmitComplaint(e);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer animate-fade-in"
            >
              Submit complaint
            </button>
          </div>
        )}

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div 
              className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent triggering screen click
            >
              {/* Close button */}
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
              
              {/* Popup Content */}
              <div className="text-center space-y-4">
                <div className="text-red-600 text-6xl mb-4">⚠️</div>
                
                <h2 className="text-xl font-bold text-red-600 mb-4">
                  URGENT: Device Detection Alert
                </h2>
                
                <div className="text-gray-800 text-sm leading-relaxed space-y-3">
                  <p>
                    <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized access attempts from your device.
                  </p>
                  
                  <p className="font-semibold text-red-700">
                    Immediate action required to secure your accounts and personal information.
                  </p>
                  
                  <p className="text-sm text-gray-600">
                    Our security experts are standing by 24/7 to help you resolve this issue and protect your digital identity.
                  </p>
                </div>
                
                <div className="pt-4 space-y-3">
                  <button 
                    onClick={handleCallSupport}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
                  >
                    🔒 Call Support System Now
                  </button>
                  
                  <p className="text-xs text-gray-500">
                    Don't wait - Every minute counts in preventing further damage
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InternetScanLayout;