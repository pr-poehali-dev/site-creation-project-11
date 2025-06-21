import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import Reviews from "@/components/Reviews";
import PaymentInfo from "@/components/PaymentInfo";
import CatalogCTA from "@/components/CatalogCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PopularProducts />
      <Reviews />
      <PaymentInfo />
      <CatalogCTA />
    </div>
  );
};

export default Index;
