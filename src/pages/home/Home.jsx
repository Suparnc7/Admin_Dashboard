import Chart from '../../components/chart/Chart';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import "./home.css";
import { userdata } from '../../dummyData';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

export default function Home() {
  return (
    <div className='home'>
      <Featuredinfo/>
      <Chart data = {userdata} title="User Analytics" grid dataKey="Active User"/>
      <div className='homeWidgets'>
        <WidgetSm/>
        <WidgetLg/>        
      </div>
    </div>
  )
}
