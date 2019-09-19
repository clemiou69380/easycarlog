import React from 'react';
import './css/Connexion.css'
import logo from './img/logo.svg';

class Connexion extends React.Component {
    render() {


        return (
            <div className="ConnexionContainer">
                <div className="ConnexionLogo">
                    <p className="ConnexionInscription"><a href="./Inscription">Inscription</a></p>
                   
                    <object type="image/svg+xml" data={logo} class="logo">

                    </object>
                </div>
                <div className="ConnexionTemplate"><br />
                    <h3>Connectez-vous</h3>
                    <br />
                    <form id="ConnexionFormulaire">

                        <input type="text" placeholder="Nom d'utilisateur ou email" className="ConnexionInput" id="ConnexionUtilisateur" />
                        <br />
                        <input type="password" placeholder="Mot de passe" className="ConnexionInput" id="ConnexionMotdepasse" />

                        <p className="ConnexionMotdepasseoublie"><a href="#">Mot de passe oublié</a><input type="submit" value="Connexion" className="ConnexionInput" id="ConnexionEnvoyer" /></p>
                    </form>

                </div>
            </div>
        );

    }


}
export default Connexion;