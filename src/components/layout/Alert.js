import React from 'react'

const Alert = ({ alert: { msg, type } }) => {
    return (
        alert !== null && (
            <div className={`alert alert-${type}`}>
                <i className="fas fa-info-circle"></i> {msg}
            </div>
        )
        
    )
}

export default Alert
