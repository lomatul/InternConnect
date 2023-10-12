import { stats } from "../index";
import styles from "./stat.css"; 

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className={`${styles.heading2}`}>
          {stat.value}
        </h4>
        <p className={`${styles.statparagraph} text-gradient uppercase ml-3`}>
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
