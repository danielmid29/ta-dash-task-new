import "./TodayInterview.css";
import options from "../../assets/options.png";
import user1 from "../../assets/u1.jpg";
import calender from "../../assets/calender.png";
import clock from "../../assets/clock.png";

const TodayInterview = () => {
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
  console.log(`ic-container ${isFirefox && "firefox"}`);
  return (
    <div className="today-interview">
      <div className="ti-head">
        <div>Today Interviews Meetings Info</div>
        <div className="ti-button">
          <img src={options} alt="options" className="ti-options" />
        </div>
      </div>
      <div className={`ic-container ${isFirefox && "firefox"}`}>
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
      </div>
    </div>
  );
};

export default TodayInterview;

const InterviewCard = () => {
  return (
    <div className="ic">
      <div className="ic-left">
        <div className="ic-l-t">
          <img src={user1} alt="user1" className="ic-pic" />
          <div className="ic-l-t-text">John Smith</div>
          <div>Senior Python Developer</div>
        </div>
        <div className="ic-l-d">
          <div className="ic-l-d-c">
            <img src={calender} alt="calender" className="ic-icon" />
            <div>19th Feb 2024</div>
          </div>
          <div className="ic-l-d-c">
            <img src={clock} alt="clock" className="ic-icon" />
            <div>10.30 A.M</div>
          </div>
        </div>
      </div>
      <div className="ic-right">
        <div>
          <div className="ic-r-row">
            <div className="ic-r-row-s ic-r-row-l">
              <div className="ic-r-row-left">1st Level:</div>
              <span className="ic-r-row-right">7/10</span>
            </div>
            <div className="ic-r-row-s">
              <div className="ic-r-row-left"> Interviewer:</div>
              <div className="ic-r-row-right">Stella</div>
            </div>
          </div>
          <div className="ic-r-row">
            <div className="ic-r-row-s ic-r-row-l">
              <div className="ic-r-row-left">2nd Level:</div>
              <span className="ic-r-row-right">6/10</span>
            </div>
            <div className="ic-r-row-s">
              <div className="ic-r-row-left">Interviewer:</div>
              <span className="ic-r-row-right">Smith</span>
            </div>
          </div>
          <div className="ic-r-row">
            <div className="ic-r-row-s ic-r-row-l">
              <div className="ic-r-row-left"> 3rd Level:</div>
              <span className="ic-r-row-right">Waiting</span>
            </div>
            <div className="ic-r-row-s">
              <div className="ic-r-row-left"> Interviewer:</div>
              <span className="ic-r-row-right">Stephan</span>
            </div>
          </div>
          <div className="ic-r-row">
            <div className="ic-r-row-s ic-r-row-l">
              <div className="ic-r-row-left">Meet Via:</div>
              <span className="ic-r-row-right">G-Meet</span>
            </div>
            <div className="ic-r-row-s">
              <div className="ic-r-row-left"> Attendees:</div>
              <span className="ic-r-row-right">Johnson</span>
            </div>
          </div>
        </div>
        <div className="ic-buttons-container">
          <button className="ic-button-l">Reschedule Meeting</button>
          <button className="ic-button-r">Join Meeting</button>
        </div>
      </div>
    </div>
  );
};
