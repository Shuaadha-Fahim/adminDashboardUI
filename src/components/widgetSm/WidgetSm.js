import "./widgetSm.css"
import { Visibility } from "@mui/icons-material";

const WidgetSm = () => {
    return (
        <div className="widgetSm">
          <span className="widgetSmTitle">New Clients</span>
          <ul className="widgetSmList">
            <li className="widgetSmListItem">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img
                src="https://images.pexels.com/photos/14087249/pexels-photo-14087249.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Arun Dissanayake</span>
                <span className="widgetSmUserTitle">SoftLogic PLC</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img
                src="https://images.pexels.com/photos/8911864/pexels-photo-8911864.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Kamalarasa Varun</span>
                <span className="widgetSmUserTitle">LOLC Holdings</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img
             
                src="https://images.pexels.com/photos/4342402/pexels-photo-4342402.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Vimal Dissanayake</span>
                <span className="widgetSmUserTitle">Hayleys PLC</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img
                src="https://images.pexels.com/photos/8217880/pexels-photo-8217880.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Mohammed Azmir</span>
                <span className="widgetSmUserTitle">M.A Motors Kandy</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          </ul>
        </div>
      );
    }

export default WidgetSm;
