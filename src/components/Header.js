import React from 'react'
import {Link} from 'react-router-dom'

const Header = props => {
    return(
        <div className="header">
            <div>
             <label id="title">WvW Kill Community Leaderboards</label>
            </div>

            <div>
                Top weekly killer: {props.topWeeklyKiller !== '' ? props.topWeeklyKiller : null}
            </div>
            <div style={{display:"inline-block"}}>
                <Link to="/weekly" onClick={props.weeklyHandler}>
                    <button className="routeButtons">Weekly</button>
                </Link>
                <Link to="/leader" onClick={props.leaderboardHandler}>
                    <button className="routeButtons">Top</button>
                </Link>
                <div style={{right:0, position:'absolute'}}>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="Y5DEZW3QBMNRW" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
                </div>
            </div>
        </div>
    )
}
export default Header


// mport React from 'react'
// import {Link} from 'react-router-dom'
//
// const Header = (props) => {
//
//
//     const style = {
//         display: 'flex',
//         justifyContent: 'space-around'
//     }
//     const center = {
//         textAlign: 'center'
//     }
//     return (
//         <div>
//             <div className="title">
//                 <div>
//                     <label>Yaks Bend</label>
//                 </div>
//                 <div className="killLeader">
//                     <label>
//                         Top Weekly Killer: {props.weeklyTopKiller !== '' ? props.weeklyTopKiller : null}
//                     </label>
//                 </div>
//             </div>
//             <nav style={style}>
//                 <div style={center}>
//                     <Link id='home' className={props.selected === 'home' ? 'active' : ''}
//                           onClick={(e) => props.selectTab(e)} to="/">
//                         Home
//                     </Link>
//                 </div>
//
//                 <div style={center}>
//                     <Link id='kills' className={props.selected === 'kills' ? 'active' : ''}
//                           onClick={(e) => props.selectTab(e)} to="/kills">
//                         Kills
//                     </Link>
//                 </div>
//                 <div style={center}>
//                     <Link id='builds' className={props.selected === 'builds' ? 'active' : ''}
//                           onClick={(e) =>{ props.selectTab(e); props.getGears();}} to="/builds">
//                         Builds
//                     </Link>
//                 </div>
//             </nav>
//         </div>
//     )
// }
