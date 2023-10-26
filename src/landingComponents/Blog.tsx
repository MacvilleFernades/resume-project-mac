import { feedback } from "../constants";
import styles from "../style";
import BlogCard from "./BlogCard";

const Blog = () => (
  <section
    id="blog"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-1 relative z-[1]">
      <h2 className={styles.heading2}>
        Blog!! <br className="sm:block hidden" />
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-center max-w-[450px]`}>
          “Every programmer is an author.” - Sercan Leylek
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <BlogCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Blog;
