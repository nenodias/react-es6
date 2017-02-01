import React, {Component} from 'react';
import _ from 'lodash';

export default class TopicFilter extends Component{

    render(){
        return (
            <div className={this.props.className}>
                {this.renderFilter('all', 'ALL')}
                {_.map(this.props.topics, (topic, topicId) => this.renderFilter(topicId, topic.title) )}
            </div>
            );
    }

    renderFilter(id, label){
        const className = this.props.selected === id ? 'selected' : undefined;
        return (
            <a
                key={id}
                href="#"
                className={className}
                onClick={() => this.onFilterClick(id)}>
                {label} &nbsp;
            </a>
            );
    }

    onFilterClick(id){
        if(id !== this.props.selected){
            this.props.onChanged(id);
        }

    }
}