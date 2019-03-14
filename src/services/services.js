//9F1DA7B3-F32A-024F-B76A-7A496E9A207F7EAF1AF3-DB60-493B-B4E5-5503BA064F6B
const accountUrl = 'https://api.guildwars2.com/v2/account?access_token='
const achievementUrl = 'https://api.guildwars2.com/v2/account/achievements?access_token='
let guildUrl = 'https://api.guildwars2.com/v2/guild/'
// const url = 'http://localhost:8000'
const url = 'http://18.209.63.46:8000'

export default {
    obtainApi(api) {
        return fetch(url + "/api",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({api:api})
        })
            .then(results => results.json())
    },

    submitAccount(accountData,guildSelector){
        let data = {
            accountData,
            guildSelector
        }
        return fetch(url + "/submit",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        })
            .then(results => results.text())
    },

    loadWeeklyTop(){
        return fetch(url + "/topWeekly")
            .then(results => results.json())
    },

    leaderboard(){
        return fetch(url + '/leaderboard')
            .then(response => response.json())
    },

    weekly() {
        return fetch(url + '/weekly')
            .then(response => response.json())
    },

    loadWeeklyGuild() {
        return fetch(url + '/topWeeklyGuild')
            .then(response => response.json())
    }

    // obtainAchievements(api){
    //     return fetch(achievementUrl + api)
    //         .then(results => results.json())
    // },
    //
    // guildObtainer(guildId){
    //     return fetch(guildUrl + guildId)
    //         .then(results => results.json())
    // }
}

