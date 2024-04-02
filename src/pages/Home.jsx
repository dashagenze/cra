import React from "react";
import { Link } from 'react-router-dom';

import NameForm from "../components/NameForm";
import Button from "../components/Button";
import Welcome from "../components/createh1";
import programmer from './assets/programmer.jpg';
import '../App.css'

class Page1 extends React.Component {

    render() {
        return (
            <div className={'margin'}>
                <div>
                    <Welcome/>
                </div>
                <img src={programmer}/>
                <nav>
                    <ul>
                        <li>
                            <Link to="/glasses">Компьютерные очки Xiaomi</Link>
                        </li>
                        <li>
                            <Link to="/macbook">Macbook</Link>
                        </li>
                        <li>
                            <Link to="/hoodie">Черная Толстовка</Link>
                        </li>
                    </ul>
                </nav>
                {/*<NameForm/>*/}
                {/*<Button/>*/}
            </div>
        )
    }
}

export default Page1