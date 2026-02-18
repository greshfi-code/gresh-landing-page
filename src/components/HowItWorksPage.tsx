import ReusableWorkCard from './ReusableWorkCard';
import setUp1 from '../assets/setUp1.png'
import setUp2 from '../assets/setUp2.png'
import setUp3 from '../assets/setUp3.png'
const cardDetails = [
{
  image: setUp1,
  title: 'Get started in\n minutes',
  description: 'Designed for freelancers, creators, and digital natives who pay online.',
  label: 'Quick signup with secure KYC\nEasy wallet funding\nCreate and manage cards instantly'
},
{
  image: setUp2,
  title: 'Fund your wallet\n with ease',
  description: 'Top up your wallet instantly with clear rates and no hidden charges. ',
  label: 'Instant wallet funding with transparent rates\nFair exchange, no hidden markups\nReal-time balance and transaction insights'
},
{
  image: setUp3,
  title: 'Get virtual cards\n instantly',
  description: 'Create and manage virtual cards for global and local online payments ',
  label: 'Create multiple virtual cards anytime\nUse cards globally for all online services\nFreeze, replace, or manage cards with full control'
}
]
export function HowItWorksPage() {
  return (
   
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#0d2f28] to-[#051a16] text-center px-4 ">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <h1 className=" mx-auto mb-6 text-4xl font-bold leading-tight text-white md:text-6xl  tracking-tight">
         No long talks! <br />  Get a card in minutes
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-400 md:text-xl">
          Get started with Gresh in three simple steps. Create your account, fund your wallet, and start spending globally.
        </p>
        <div className="mt-16  mx-auto grid gap-8 md:grid-cols-3">
          {cardDetails.map((card, index) => (
            <ReusableWorkCard key={index} image={card.image} title={card.title} description={card.description} label={card.label} />
          ))}
          </div>
      </section>

    
   
  );
}
