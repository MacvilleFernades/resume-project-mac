import styles from "../style";
// import {macville } from "../assets";


const Intro = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-homeIndex-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Unlocking </span>potential, {" "}
            <span className="text-white">One Byte</span> at a Time 
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[90.8px] leading-[65px]">
            Hello!, I'm<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Macville</span>{" "}
          </h1>
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[58px] text-[42px] text-white ss:leading-[90.8px] leading-[65px] w-full">
          Engineeer
        </h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.
        </p>
      </div>

      <div className={`flex-1 flex-col justify-center items-center md:my-0 my-10 relative`}>
        {/* <img src={macville} alt="home" className="rounded-full w-[100%] h-[100%] md:w-[80%] relative z-[4]" /> */}
      </div>
    </section>
  );
};

export default Intro;