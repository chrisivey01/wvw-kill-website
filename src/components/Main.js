import React, {useState, useEffect, useRef} from 'react'
import Header from './Header'
import AccountSubmitter from './ApiSubmitter'
import {Route, withRouter} from "react-router-dom";
import TopTable from './TopTable'
import WeeklyTable from './WeeklyTable'
import WeeklyGuildTable from './WeeklyGuildTable'
import services from '../services/services'


const Main = props => {

    const [topWeeklyKiller, setTopWeeklyKiller] = useState('')
    const [leaderboard, setLeaderboard] = useState([])
    const [weekly, setWeekly] = useState([])
    const [weeklyGuild, setWeeklyGuild] = useState([])
    const dropDownRef = useRef(null)
    // const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);

    useEffect(() => {
        services.loadWeeklyTop()
            .then(res => {
                if (res.length > 0) {
                    setTopWeeklyKiller(res[0].name)
                }
            })
    }, [])

    useEffect(() => {
        if(window.location.href === 'https://wvw-community.com/weeklyguild'){
            weeklyGuildHandler()
        }else if(window.location.href === 'https://wvw-community.com/week'){
            weeklyHandler()
        }else if(window.location.href === 'https://wvw-community.com/top'){
            leaderboardHandler()
        }
    },[])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });


    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            document.getElementById("dropDownList").classList.remove("show");
        }
    };

    const weeklyHandler = () => {
        services.weekly()
            .then(json => {
                if (json.length > 1) {
                    json.sort((a, b) => b.weekly_kill_total - a.weekly_kill_total)
                }
                json.map((item, i) => {
                    item['rank'] = i + 1
                })
                return json
            })
            .then(json => {
                setWeekly(json);
            })
    }

    const leaderboardHandler = () => {
        services.leaderboard()
            .then(json => {
                if (json.length > 1) {
                    json.sort((a, b) => b.weekly_tally - a.weekly_tally)
                }
                json.map((item, i) => {
                    item['rank'] = i + 1
                })
                return json
            })
            .then(json => {
                setLeaderboard(json)
            })
    }

    const weeklyGuildHandler = () => {
        services.loadWeeklyGuild()
            .then(json => {
                if (json.length > 1) {
                    json.sort((a, b) => b.guild_weekly_totals - a.guild_weekly_totals)
                }
                json.map((item, i) => {
                    item['rank'] = i + 1
                })
                return json
            })
            .then(json => {
                setWeeklyGuild(json)
            })
    }

    const showDropDown = () => {
        document.getElementById("dropDownList").classList.toggle("show");
    }


    return (
        <div>
            <Header
                topWeeklyKiller={topWeeklyKiller}
                weeklyHandler={weeklyHandler}
                leaderboardHandler={leaderboardHandler}
                showDropDown={showDropDown}
                dropDownRef={dropDownRef}
                weeklyGuildHandler={weeklyGuildHandler}/>


            <Route exact path="/" exact component={() => <AccountSubmitter/>}/>
            <Route exact path="/top" component={() => <TopTable
                leaderboard={leaderboard}/>}/>
            <Route exact path="/week" component={() => <WeeklyTable
                weekly={weekly}/>}/>
            <Route exact path="/weeklyguild" component={() => <WeeklyGuildTable
                weeklyGuild={weeklyGuild}/>}/>

        </div>
    )
}

export default Main;

//
