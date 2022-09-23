import { SubscribeModal } from "../../layout/Subscribe/Subscribe";
import { SubscribeSection, HeroSection } from "./Hero";

export const Main = () => {
  return (
    <main>
      <HeroSection />
      <SubscribeSection />
      <SubscribeModal />
    </main>
  );
};
