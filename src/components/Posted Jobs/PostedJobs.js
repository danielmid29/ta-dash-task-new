import "./PostedJobs.css";
import python from "../../assets/python.png";
import java from "../../assets/java.png";
import angular from "../../assets/angular.png";
import uiux from "../../assets/ui-ux.png";
import arrow from "../../assets/up-arrow.png";
import { useState } from "react";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

const PostedJobs = () => {
  const [active, setActive] = useState("active");

  return (
    <div className="posted-jobs">
      <ComponentHeader text={"Posted Jobs"} />

      <div className="pj-tabs">
        <div
          className={`pj-tab ${active === "active" && "pj-tab-active"}`}
          onClick={() => setActive("active")}
        >
          Active Jobs
        </div>
        <div
          className={`pj-tab ${active === "inactive" && "pj-tab-active"}`}
          onClick={() => setActive("inactive")}
        >
          Inactive Jobs
        </div>
        <div
          className={`pj-tab ${active === "complete" && "pj-tab-active"} `}
          onClick={() => setActive("complete")}
        >
          Completed Jobs
        </div>
      </div>
      <div className="pj-jobs">
        <Jobs
          icon={python}
          text={"Python Developer"}
          color={"#0A66C2"}
          backgroundColor={"#D9E4EF"}
        />
        <Jobs
          icon={angular}
          text={"Angular Developer"}
          color={"white"}
          backgroundColor={"#73A1FB"}
        />
        <Jobs
          icon={java}
          text={"Java Developer"}
          color={"white"}
          backgroundColor={"#2F73A0"}
        />
        <Jobs
          icon={uiux}
          text={"UX|Ui Designer"}
          color={"white"}
          backgroundColor={"#0A66C2"}
        />
      </div>
    </div>
  );
};

export default PostedJobs;

const Jobs = ({ icon, text, color, backgroundColor }) => {
  return (
    <div className="pj-job">
      <div className="pj-job-header">
        <div className="pj-j-hl">
          <img src={icon} alt="Search" className="pj-job-icon" />
          <div>{text}</div>
        </div>
        <div>#001</div>
      </div>
      <div className="pj-j-content">
        <div className="pj-j-text">Senior Developers</div>
        <div
          className="pj-j-applicants"
          style={{ backgroundColor: backgroundColor, color: color }}
        >
          258
        </div>
        <div className="pj-j-text">Total Applicants</div>
      </div>
      <div className="pj-j-footer">
        <div className="pj-j-fl">
          <img src={arrow} alt="Arrow" className="pj-job-arrow" />
          <div className="pj-j-percent">28%</div>
          <div>vs Last Month</div>
        </div>
        <div>6 mins ago</div>
      </div>
    </div>
  );
};
