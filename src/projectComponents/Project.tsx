import styles from "../style";
import ProjectCentre from "./ProjectCentre";

const Project = () => {
  return (
    <>
      <div className={`bg-cyan-700 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="hangmanBackground">
            <p className={`pt-2 ${styles.flexCenter} ${styles.heading3}`}>
              Lets Play Hangman!!
            </p>
            <ProjectCentre />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
