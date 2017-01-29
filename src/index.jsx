import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mensagem:'Olá'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log(e);
        //console.log(e.target);
        this.setState({
            mensagem:'Clicou'
        });
    }

    componentWillMount(){
        return true;
    }

    render(){
        return (
            <div>
                <h2>{this.state.mensagem}</h2>
                <MyComponent mensagem={this.state.mensagem} />
                <button onClick={ this.handleClick }>Click me!</button>
            </div>
        )
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)