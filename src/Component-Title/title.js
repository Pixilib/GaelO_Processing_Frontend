import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import image from './gaelo-logo.svg';
import '../index.css'

class Title extends React.Component{

    render(){
        return <div className="d-flex justify-content-center title">
            <Image src={image} fluid height='25%' width='25%'/>
        </div>
    }
}

export default Title