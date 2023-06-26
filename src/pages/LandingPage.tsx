import AboutSlide from "../components/AboutSlide";
import Header from "../components/Header";
import HeroHello from "../components/HeroHello";
import Reachout from "../components/Reachout";
import TechSlide from "../components/TechSlide";
export default function LandingPage(){
    return(
        <>
            <HeroHello />
                <Header />
            <AboutSlide />
            <TechSlide />
            <Reachout />
        </>
    )
}