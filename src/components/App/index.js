import { BrowserRouter} from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./style.css";
import { Routes } from "../Routes";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="container">
          <Routes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
