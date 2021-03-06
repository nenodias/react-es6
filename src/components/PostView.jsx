import React, {Component} from 'react';

export default class PostView extends Component{

    render(){
        if(!this.props.post){
            return this.renderEmpty();
        }
        if(this.props.body){
            return this.renderBody();
        }else if(this._isImage(this.props.post.url)){
            return this.renderImage();
        }else{
            return this.renderUrl();
        }
    }

    renderEmpty(){
        return (
            <div>
                <h3>Select a post to view</h3>
            </div>
            );
    }

    renderBody(){
        return (
            <div dangerouslySetInnerHTML={this._getBodyMarkup(this.props.post.body)} />
            );
    }

    renderImage(){
        return (
            <img src={this.props.post.url} alt={this.props.post.title} />
            );
    }

    renderUrl(){
        return (
            <div>
                <h3>External Link</h3>
                <a href={this.props.post.url} target="_blank">Open</a>
            </div>
            );
    }

    _getBodyMarkup(body){
        let txt = document.createElement("textarea");
        txt.innerHTML = body;
        return {
            __html: txt.value
        };
    }

    _isImage(url){
        if(!url){
            return false;
        }
        return (url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.gif') );
    }
}