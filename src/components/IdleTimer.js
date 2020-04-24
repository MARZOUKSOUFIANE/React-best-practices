import React ,{ useState,useRef}  from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function IdleTimerContainer() {
    const idleTimerRef = useRef(null)
    const sessionTimeOut = useRef(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(true)

    const onIdle = () => {
        console.log('user is idle')
        setModalIsOpen(true)
        sessionTimeOut.current = setTimeout(handleLogOut,5000)
    }

    const handleKeepSession = () => {
        setModalIsOpen(false)
        console.log('user is still active')
        clearTimeout(sessionTimeOut.current)
    }

    const handleLogOut= () => {
        setModalIsOpen(false)
        setIsActive(false)
        console.log('user is logging out')
        clearTimeout(sessionTimeOut.current)
    }


    return (
        <div>

            <div>
                {
                    isActive ? <h2>Hello Soufiane </h2> : <h2>Hello Guest</h2>
                }
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={ ()=> setModalIsOpen(false)} >
                <h2>You are idle for 15 minute</h2>
                <p>you will be logged soon!</p>
                <button onClick={handleKeepSession} >Keep me sign-in</button>
                <button onClick={handleLogOut} >log-out me</button>
            </Modal>

            <IdleTimer
            ref={idleTimerRef}
            timeout={5 * 1000} 
            onIdle={onIdle}
            />

        </div>
    )
}

export default IdleTimerContainer
