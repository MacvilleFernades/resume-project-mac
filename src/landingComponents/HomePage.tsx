import styles from "../style";

import { Intro, Blog, Stats, Career } from ".";

const HomePage = () => {
  return (
    <>
      <div className={`bg-cyan-700 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Intro></Intro>
        </div>
      </div>
      <div className={`bg-cyan-800 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Career />
        </div>
      </div>

      <div className={`bg-cyan-700 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Blog />
          <Stats />
        </div>
      </div>
    </>
  );
};

export default HomePage;
