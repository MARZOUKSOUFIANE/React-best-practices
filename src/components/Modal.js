import React, { Component} from 'react'
import Modal from 'react-modal';


Modal.setAppElement('#root')


export class CustomModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             modal: false
        }

        this.openModal=this.openModal.bind(this)
        this.closeModal=this.closeModal.bind(this)
    }

    

    openModal(){
        this.setState({
            modal: true
        })
    }

    closeModal(){
        this.setState({
            modal: false
        })
    }
        
    render() {
        return (
            <div>
                <button onClick={this.openModal} >Open The Modal</button>
                <Modal
                    isOpen={
                        this.state.modal}
                    onRequestClose={
                        this.closeModal}
                        style={{
                            overlay: {
                              position: 'fixed',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: 'grey'
                            },
                            content: {
                              color: 'orange',  
                              position: 'absolute',
                              top: '30%',
                              left: '30%',
                              right: '30%',
                              bottom: '30%',
                              border: '3px solid red',
                              background: 'white',
                              overflow: 'auto',
                              WebkitOverflowScrolling: 'touch',
                              borderRadius: '20px',
                              outline: 'none',
                              padding: '100px'
                            }
                          }}
                >
                    <h2>First Modal</h2>
                    <p>Modal Content.</p>
                    <button onClick={this.closeModal} >Close The Modal</button>
                </Modal>
            </div>

        )
    }
}

export default CustomModal