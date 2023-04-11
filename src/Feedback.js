import React from 'react'

const Feedback = (props) => {
    return(
        <div className="d-flex justify-content-evenly m-2">
            <button type="button" onClick={props.funcaoOk} className="btn btn-primary">{props.textoOk}</button>
            <button type="button" onClick={props.funcaoNOk} className="btn btn-danger">{props.textoNOk}</button>
        </div>
    )
}

export default Feedback;