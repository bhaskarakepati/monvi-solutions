import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { WhoWeAre } from "./components/WhoWeAre";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Values } from "./components/Values";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <WhoWeAre />
      <Values />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
