import "./App.css";
import Blog from "./components/Blog";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Steps from "./components/Steps";
import TrustedPage from "./components/TrustedPage";
import Result from "./components/Result";
import GetInTouch from "./components/GetInTouch";
import Topics from "./components/Topics";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <HomePage />
      <TrustedPage />
      <Services />
      <Blog />
      <Steps />
      <Result />

      <Topics />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
