import React, {useState, useEffect} from 'react'
import services from '../services/services'

import AccountInfo from './AccountInfo'

const ApiSubmitter = props => {
    const [api, setApi] = useState('')
    const [accountData, setAccountData] = useState({})
    const [accountSubmittedText, setaccountSubmittedText] = useState((''))
    const [guildSelector, setGuildSelector] = useState([])


    const submitApiHandler = () => {
        services.obtainApi(api)
            .then(results => {
                setApi('')
                return results
            })
            .then(results => {
                setAccountData(results)
            })

    }

    const guildSelectHandler = e => {
        setGuildSelector(e.currentTarget.value)
    }

    const submitAccount = (accountData, guildSelector) => {
        services.submitAccount(accountData, guildSelector)
            .then(results => {
                setaccountSubmittedText(results)
            })
    }

    useEffect(() => {

    })

    return (
        <div>

            <div>
                {accountData.text}
                {accountSubmittedText}
            </div>
            <input
                placeholder="Submit API"
                onChange={(e) => setApi(e.target.value)}
                value={api}
                style={{color: "black"}}
            />

            <button style={{color: "black"}} onClick={submitApiHandler}>Load API</button>

            {Object.entries(accountData).length > 0 && accountData.text !== "invalid key" && accountData.text !== "requires scope progression" ?
                <AccountInfo
                    accountData={accountData}
                    guildSelector={guildSelector}
                    guildSelectHandler={guildSelectHandler}
                    submitAccount={() => submitAccount(accountData, guildSelector)}/>
                : null}


        </div>
    )
}

export default ApiSubmitter;
