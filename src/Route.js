import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 

import Connexion from './Connexion'
import Inscription from './Inscription' 

export default function MainRouter () {
    return (
        <Router>
            <div> 
                <Route path="/Connexion" component={Connexion}/>
                <Route path="/Inscription" component={Inscription}/>
            </div>
        </Router>
    )
}