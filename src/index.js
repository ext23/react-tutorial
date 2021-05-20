import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToogleOn: !state.isToogleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToogleOn ? 'Включено' : 'Выключено'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);