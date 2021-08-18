import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledTabs from './Component-Tabs/tabs'
import Title from './Component-Title/title'
import Test from './Component-Tabs/test'


class App extends React.Component{

    render(){
        return <div>
            <Title/>
            <Test/>
            {/* <ControlledTabs/> */}
        </div> 
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
  );