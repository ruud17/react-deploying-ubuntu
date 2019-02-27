import React, {Component} from 'react';
import './App.scss';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

class App extends Component {
    render() {
        return (
            <div className="main-container col-lg-12">
                <div className="col-lg-3 sidebar">
                    <Sidebar/>
                </div>
                <div className="col-lg-9 content">
                    <Content/>
                </div>
            </div>
        );
    }
}

export default App;
