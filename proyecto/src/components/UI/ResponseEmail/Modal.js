import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter , Label , FormGroup , Input , CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export class ModalJS extends React.Component{  
  
    state={
        abierto: false,
    }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){    
    return(
      <>
      <div className="principal">
        <div className="secundario">
        <Button color="success" onClick={this.abrirModal}>Ver Resultado</Button>
      </div></div>

      <Modal isOpen={this.state.abierto}>
        <ModalHeader>
          Respuesta
        </ModalHeader>
        <ModalBody>
            Enviado
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}
