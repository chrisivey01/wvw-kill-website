import React, {useState, useEffect} from 'react'
import Header from './Header'
import AccountSubmitter from './ApiSubmitter'
import {Route} from "react-router-dom";
import TopTable from './TopTable'
import WeeklyTable from './WeeklyTable'
import services from '../services/services'



const Main = props => {

    const [topWeeklyKiller, setTopWeeklyKiller] = useState('')

    const [leaderboard, setLeaderboard] = useState([])
    const [weekly, setWeekly] = useState([])

    useEffect(()=>{
        services.loadWeeklyTop()
            .then(res => {
                if(res.length>0) {
                    setTopWeeklyKiller(res[0].name)
                }
            })
    },[])

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

    return (
        <div>
            <Header
                topWeeklyKiller={topWeeklyKiller}
                weeklyHandler={weeklyHandler}
                leaderboardHandler={leaderboardHandler}/>


            <Route path="/" exact component={() => <AccountSubmitter/>}/>
            <Route path="/leader" component={() => <TopTable
                                                            leaderboard={leaderboard}/>}/>
            <Route path="/weekly" component={() => <WeeklyTable
                                                            weekly={weekly}/>}/>

        </div>
    )
}

export default Main;

//
