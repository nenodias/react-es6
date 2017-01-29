import React from 'react';

class MyComponent extends React.Component {

    render(){
        const { mensagem } = this.props;

        return (
            <div>
                <span>{mensagem}</span>
            </div>
        )
    }

}

MyComponent.propTypes = {
    mensagem: React.PropTypes.string.isRequired
};

module.exports = MyComponent;