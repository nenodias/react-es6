import _ from 'lodash';
import React from 'react';

export default class ListView extends React.Component {

    render(){
        return (
            <ul>
                { _.map(this.props.rowsIdArray, this.renderRowsById.bind(this) ) }
            </ul>
            );
    }

    renderRowsById(rowId){
        return (
            <li key={rowId}>
                {this.props.renderRow( _.get(this.props.rowsById, rowId) )}
            </li>
            );
    }

}