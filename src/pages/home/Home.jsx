import "./home.css";

import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    );
}
