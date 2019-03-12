import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const TopTable = props => {
    let leaderboard = props.leaderboard

    return (
        <div>
            <BootstrapTable className="fontColor" data={leaderboard} rowClasses="rows" search filter pagination hover>
                <TableHeaderColumn width='70px' isKey dataField='rank' dataSort={true}>Ranks</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='name' dataSort={true}>Account ID</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='weekly_tally' dataSort={true}>Kill Total</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='guild' dataSort={true}>Guild</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='world' dataSort={true}>World</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default TopTable