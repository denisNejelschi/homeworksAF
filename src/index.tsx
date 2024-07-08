import ReactDOM from "react-dom/client";
import "./index.css";
import { Form, HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandmarkGallery from "./components/cardOnTs/LandmarkGallery";
import LoginForm from "./components/loginForm/LoginForm";
import CatFacts from "./components/catFacts/CatFacts";
import Feedback from "./components/feedback/Feedback";
import MyForm from "./components/myForm/MyForm";
import KnowGender from "./components/know gender/KnowGender";
import ImageCarousel from "./components/Carousel/ImageCorousel";
import FakeStore from "./components/FakeStore/FakeStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element="homepage" />
        <Route path="/LandmarkGallery" element={<LandmarkGallery />} />
        <Route path="/CatFacts" element={<CatFacts/>} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="Form" element={<MyForm/>} />
        <Route path="KnowGender" element={<KnowGender/>} />
        <Route path="ImageCarousel" element={<ImageCarousel/>} />
        <Route path="FakeStore" element={<FakeStore/>} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);





