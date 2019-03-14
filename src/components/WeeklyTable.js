import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const WeeklyTable = props => {
    let weekly_tally = props.weekly

    return (
        <div>
            <BootstrapTable className="fontColor" data={weekly_tally} rowClasses="rows" search pagination hover>
                <TableHeaderColumn width='40px' isKey dataField='rank'>Ranks</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='name' dataSort={true}>Account ID</TableHeaderColumn>
                <TableHeaderColumn width='50px' dataField='weekly_kill_total'>Kill Total</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='guild' dataSort={true}>Guild</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='world' dataSort={true}>World</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default WeeklyTable