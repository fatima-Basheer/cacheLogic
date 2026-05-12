import "./index.css"
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import StepsPage from "./pages/StepsPage";
import TrustedPage from "./pages/TrustedPage";
import ResultPage from "./pages/ResultPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import TopicsPage from "./pages/TopicsPage";
import FooterPage from "./pages/FooterPage";
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
