import Account from "@/components/Account";
import CallToAction from "@/components/CallToAction";
import ContactUs from "@/components/ContactUs";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import { InfiniteMovingCardsDemo } from "@/components/Revieeews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Feature />
      <Account />
      <CallToAction />
      <InfiniteMovingCardsDemo />
      <ContactUs />
    </main>
  );
}
