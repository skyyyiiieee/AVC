import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const portalElement = document.getElementById("overlays");

const ModelOverlay = (props) => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props)  => {

    return(
        <Fragment>
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
        </Fragment>
    )

};

export default Modal;