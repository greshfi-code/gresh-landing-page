import { Instagram, Twitter } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
        <div>© 2025 Gresh. All rights reserved.</div>

        <div className="flex items-center gap-6">
          <a href="instagram.com/usegresh" className="hover:text-[#0acf83] transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="x.com/usegresh" className="hover:text-[#0acf83] transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://www.linkedin.com/company/gresh-finance/" className="hover:text-[#0acf83] transition-colors">
            About us
          </a>
          <a href="#" className="hover:text-[#0acf83] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>);

}