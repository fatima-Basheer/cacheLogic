import "./App.css";
<<<<<<< HEAD
import Blog from "./components/Blog";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Steps from "./components/Steps";
import TrustedPage from "./components/TrustedPage";
import Result from "./components/Result";
import GetInTouch from "./components/GetInTouch";
import Topics from "./components/Topics";
import Footer from "./components/Footer";
=======
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import StepsPage from "./pages/StepsPage";
import TrustedPage from "./pages/TrustedPage";
import ResultPage from "./pages/ResultPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import TopicsPage from "./pages/TopicsPage";
import FooterPage from "./pages/FooterPage";
>>>>>>> 47230a7 (update UI)
function App() {
  return (
    <>
      <HomePage />
      <TrustedPage />
      <ServicesPage />
      <BlogPage />
      <StepsPage />
      <ResultPage/>

      <TopicsPage />
      <GetInTouchPage/>
      <FooterPage />
    </>
  );
}

export default App;
