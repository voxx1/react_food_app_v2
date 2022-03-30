import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portalModal = document.getElementById("overlays")

const Modal = (props) => {


    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalModal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalModal)}


        </>
    )
}

export default Modal