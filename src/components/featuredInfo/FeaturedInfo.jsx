import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import studentsData from '../../studentData.json';

const data = studentsData;

// get avarge number of enjoyability
const averageEnjoyability = data.reduce((a, b) => {
  return {enjoyability: a.enjoyability + b.enjoyability}
}).enjoyability / data.length;
//console.log(averageEnjoyability)

// get avarage number of difficulty
const averageDifficulty = data.reduce((a, b) => {
  return {difficulty: a.difficulty + b.difficulty}
}).difficulty / data.length;

// get best score Project
const bestScoreProject = data.reduce((group, data) => {
  group[data.project] = group[data.project] ?? [];

  group[data.project].push({
    enjoyability: data.enjoyability,
  })

  return group;
}, {});
// console.log(bestScoreProject)





export default function FeaturedInfo() {

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Avarage Best Score Project</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> KleurenToggle </span>
        </div>
        <span className="featuredSub">Last month: SongSaver</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Avarage Rate Enjoyability</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"><ArrowUpward className="featuredIcon"/> {averageEnjoyability}</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Avarage Rate Difficulty</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"><ArrowDownward className="featuredIcon negative"/> {averageDifficulty}</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}