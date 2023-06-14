import Charts from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Charts data={userData} title="Total Revenue" grid dataKey="Active Revenue"/>
            <div className="homeWidgets">
                
                <WidgetSm/>
                <WidgetLg/>
            </div>
            
        </div>
    );
}

export default Home;
