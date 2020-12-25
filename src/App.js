import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { WhoWeAre } from "./components/WhoWeAre";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <br />
      <Services />
      <WhoWeAre />
      <br />
      <Footer />
    </>
  );
};

export default App;
