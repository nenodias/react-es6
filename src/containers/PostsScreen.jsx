import React, { Component } from 'react';
import {connect} from 'react-redux';
import './PostsScreen.css'

class PostsScreen extends Component{
    render() {
        return (
            <h1>Olá</h1>
            );
    }
}

function mapStateToProps(state){
    return {};
}

export default connect(mapStateToProps)(PostsScreen)