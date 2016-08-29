import React, {Component} from 'react';
import {Button, Modal, FormGroup, Form, Col, FormControl} from 'react-bootstrap';
import Hotel from './Hotel';

class HotelsIndv extends Component {
    constructor(){
        super();
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            showModal: false
        };
    }
    open(){
        this.setState({showModal: true});
    }
    close(){
        this.setState({showModal: false});
    }
    handleClick(){
        this.props.taskCallbacks.getHotel(this.props.id);
        
    }
    render(){
        
        return (
            <div>
                <div className="hotels" id={this.props.id}>
                    <a href={this.props.link} onClick={this.open} >
                    <img src={this.props.photo} />
                    <h3 className='hotelname'>{this.props.name.length > 20 ? this.props.name.slice(0,20) + '...' : this.props.name}</h3>
                    <h3 className='hotelrate'>{this.props.rate}</h3>
                    </a>
                </div>
            
            <Modal show={this.state.showModal} onHide={this.close} bsSize="large">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.hotel.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Hotel key={this.props.id} hotel={this.props.hotel} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
}

export default HotelsIndv;