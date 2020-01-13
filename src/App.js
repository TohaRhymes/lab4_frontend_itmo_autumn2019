import React from 'react';
import {Route, Switch} from "react-router-dom";
import "./static/styles/style.scss"
import logo from "./static/img/vt-logo.png"
import LoginPage from "./LoginPage/LoginPage";
import MainPage from "./MainPage/MainPage";
import RegisterPage from "./RegisterPage/RegisterPage";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route path="/" component={MainPage}/>
                </Switch>
            </div>
        );
    }
}


const Header = () => {
    return (<div className="head">
        <span id="title">
            Web-project #4. Variant 21911
            <p><a href="https://github.com/TohaRhymes" target="_blank" rel="noopener noreferrer">Changalidi Anton, P3214</a>
            </p>
            </span>

        <img  className="App-logo" src={logo} alt="logo"/>
        {/*<a href="http://se.ifmo.ru" target="_blank" rel="noopener noreferrer"> <img  className="App-logo" src={logo} alt="logo"/></a><br/>*/}

    </div>)
};


export default App;
