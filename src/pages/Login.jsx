import LogSignHero from "../components/LogSignHero/LogSignHero";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { SliderSec } from "../components/SliderSec/SliderSec";

export default function Login() {
  return (
    <div>
      <LogSignHero></LogSignHero>
      <SectionTitle titlewhite={"Our"} titlegreen={"Testimonials"} filter={true} paragraph={"Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"}></SectionTitle>
      <SliderSec></SliderSec>
    </div>
  )
}
