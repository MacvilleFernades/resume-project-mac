import styles from "../style";
import { data } from "./hobbies.ts";

const MainHobbies = () => {
  return (
    <>
      <div className={`bg-cyan-700 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-wrap sm:justify-start justify-center w-full hobbie-container relative z-[1]">
            {data.map((item) => (
              <div className="flex justify-between flex-col px-10 py-2 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 hobbie-card ">
                <a href="#">
                  <img className="rounded-t-lg" src={item.src} alt="" />
                </a>
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                  {item.hobbie_name}
                </h4>
                <p className="font-poppins font-normal text-[15px] leading-[27.4px] text-white my-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHobbies;
