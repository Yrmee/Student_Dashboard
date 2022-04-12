import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

// import data
import studentsData from '../../studentData.json';
const data = studentsData;

//// Note: Average Best Score Project is not real content. 
// Just design for the homepage. 

// get average number of enjoyability of all data
const averageEnjoyability = data.reduce((a, b) => {
  return {enjoyability: a.enjoyability + b.enjoyability}
}).enjoyability / data.length;

// get average number of difficulty of all data
const averageDifficulty = data.reduce((a, b) => {
  return {difficulty: a.difficulty + b.difficulty}
}).difficulty / data.length;


export default function FeaturedInfo() {

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Avarage Best Score Project</span>

        <div className="featuredContainer">
          <span className="featuredContent"> KleurenToggle </span>
        </div>

        <span className="featuredSub">Last month: SongSaver</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Avarage Rate Enjoyability</span>

        <div className="featuredContainer">
          <span className="featuredContent">
            <ArrowUpward className="featuredIcon"/> {averageEnjoyability}</span>
        </div>

        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Avarage Rate Difficulty</span>

        <div className="featuredContainer">
          <span className="featuredContent">
            <ArrowDownward className="featuredIcon negative"/> {averageDifficulty}</span>
        </div>

        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}