import { Routes, Route } from "react-router-dom";

import { Main } from "./modules/home/Main/Main";
import { Header } from "./modules/layout/Header/Header";
import { Footer } from "./modules/layout/Footer/Footer";
import { Courses } from "./modules/courses/Courses";
import { About } from "./modules/about/About";
import { Teachers } from "./modules/teachers/Teachers";
import { Apply } from "./modules/apply/Apply";
import { Course } from "./modules/courses/pages/Course";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Course />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/apply/:id" element={<Apply />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
