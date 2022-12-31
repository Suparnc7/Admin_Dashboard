import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle"> New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                 alt="" 
                 className="widgetSmImg" 
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon/>
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                 alt="" 
                 className="widgetSmImg" 
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon/>
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                 alt="" 
                 className="widgetSmImg" 
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon/>
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                 alt="" 
                 className="widgetSmImg" 
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon/>
                </button>
            </li>
        </ul>    
    </div>
  )
}
