import Header from "@/components/Layout/Header";
import Hero from "@/components/Home/HeroSection";
import TrustStrip from "@/components/Home/TrustIndicators";
import CategoryMosaic from "@/components/Home/CategoryGrid";
import Promo from "@/components/Home/FeaturedPromo";
import VideoScroll from "@/components/Home/VideoShowcase";
import Collection from "@/components/Home/CollectionPreview";
import Journal from "@/components/Home/JournalHighlights";
import Handpicked from "@/components/Home/CuratedSelections";
import BehindTheSeams from "@/components/Home/BehindTheSeams";
import FAQ from "@/components/Home/FAQSection";
import Newsletter from "@/components/Home/NewsletterSignup";
import Footer from "@/components/Layout/Footer";
export default function Home() {
  return (<main className="home-page-root">
    <Header variant="home" />
    <Hero />
    <TrustStrip />
    <CategoryMosaic />
    <Collection />
    <VideoScroll />
    <Promo />
    <Handpicked />
    <BehindTheSeams />
    <Journal />
    <FAQ />
    <Newsletter />
    <Footer />
  </main>);
}
