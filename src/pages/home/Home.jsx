import "./home.css";
import studentsData from '../../studentData.json';

import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';

/////////////////CHART OVER ALL STUDENTS////////////////////////////////
const perProject = studentsData.reduce( (group, data) => {
    group[data.project] = group[data.project] ?? [];
    
    group[data.project].push({
        name: data.name,
        project: data.project,
        difficulty: data.difficulty,
        enjoyability: data.enjoyability,
    })   
    return group;
}, {})

const projectAverages = Object.keys(perProject).map( key => {
    const totalAmount = perProject[key].length; // totaal over 1 student
    
    const averageEnjoyability = perProject[key].reduce((a, b) => a + b.enjoyability, 0) / totalAmount;
    const averageDifficulty = perProject[key].reduce((a, b) => a + b.difficulty, 0) / totalAmount;
        
    return {
        
        project: key,
        difficulty: averageDifficulty,
        enjoyability: averageEnjoyability
    }
})

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo data={projectAverages} />
            <Chart 
                data={projectAverages}
                title="Student Analytics"
                grid
            />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    );
}
