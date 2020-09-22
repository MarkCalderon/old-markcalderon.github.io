import React from 'React'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import TopPage from '../components/top/TopPage'

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <Header />

                <Switch>
                    <Route path="/" exact component={TopPage} />
                </Switch>

                <Footer />
                
            </Router>

        )
    }
}