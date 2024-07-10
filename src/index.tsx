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
import Product from "./components/FakeStore/Product/Product";
import DummyStore from "./components/DummyStore/DummyStore";
import DummyProduct from "./components/DummyStore/DummyProduct";
import { UserProvider } from "./components/userContext/UserContext";
import Home from "./components/home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserProvider>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/LandmarkGallery" element={<LandmarkGallery />} />
        <Route path="/CatFacts" element={<CatFacts/>} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="Form" element={<MyForm/>} />
        <Route path="KnowGender" element={<KnowGender/>} />
        <Route path="ImageCarousel" element={<ImageCarousel/>} />
        <Route path="FakeStore" element={<FakeStore/>} />
        <Route path="FakeStore/:id" element={<Product/>} />
        <Route path="*" element={<h1>Error 404</h1>} />
        <Route path="DummyStore" element={<DummyStore/>} />
        <Route path="DummyStore/:id" element={<DummyProduct/>} />
      </Route>
    </Routes>
  </HashRouter>
  </UserProvider>
);





