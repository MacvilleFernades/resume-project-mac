import styles from "./style";
import Navbar from "./headerFooter/Navbar";
import Footer from "./headerFooter/Footer";
import HomePage from "./landingComponents/HomePage";
import Project from "./projectComponents/Project";
import MainHobbies from "./hobbiesComponent/MainHobbies";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-cyan-800 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/hobbies" element={<MainHobbies />} />
      </Routes>

      <div className={`bg-cyan-900 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
