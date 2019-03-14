import React from 'react'
import {Link} from 'react-router-dom'

const Header = props => {
    return (
        <div className="header">
            <div ref={props.dropDownRef} className="dropdown">
                <button onClick={props.showDropDown} className="dropbtn">View</button>
                <div id="dropDownList" className="dropdownContent">
                    <Link to="/week" onClick={props.weeklyHandler}>
                        <button className="links">Weekly Kill Ranks</button>
                    </Link>
                    <Link to="/weeklyguild" onClick={props.weeklyGuildHandler}>
                        <button className="links">Weekly Guild Ranks</button>
                    </Link>
                    <Link to="/top" onClick={props.leaderboardHandler}>
                        <button className="links">Top Kill Ranks</button>
                    </Link>
                </div>
            </div>
            <span>
                <label id="title">WvW Community</label>
            </span>

            <div id="weeklyKill">
                Top Weekly Killer: {props.topWeeklyKiller !== '' ? props.topWeeklyKiller : null}
            </div>
            <span style={{float: 'right'}}>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_donations"/>
                    <input type="hidden" name="business" value="Y5DEZW3QBMNRW"/>
                    <input type="hidden" name="currency_code" value="USD"/>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0"
                           name="submit" title="PayPal - The safer, easier way to pay online!"
                           alt="Donate with PayPal button"/>
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>
            </span>
        </div>
    )
}
export default Header
