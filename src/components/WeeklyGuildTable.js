import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const WeeklyGuildTable = props => {
    let weeklyGuild = props.weeklyGuild

    return (
        <div>
            <BootstrapTable className="fontColor" data={weeklyGuild} rowClasses="rows" search pagination hover>
                <TableHeaderColumn width='40px' isKey dataField='rank'>Ranks</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='guild' dataSort={true}>Guild</TableHeaderColumn>
                <TableHeaderColumn width='50px' dataField='guild_weekly_totals'>Kill Total</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default WeeklyGuildTable