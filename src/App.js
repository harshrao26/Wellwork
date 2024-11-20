import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactNav from "./Components/smallcompo/ContactNav";
import Navbar from "./Components/smallcompo/Navbar";
import About from "./Components/About/About";
import Footer from "./Components/smallcompo/Footer";
import Workspace from "./Components/workspace/Workspace";
import WhyAltis from "./Components/whyaltis/WhyAltis";
import Locations from "./Components/Locations/Locations";
import Location1 from "./Components/Location1/Location1";
import EventSpace from "./Components/EventSpace/EventSpace";
import Careers from "./Components/Careers/Careers";
import Workspace1 from "./Components/workspace1/WorkSpace";
import MeetingRooms from "./Components/workspace1/MeetingRooms";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/Terms/Terms";
import BookATour from "./Components/smallcompo/BookATour";
import Policies from "./Components/Privacy/Policies";
import EqualOpportunity from "./Components/Privacy/EqualOpportunity";
import StatementOfCommitment from "./Components/Privacy/StatementOfCommitment";
import CookiePolicy from "./Components/Privacy/CookiePolicy";
import MyState from "./context/data/myState";
import RefundPrivacy from "./Components/Privacy/RefundPolicies";

function App() {
  return (
    <MyState>
      <div style={{ overflow: "hidden" }}>
        <BrowserRouter>
          <ContactNav />
          <Navbar />
          <BookATour />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/workspaces" element={<Workspace />} />
            <Route path="/why-altis" element={<WhyAltis />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/event-space" element={<EventSpace />} />
            <Route path="/locations/hyderabad/:name" element={<Location1 />} />
            <Route path="/location2" element={<Locations />} />
            <Route path="/:id" element={<Workspace1 />} />
            <Route path="/meeting-rooms" element={<MeetingRooms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/refund-policies" element={<RefundPrivacy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route
              path="/statement-Of-commitment"
              element={<StatementOfCommitment />}
            />
            <Route
              path="/equal-opportunity-statement"
              element={<EqualOpportunity />}
            />
            <Route path="/term-and-conditions" element={<Terms />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </MyState>
  );
}

export default App;
