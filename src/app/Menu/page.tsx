
import Dessert from "@/Components/Menu/Dessert";
import Drink from "@/Components/Menu/Drinks";
import Experience from "@/Components/Menu/Experience";
import MainCours from "@/Components/Menu/MainCourse";
import StartMenu from "@/Components/Menu/StartMenu";
import PartnersAndClients from "@/Components/Menu/PartnerClient";
import Hero from "@/Components/Menu/MenuHero";

export default function Menu() {
  return (
<div>
  <Hero/>
  <StartMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
  );
}