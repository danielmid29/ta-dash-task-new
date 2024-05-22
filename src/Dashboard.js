import HomePage from "./Pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import "react-dates/lib/css/_datepicker.css";
import "./Dashboard.css";
import dash from "./assets/dash.png";
import edit from "./assets/edit-nav.png";
import contact from "./assets/contact.png";
import contactS from "./assets/contact-search.png";
import job from "./assets/job.png";
import checklist from "./assets/checklist.png";
import hands from "./assets/hands.png";
import call from "./assets/call-centre.png";
import mixer from "./assets/mixer.png";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div>
        <Header />
        <div className="dash-main-container">
          <LeftNav />
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

const LeftNav = () => {
  return (
    <div className="left-nav">
      <img src={dash} className="nav-icon" />
      <img src={edit} className="nav-icon" />
      <img src={contact} className="nav-icon" />
      <img src={contactS} className="nav-icon" />
      <img src={job} className="nav-icon" />
      <img src={checklist} className="nav-icon" />
      <img src={hands} className="nav-icon" />
      <img src={call} className="nav-icon" />
      <img src={mixer} className="nav-icon" />
    </div>
  );
};
