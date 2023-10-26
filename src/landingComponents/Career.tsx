import { features } from "../constants";
import styles, { layout } from "../style";

type appProps = {
  year: string,
  content: string,
  icon:string,
  title: string,
  index: number
};

const CareerCard = ({ icon, title, content, year, index }:appProps) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] flex items-center justify-center  rounded-full ${styles.flexStart}`}
    >
      {/* <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" /> */}
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {year}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Career = () => (
  <section id="info" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Something about, Me</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Highly skilled Computer Science Indiviual. Expertise in front-end back-end technologies, showcasing versatility in creating user-friendly and efficient applicatons.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <CareerCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Career;
