import React, {useState,useEffect} from 'react'

export default function Azz () {
  const [formData, setFormData] = useState({
    leetcode: '',
    github: '',
    linkedin: ''
  });
  const [status, setStatus] = useState('');
  useEffect(() => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.sync.get(['userSocials'], (result) => {
        if (result.userSocials) {
          setFormData(result.userSocials);
        }
      });
    }
  }, []);

  function handlechange(event) {
    const { name, value } = event.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handlesubmit(event) {
    event.preventDefault();
    
    // 2. SAVE DATA: Save to chrome storage
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.sync.set({ userSocials: formData }, () => {
        setStatus('Saved successfully!');
        
        // Clear the message after 2 seconds
        setTimeout(() => setStatus(''), 2000);
      });
    } else {
      console.log('Not inside an extension, cannot save to chrome.storage');
    }
  }
  return (
    <div className="w-[350px] bg-slate-900 text-slate-50 p-6 font-sans">
      
     
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold bg-linear-to-r from-slate-300 to-slate-500 text-transparent bg-clip-text">
          Dev Profile Saver
        </h1>
       
      </div>

      <form onSubmit={handlesubmit} className="space-y-4">
        
        {/* LeetCode Input */}
        <div className="group">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
            LeetCode
          </label>
          <div className="relative">
            <input
              type="text"
              name="leetcode"
              value={formData.leetcode}
              onChange={handlechange}
              placeholder="https://leetcode.com/..."
              className="w-full bg-slate-800 border border-slate-700 text-sm rounded-lg p-2.5 focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all placeholder-slate-600"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
            GitHub
          </label>
          <div className="relative">
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handlechange}
              placeholder="https://github.com/..."
              className="w-full bg-slate-800 border border-gray-400 text-sm rounded-lg p-2.5 focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all placeholder-slate-600"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
            LinkedIn
          </label>
          <div className="relative">
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handlechange}
              placeholder="https://linkedin.com/in/..."
              className="w-full bg-slate-800 border border-gray-400 text-sm rounded-lg p-2.5 focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-gray-500 hover:bg-gray-400 text-white font-medium py-2.5 rounded-lg transition-colors duration-200 active:scale-95 flex items-center justify-center gap-2"
        >
           {status === 'Saved!' ? '✅ Saved!' : 'Save Profiles'}
        </button>
      </form>
    </div>
  )
}
