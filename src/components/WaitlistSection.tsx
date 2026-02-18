import React, { useState } from 'react';
export function WaitlistSection() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Send email
      const sendResponse = await fetch('https://gresh-email.vercel.app/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName })
      });

      // Notify
      const notifyResponse = await fetch('https://gresh-email.vercel.app/api/notify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (sendResponse.ok && notifyResponse.ok) {
        setMessage('Successfully joined the waitlist!');
        setFirstName('');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto bg-[#f8fafc] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0d2f28] mb-2">
            Be among the first to try Gresh
          </h2>
          <p className="text-[#636363] text-sm md:text-base md:text-nowrap">
            Join the waitlist to get early access when we launch.
          </p>
        </div>

        <div className="flex-1 w-full max-w-md">
          <form onSubmit={handleSubmit} className='flex flex-col gap-[20px]'>

          <div className="flex gap-2 bg-[#F7F7F7] p-1.5 rounded-full border border-gray-200  focus-within:ring-2 focus-within:ring-[#0acf83] transition-shadow">
            <input
              type="text"
              placeholder="Your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-800 placeholder:text-[#636363] text-sm"
              required />

            
          </div>
           <div className="flex gap-2 bg-[#F7F7F7] p-1.5 rounded-full border border-gray-200  focus-within:ring-2 focus-within:ring-[#0acf83] transition-shadow">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-800 placeholder:text-[#636363] text-sm"
              required />

            
          </div>
          <div className=' flex  justify-end'>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-[#0d2f28] text-white text-sm font-bold w-full max-w-[158px]  rounded-full hover:bg-[#1a4f42] transition-colors disabled:opacity-50">

              {isSubmitting ? 'Submitting...' : 'Sign up'}
            </button>
          </div>
          {message && <p className="text-sm text-center text-[#0d2f28]">{message}</p>}
          </form>
        </div>
      </div>
    </section>);

}