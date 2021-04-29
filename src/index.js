import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import reactDom from 'react-dom';

class AppMenu extends React.Component {
    render(props) {
        return <Menu id="appMenu" keepMounted>
            <MenuItem>Статистика</MenuItem>
            <MenuItem>Команды</MenuItem>
            <MenuItem>Выход</MenuItem>
        </Menu>
    }
}

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,        
        };        
    }

    sayHello() {
        alert("Hello, " + this.state.name + "!");
    }

    render(props) {
        return <Button color="primary" onClick={()=>this.sayHello()}>{this.props.name}</Button>;
    }
}

function App() {
    return (
        <div>            
            <AppMenu/>
            <Team name="GENTLEMEN CARPFISHING CLUB"/>
            <Team name="AQUA"/>
            <Team name="OUR BROTHER CARP TEAM"/>        
        </div>
    );
}

reactDom.render(
    <App />,
    document.getElementById('root')
);