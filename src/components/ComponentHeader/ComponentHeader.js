import search from "../../assets/search.png";
import filter from "../../assets/filter.png";

const ComponentHeader = ({ text }) => {
  return (
    <div className="pj-header">
      <div className="pj-h-c">
        <div className="pj-title">{text}</div>
        <div className="pj-view">View all</div>
      </div>
      <div className="pj-h-c">
        <div className="pj-search-bar">
          <input type="text" placeholder="Search" className="pj-search-input" />
          <button className="pj-search-button">
            <img src={search} alt="Search" className="pj-search-icon" />
          </button>
        </div>

        <button className="pj-filter-button">
          <img src={filter} alt="filter" className="pj-filter-icon" />
          <div>Filter</div>
        </button>
      </div>
    </div>
  );
};

export default ComponentHeader;
