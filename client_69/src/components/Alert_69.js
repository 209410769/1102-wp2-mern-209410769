import React from 'react'

import { useAppContext_69 } from '../context/appContext_69'

const Alert_69 = () => {
    const { alertText, alertType } = useAppContext_69();
    return (
        <div className={`alert alert-${alertType}`}>
            {alertText}
        </div>
    )
}


export default Alert_69