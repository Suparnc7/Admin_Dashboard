import './featuredinfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Featuredinfo() {
  return (
    <div className='featured'>
        <div className="featureditem">
            <span className="featuredTitle"> Revenue </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney"> 20000 </span>
                <span className="featuredMoneyRate"> -23
                <ArrowDownwardIcon className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">
                Compare to last Month
            </span>
        </div>
        <div className="featureditem">
            <span className="featuredTitle"> Sales </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney"> 43764 </span>
                <span className="featuredMoneyRate"> -24
                    <ArrowDownwardIcon className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">
                Compare to last Month
            </span>
        </div>
        <div className="featureditem">
            <span className="featuredTitle"> Costs </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney"> 364240 </span>
                <span className="featuredMoneyRate"> 2324
                    <ArrowUpwardIcon className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">
                Compare to last Month
            </span>
        </div>                
    </div>
  )
}
