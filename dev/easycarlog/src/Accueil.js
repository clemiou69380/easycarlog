import React from 'react';
import './css/Accueil.css'

import logo from './img/logo.svg';
import loupe from './img/loupe.svg';
import ImgVoiture from './img/ImgVoiture.jpg';

class Accueil extends React.Component {
    render() {
        return (
            <div className="divAccueil">
                <div className="ChoixVoiture">
                    <div className="SelectionVoiture">
                        <div className="DivPhotoVoitureChoisie">
                            <img className="PhotoVoitureChoisie" src={ImgVoiture} alt="image Voiture"/>
                        </div>
                        <div className="DivSelectChoixVoiture">
                            <select className="SelectChoixVoiture">
                                <option value="Coccinelle">Coccinelle 1515 - AX-555-PP</option>
                                <option value="Porsch">Porsch</option>
                                <option value="Lamborghini">Lamborghini</option>
                                <option value="Ferrari">Ferrari</option>
                            </select>
                        </div>
                    </div>
                    <object type="image/svg+xml" data={logo} className="AccueilLogo" />
                </div>
            </div>
        );

    }


}
export default Accueil;