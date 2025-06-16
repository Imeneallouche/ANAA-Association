import Hero from "../components/hero";
import Footer from "../components/footer";
import Header from "../components/header";
import Objectives from "../components/objectives";
import Feedback from "../components/feedback";
import Information from "../components/information";
import GaleryAccess from "../components/galerieHome";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header></Header>

      {/* Hero Section */}
      <Hero />

      {/* Objectives Section */}
      <Objectives></Objectives>

      {/* Information Section */}
      <Information></Information>

      {/* Customer Reviews Section */}
      <Feedback></Feedback>

      {/* Galery Access Section Section */}
      <GaleryAccess></GaleryAccess>

      <Footer></Footer>
    </div>
  );
};

export default Home;
