import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import "./index.css";
import Policies from "./pages/Policies.js";
import CodeOfConduct from "./components/codeofconduct/CodeOfConduct.js";
import PrivacyPolicy from "./components/privacypolicy/PrivacyPolicy.js";
import TermsOfService from "./components/termsofservice/TermsOfService.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Setup nested routing for tabs */}
        <Route path="/legal" element={<Policies />}>
          <Route path="code-of-conduct" element={<CodeOfConduct />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route index element={<CodeOfConduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
