import iphone from '../assets/iphone.png';
import { BrandPill } from './ui/BrandPills'
import {
  Slack,
  Command,
  Figma,
  Chrome,
  ShoppingBag,
  CreditCard,
  PenTool,
} from 'lucide-react'
export function HeroSection() {
  return (
    <section className="relative pt-32 pb-0 overflow-hidden bg-gradient-to-b from-[#0d2f28] to-[#051a16] min-h-screen flex flex-col items-center text-center px-4">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Announcement Badge */}
      {/* <div className="inline-flex items-center gap-2 px-1 py-1 pr-3 mb-8 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
        <span className="px-2 py-0.5 text-xs font-bold text-[#0d2f28] bg-[#33ff66] rounded-full">
          Release
        </span>
        <span className="text-sm text-gray-300">
          Our beta launch is set for September 2025!
        </span>
        <ArrowRight className="w-4 h-4 text-[#33ff66]" />
      </div> */}

      {/* Main Content */}
      <h3 className="max-w-4xl mx-auto mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-[56px] tracking-tight">
        One wallet. Limitless virtual cards.

      </h3>

      <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-400 md:text-xl">
        Create multiple virtual cards, fund them easily, and pay for global services without unnecessary charges or restrictions.
      </p>

      <button className="px-8 py-4 text-base font-bold text-[#0d2f28] bg-[#33ff66] rounded-full hover:scale-105 transition-transform duration-200 mb-8 shadow-[0_0_20px_rgba(51,255,102,0.3)]">
        Join the Waitlist for Early Access
      </button>

      {/* Phone Mockup Area */}
      <div className="relative w-full mx-auto flex-1 flex items-end justify-center">
        {/* Phone */}
        <div className="relative z-20 w-full">
          <img src={iphone} alt="iPhone Mockup" className="w-full max-w-[400px] mx-auto object-contain" />
        </div>

        {/* Floating Pills */}
        <div className="absolute inset-0 w-full pointer-events-none">
          {/* Bottom Left Cluster */}
          <BrandPill
            icon={Slack}
            label="Slack"
            className="bottom-32 left-6 -rotate-12"
            style={{
              animation: 'float 6s ease-in-out infinite',
            }}
          />
          <BrandPill
            icon={Command}
            label="Notion"
            className="bottom-16 left-28 rotate-6"
            style={{
              animation: 'float 7s ease-in-out infinite 1s',
            }}
          />
          <BrandPill
            icon={Chrome}
            label="Google Workspace"
            className="bottom-2 left-14 -rotate-3"
            style={{
              animation: 'float 8s ease-in-out infinite 2s',
            }}
          />
          <BrandPill
            icon={PenTool}
            label="Adobe"
            className="bottom-40 left-36 rotate-12"
            style={{
              animation: 'float 5s ease-in-out infinite 0.5s',
            }}
          />
          <BrandPill
            icon={Figma}
            label="Figma"
            className="bottom-24 left-20 rotate-6"
            style={{
              animation: 'float 6s ease-in-out infinite 1.2s',
            }}
          />

          {/* Bottom Right Cluster */}
          <BrandPill
            icon={Slack}
            label="Slack"
            className="bottom-36 right-8 rotate-12"
            style={{
              animation: 'float 6s ease-in-out infinite 1.5s',
            }}
          />
          <BrandPill
            icon={Command}
            label="Notion"
            className="bottom-20 right-24 -rotate-6"
            style={{
              animation: 'float 7s ease-in-out infinite 0.5s',
            }}
          />
          <BrandPill
            icon={ShoppingBag}
            label="Amazon"
            className="bottom-4 right-4 rotate-3"
            style={{
              animation: 'float 8s ease-in-out infinite 2.5s',
            }}
          />
          <BrandPill
            icon={CreditCard}
            label="Nike"
            className="bottom-28 right-12 -rotate-12"
            style={{
              animation: 'float 5s ease-in-out infinite 1s',
            }}
          />
          <BrandPill
            icon={Figma}
            label="Adidas"
            className="bottom-12 right-24 -rotate-6"
            style={{
              animation: 'float 6s ease-in-out infinite 1.8s',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-15px) rotate(var(--tw-rotate)); }
        }
      `}</style>
    </section>);

}
