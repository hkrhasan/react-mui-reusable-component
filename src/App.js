//Library import statements...
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Button } from "./Pages/button";
import { Inputbox } from "./Pages/inputbox";
import { Modal } from "./Pages/modal";
import { Selectbox } from "./Pages/selectbox";
import { TypographyCustom } from "./Pages/typography";
import { Uploadbox } from "./Pages/uploadbox";
import { Home } from "./Pages/home";
import { Example } from "./Pages/Example";
import { Otp } from "./Pages/otp";
import { Tabs } from "./Pages/tabs";
import LoaderLayout from "./Pages/loaderLayout";
import Snakebar from "./Pages/snakebar";
import DatePicker from "./Pages/datepicker";
import CheckBoxes from "./Pages/checkboxes";
import CheckBoxAsButton from "./Pages/checkboxAsButton";
import SliderPage from "./Pages/slider";
import RadioButtonPage from "./Pages/radioButtons";
import InlineValueEdit from "./Pages/nameInline";
import QuantityPage from "./Pages/quantity";
import HeaderExamples from "./Pages/headerExamples";
import GoogleMap from "./Pages/googleMap";
import SocialIconsPage from "./Pages/socialIcons";
import OnlineOfflinePage from "./Pages/onlineOffline";
import ImageCardViewPage from "./Pages/imageCardView";
import CustomizeRadioButtonPage from "./Pages/Customize/customizeRadioButtons";
import { Accordions } from "./Pages/accordion";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typography" element={<TypographyCustom />} />
        <Route path="/button" element={<Button />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/inputbox" element={<Inputbox />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/selectbox" element={<Selectbox />} />
        <Route path="/uploadbox" element={<Uploadbox />} />
        <Route path="/example" element={<Example />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/loader" element={<LoaderLayout />} />
        <Route path="/snakebar" element={<Snakebar />} />

        {/* hkrhasan */}
        <Route path="/accordian" element={<Accordions />} />
        <Route path="/datepicker" element={<DatePicker />} />
        <Route path="/checkboxes" element={<CheckBoxes />} />
        <Route path="/checkbox-as-button" element={<CheckBoxAsButton />} />
        <Route path="/slider" element={<SliderPage />} />
        <Route path="/radio-buttons" element={<RadioButtonPage />} />
        <Route
          path="/customizableRadioButtons"
          element={<CustomizeRadioButtonPage />}
        />
        <Route path="/inline-edit" element={<InlineValueEdit />} />
        <Route path="/quantity" element={<QuantityPage />} />
        <Route path="/headers" element={<HeaderExamples />} />
        <Route path="/map" element={<GoogleMap />} />
        <Route path="/social-icons" element={<SocialIconsPage />} />
        <Route path="/offline-online" element={<OnlineOfflinePage />} />
        <Route path="/image-card-view" element={<ImageCardViewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
