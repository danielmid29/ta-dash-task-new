import CandidateStatus from "../../components/Candidate/Candidate";
import PostedJobs from "../../components/Posted Jobs/PostedJobs";
import TodayInterview from "../../components/TodayInterview/TodayInterview";
import "./Homepage.css";
import MyDateRangePicker from "./MyDatePicker";
import user1 from "../../assets/user-1 5.png";
import user2 from "../../assets/user-3 1.png";
import user3 from "../../assets/user-2 1.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image4.png";
import image3 from "../../assets/image3.png";

import assignment from "../../assets/assignment.png";
import lady from "../../assets/lady.png";
import GradientBarLineChart from "../../components/GradientBarLineChart";

const HomePage = () => {
  return (
    <div className="sub-container">
      <div className="title-card">
        <div>
          <div className="title">HR Employee</div>
          <div className="descriptions">
            Enjoy your selecting potential candidates Tracking and Management
            System.
          </div>
        </div>
      </div>
      <div className="top-container">
        <Chart />
        <NewAssessments />
      </div>
      <div className="main-container">
        <div className="mc-left">
          <TodayInterview />
          <PostedJobs />
          <CandidateStatus />
        </div>
        <div className="mc-right">
          <div className="date-picker">
            <MyDateRangePicker />
          </div>
          <Upcoming />
          <Activity />
          <HiredCandidate />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const Upcoming = () => {
  return (
    <div className="upcoming">
      <div className="upcoming-header">
        <div>Upcomings</div>
        <div className="upc-view">View All</div>
      </div>
      <UpcComponent
        color={"#0B74AD"}
        backgroundColor={"#0B74AD15"}
        role={"Designer"}
        name={"Stella"}
      />
      <UpcComponent
        color={"#091316"}
        backgroundColor={"#C0C1C1"}
        role={"PMO"}
        name={"Stephan"}
      />
      <UpcComponent
        color={"#091316"}
        backgroundColor={"#C0C1C1"}
        role={"Admin"}
        name={"Stella"}
      />
    </div>
  );
};

const UpcComponent = ({ color, backgroundColor, role, name }) => {
  return (
    <div className="upc-component">
      <div
        className="upc-date"
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        <div>07 </div>
        <div>Feb</div>
      </div>
      <div className="upc-content">
        <div style={{ fontWeight: 500 }}>Interview with {role}</div>
        <div>
          Created by <span> {name}</span>
        </div>
        <div>10 A.M to 11 A.M</div>
      </div>
      <button className="upc-details">Details</button>
    </div>
  );
};

const Activity = () => {
  return (
    <div className="upcoming">
      <div className="upcoming-header">
        <div>Activity</div>
        <div className="upc-view">View All</div>
      </div>
      <ActComponent user={user1} role={"Designer"} name={"Stella"} />
      <ActComponent user={user2} role={"PMO"} name={"Stephan"} />
      <ActComponent user={user3} role={"Admin"} name={"Stella"} />
    </div>
  );
};

const ActComponent = ({ user, role, name }) => {
  return (
    <div className="act-component">
      <img src={user} alt="user" className="act-user" />

      <div className="upc-content">
        <div style={{ fontWeight: 500 }}>
          {name} <span>[{role}]</span>
        </div>
        <div>Interview with Stella</div>
        <div style={{ fontSize: "10px" }}>15 Minutes ago</div>
      </div>
    </div>
  );
};

const HiredCandidate = () => {
  return (
    <div className="upcoming">
      <div className="upcoming-header">
        <div>Hiring Candidates</div>
        <div className="upc-view">View All</div>
      </div>
      <HCComponent user={image1} role={"Designer"} name={"Stella"} />
      <HCComponent user={image2} role={"PMO"} name={"Stephan"} />
      <HCComponent user={image3} role={"Admin"} name={"Stella"} />
    </div>
  );
};

const HCComponent = ({ user, role, name }) => {
  return (
    <div className="act-component">
      <img src={user} alt="user" className="act-user" />

      <div className="upc-content">
        <div style={{ fontWeight: 500 }}>{name}</div>
        <div>{role}</div>
        <div style={{ fontSize: "10px" }}>Hired by: Stella</div>
      </div>

      <button className="upc-details act-details">Details</button>
    </div>
  );
};

const Chart = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="chart-main-container">
      <div className="chart-header">
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div className="chart-title">Application's Info</div>
          <div className="chart-legends">
            <div className="recieved-legend" />
            <div>Recieved</div>
            <div className="processed-legend" />
            <div>Processed</div>
          </div>
        </div>
        <select className="chart-month">
          <option value={"Month"} className="chart-option">
            Month
          </option>
          {months.map((value) => (
            <option value={value} className="chart-option">
              {value}
            </option>
          ))}
        </select>
      </div>
      <GradientBarLineChart />
    </div>
  );
};

const NewAssessments = () => {
  return (
    <div className="new-assignment">
      <div className="na-l">
        <img src={assignment} alt="Assignments" className="na-assignment" />
        <div className="na-count">0033</div>
        <div className="na-title">New Assignment's</div>
      </div>
      <div className="na-r">
        <div className="na-lady-1">
          <img src={lady} alt="Invigilator" />
        </div>
        <div className="na-lady-2">
          <img src={lady} alt="Invigilator" />
        </div>
        <button className="na-view-details">VIEW DETAILS</button>
      </div>
    </div>
  );
};
