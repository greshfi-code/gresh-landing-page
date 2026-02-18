import React from 'react';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import setup1 from '../assets/setup1.png';
import setup2 from '../assets/setup2.png';
import setup3 from '../assets/setup3.png';
import logo from '../assets/GreshLogo.png';
const infoGrid = [
  {
    image: setup1,
    title: 'Quick sign-up with secure KYC',
    description: 'Your journey to financial freedom starts here. Join Africa\'s best freelancers and digital hustlers with a quick, secure process.',
    info: [
      'No delays, quick action',
      'Tailored for your every need',
         'Tailored for your every need'
    ]
  },
  {
    image: setup2,
    title: 'Fund Your Wallet with Ease.',
    description: 'Keep your money moving with instant top-ups tailored for your needs. Join our waitlist for the September 2025 beta!',
     info: [
      'No delays, quick action',
      'Tailored for your every need',
         'Tailored for your every need'
    ]
  },
  {
    image: setup3,
    title: 'Get Your Virtual Card Instantly.',
    description: 'Unlock global and local payments with a tap. Be ready for our beta launch in September 2025!',
     info: [
      'No delays, quick action',
      'Tailored for your every need',
         'Tailored for your every need'
    ]
  }
]
export function AccountSetupSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentItem = infoGrid[currentIndex];

  return (
    <section className="py-0 bg-[#1a1a1a] text-white overflow-hidden flex items-end min-h-screen">

      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end pb-0">
        {/* Phone Mockup - Left Side */}
        <img src={currentItem.image} alt={currentItem.title} className="w-full max-w-md mx-auto object-contain" />

        {/* Content - Right Side */}
        <div className='pb-10'>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <img src={logo} alt='logo' className='w-6 h-6' />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {currentItem.title}
          </h2>

          <p className="text-gray-400 mb-8 max-w-md">
            {currentItem.description}
          </p>

          <ul className="space-y-4 mb-10">
            {currentItem.info.map((item, i) =>
            <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#33ff66]" />
                <span className="text-gray-300">{item}</span>
              </li>
            )}
          </ul>

          <div className="flex gap-4">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + infoGrid.length) % infoGrid.length)}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % infoGrid.length)}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>);

}