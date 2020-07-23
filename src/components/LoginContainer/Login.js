//React Imports 
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Bootstrap Imports 
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

//Button Imports
import GetStartedButton from '../ButtonsContainer/GetStartedButton.js';
import PaypalButton from '../ButtonsContainer/PaypalButton.js';
import UserHomeButton from '../ButtonsContainer/UserHomeButton.js';

//Image Imports
import rps from '../../assets/images/rps-logo.png';

// AWS Imports
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports.js';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';

//Components Imports
import SecondBottomNavBar from '../NavbarContainer/SecondBottomNavBar.js';

export default class WelcomeScreen extends Component {
    render() {
        return (
            <div>
                <Row className="new-nav"><SecondBottomNavBar /></Row>
                <Row><Image src={rps} className="main"  alt="main logo" /></Row>
                <Row><AmplifySignIn headerText="Login" slot="sign-in" /></Row>
                <Row className="copyright"><i class="far fa-copyright"> <span className="copyright-code">Code Differently</span></i></Row>
            </div>
        );
    }
}

