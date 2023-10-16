import { stats } from "../../index";
import "./stat.css"
import CountUp from "react-countup";

const Stats = () => (
  <div className="stats">
    <div className="stat">
      <span>
        <CountUp start={200} end ={300} duration={8}/>
     <span>+</span>
     </span>
      <span>  Students </span>
    </div>

    <div className="stat">
      <span>
        <CountUp start={10} end ={100} duration={8}/>
     <span>+</span>
     </span>
      <span>  Comapanies </span>
    </div>


    <div className="stat">
      <span>
        <CountUp start={100} end ={180} duration={8}/>
     <span>+</span>
     </span>
      <span>  Interns </span>
    </div>
    </div>
);

export default Stats;
