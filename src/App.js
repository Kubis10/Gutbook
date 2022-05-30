import { render } from "react-dom";
import { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./components/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";

const App = () => {
  const theme = useState("dark");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/book/:id" element={<Details />} />
            <Route path="/books" element={<Books />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
