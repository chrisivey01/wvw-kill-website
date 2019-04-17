//9F1DA7B3-F32A-024F-B76A-7A496E9A207F7EAF1AF3-DB60-493B-B4E5-5503BA064F6B
import axios from 'axios'

const url = 'http://localhost:8000';

export default {
    contactMeApi(contactDetails){
        axios.post(url + "/contactMe", {
            data:contactDetails
        })
        .then((res) => {
            console.log(res)
        })
    },
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

}

