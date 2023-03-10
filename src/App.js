import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kontakty from "./pages/Kontakty";
import Error from "./pages/Error";
// import Reference from "./pages/Reference";
import Header from "./components/Header";
import { Redirect } from "react-router-dom";
import Telo from "./components/Telo";
import Reference from "./pages/Reference";
import Nabizime from "./pages/Nabizime";
import Poptavka from "./pages/Poptavka";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Redirect exact from="/" to="/home" /> nefuguje */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="Kontakty" element={<Kontakty />}></Route>
          <Route path="Nabizime" element={<Nabizime />}></Route>
          <Route path="Poptavka" element={<Poptavka />}></Route>
          <Route path="Reference" element={<Reference />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
  const karty = [
    // Karta kamery
    {
      id: 1,
      image: "./images/Logo.png",
      title: "Kamery",
      text: "Loremrjnvsjdsjhs jsd cdsjc CH DC JK ccd K",
    },
    // karta anteny
    {
      id: 2,
      image: "./images/Logo.png",
      title: "Anteny",
      text: "antena jak svine",
    },
    // karta realizace
    {
      id: 3,
      image: "./images/Logo.png",
      title: "Realizace",
      text: "sxjac eak cajc eac ic eahjec ajchaksjndaksdnadnadaldsnaj",
    },
  ];

  return (
    <>
      {/* <Header /> */}

      <div className="kartyVRade">
        {/* <Telo
          image={karty[0].image}
          title={karty[0].title}
          text={karty[0].text}
        />

        <Telo
          image={karty[1].image}
          title={karty[1].title}
          text={karty[1].text}
        />

        <Telo
          image={karty[2].image}
          title={karty[2].title}
          text={karty[2].text}
        /> */}
      </div>
    </>
  );
};

export default App;
