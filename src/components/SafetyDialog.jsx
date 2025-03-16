import React, { useState, useEffect } from "react";

function SafetyDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already agreed
    const hasAgreed = localStorage.getItem("pill-crusher-safety-agreed");
    if (!hasAgreed) {
      setOpen(true);
    }
  }, []);

  const handleAgree = () => {
    // Save to localStorage to prevent showing again
    localStorage.setItem("pill-crusher-safety-agreed", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-xl w-full mx-4">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Safety Warning</h2>
        </div>
        
        {/* English */}
        <div className="mb-6 border-b pb-4">
          <h3 className="font-semibold text-lg mb-2">English</h3>
          <p className="text-base">
            Crushing pills can be dangerous and should only be done under doctor supervision. 
            Some medications can become harmful or ineffective when crushed. 
            Always consult with a healthcare professional before crushing any medication.
          </p>
        </div>
        
        {/* Hindi */}
        <div className="mb-6 border-b pb-4">
          <h3 className="font-semibold text-lg mb-2">हिन्दी</h3>
          <p className="text-base">
            गोलियों को कुचलना खतरनाक हो सकता है और इसे केवल डॉक्टर की देखरेख में ही किया जाना चाहिए। 
            कुछ दवाएं कुचलने पर हानिकारक या अप्रभावी हो सकती हैं। 
            किसी भी दवा को कुचलने से पहले हमेशा स्वास्थ्य देखभाल पेशेवर से परामर्श करें।
          </p>
        </div>
        
        {/* Tamil */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">தமிழ்</h3>
          <p className="text-base">
            மாத்திரைகளை நொறுக்குவது ஆபத்தானது மற்றும் மருத்துவரின் மேற்பார்வையின் கீழ் மட்டுமே செய்யப்பட வேண்டும்.
            சில மருந்துகள் நொறுக்கப்படும்போது தீங்கு விளைவிக்கும் அல்லது செயலிழக்கும்.
            எந்த மருந்தையும் நொறுக்குவதற்கு முன் எப்போதும் சுகாதார நிபுணரை கலந்தாலோசிக்கவும்.
          </p>
        </div>
        
        <div className="flex justify-center mt-6">
          <button 
            onClick={handleAgree}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            I agree
          </button>
        </div>
      </div>
    </div>
  );
}

export default SafetyDialog; 