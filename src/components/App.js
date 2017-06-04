import React, {Component} from "react";
import "../App.css";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Header";
import Course from "./CoursesPage";

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/course" component={Course}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
