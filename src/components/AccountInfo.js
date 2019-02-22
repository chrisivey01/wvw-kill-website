import React from 'react'

const AccountInfo = props => {



    return (
        <div>
            <div>
                <label>AccountId: {props.accountData.name}</label>
            </div>
            <div>
                <label>World: {props.accountData.world}</label>
            </div>
            <div>
                <label>Current kills: {props.accountData.killInfo.current}</label>
            </div>
            <div>
                <select
                    value={props.guildSelector}
                    onChange={(e)=>props.guildSelectHandler(e)}
                     style={{color:"black"}}>
                    <option value="" disabled selected hidden >Select your guild</option>
                    {props.accountData.guildNames.map(guild =>{
                        return <option key={guild}>{guild}</option>
                    })}
                </select>
            </div>
            <div>
                <button
                    style={{color:"black"}}
                    onClick={props.submitAccount}>Submit Account</button>
                <div>
                 <label style={{color:"red"}}>Please wait 5 minutes to see your information in table.</label>
                </div>
                <div>
                    <label style={{color:"red"}}>Run into issues? Suggestions? Msg Chris.4527</label>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo
//
// {props.guildSelector.map(guild => {
//     return <option>{guild}</option>
// })}