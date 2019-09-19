import React from 'react';
import './css/Inscription.css'
import logo from './img/logo.svg';

class Inscription extends React.Component {
    render() {


        return (
            <div className="InscriptionContainer">
                <div className="InscriptionLogo">
                    <p className="InscriptionConnexion"><a href="./Connexion">Connexion</a></p>
                   
                    <object type="image/svg+xml" data={logo} class="logo">

                    </object>
                </div>
                <div className="InscriptionTemplate"> <br/>
                    <h3>Rejoignez-nous !</h3>
                    <p>Pour profitez pleinement de l'application veuillez vous inscrire.</p>
                    <br />
                    <form id="InscriptionFormulaire">

                        
                        <input type="text" placeholder="Nom" className="InscriptionInput" id="InscriptionNom" /><input type="text" placeholder="Prénom" className="InscriptionInput" id="InscriptionPrenom" />
                        <input type="text" placeholder="Nom d'utilisateur" className="InscriptionInput" id="InscriptionUtilisateur" /><input type="date" placeholder="Date de naissance" className="InscriptionInput" id="InscriptionDateNaissance" /> <br/>
                        <input type="password" placeholder="Mot de passe" className="InscriptionInput" id="InscriptionMotdepasse" /><input type="password" placeholder="Confirmer le mot de passe" className="InscriptionInput" id="InscriptionConfirmMotdepasse" />
<br/>
                        <p className="InscriptionMotdepasseoublie"><a href="#">Mot de passe oublié</a><input type="submit" value="Inscription" className="InscriptionInput" id="InscriptionEnvoyer" /></p>
                    </form>

                </div>
            </div>
        );

    }


}
export default Inscription;