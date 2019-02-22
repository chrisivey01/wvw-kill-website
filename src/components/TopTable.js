import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const TopTable = props => {
    let leaderboard = props.leaderboard

    return (
        <div>
            <BootstrapTable className="fontColor" data={leaderboard} search pagination hover>
                <TableHeaderColumn width='70px' isKey dataField='rank'>Ranks</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='name'>Account ID</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='weekly_tally'>Kill Total</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='guild'>Guild</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='world'>World</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default TopTable