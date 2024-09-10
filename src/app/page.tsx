
import Herosection from '@/components/Herosection'

import Feature from '@/components/Feature'
import Whychoseus from '@/components/Whychoseus';
import TestmonialCards from '@/components/TestmonialCards';
import UpcomingWaviners from '@/components/UpcomingWaviners';
import Instractors from '@/components/Instractors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <Herosection />
    <Feature />
    <Whychoseus />
    <TestmonialCards />
    <UpcomingWaviners />
    <Instractors />
    <Footer />
    </div>
    </>
  );
}
