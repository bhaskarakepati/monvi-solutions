import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { WhoWeAre } from "./components/WhoWeAre";
import { Services } from "./components/Services";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/home" component={Home} />
        <Route path="/whoweare" component={WhoWeAre} />
        <Route path="/services" component={Services} />
      </Container>
    </Router>
  );
};

export default App;
