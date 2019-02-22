import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const WeeklyTable = props => {
    let weekly_tally = props.weekly

    return (
        <div>
            <BootstrapTable className="fontColor" data={weekly_tally} search pagination hover>
                <TableHeaderColumn width='70px' isKey dataField='rank'>Ranks</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='name'>Account ID</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='weekly_kill_total'>Kill Total</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='guild'>Guild</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='world'>World</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default WeeklyTable