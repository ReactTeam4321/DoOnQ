import Hero from "../components/Hero";
import Outlook from "../components/Outlet";
import TrustedCompanies from "../components/TrustedCompanies";
import Features from "../components/features";
import Footer from "../components/footer";
import Counters from "../components/counters";
function Home() {
    return (
        <>
            <Hero />
            <TrustedCompanies />
            <Features />
            <Outlook/>
            <Counters />
            <Footer />
        </>
    );
}

export default Home;
