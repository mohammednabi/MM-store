import styles from "./page.module.css";

import Section1 from "./components/sections/Section1";
import BrandsSection from "./components/sections/BrandsSection";
import FastShippingSection from "./components/sections/FastShippingSection";
import BlackFriday from "./components/sections/BlackFriday";
import SomeProductsImages from "./components/sections/SomeProductsImages";

export default function Home() {
  return (
    <>
      <Section1 />
      <BrandsSection />
      <FastShippingSection />
      <BlackFriday />
      <SomeProductsImages />
    </>
  );
}
