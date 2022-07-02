import React from 'react';
import {Header} from "../components/header";
import {About} from "../components/about";

export class Home extends React.Component {
    render() {return [
        <Header />,
        <About />
    ]
    }
}