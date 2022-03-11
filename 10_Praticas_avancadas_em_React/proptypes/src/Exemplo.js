import React from 'react'
import PropTypes from 'prop-types'

function Exemplo(props) {

    const { array, boolean, fn, nmb, obj, str} = props

    return (
        <div>
            <h1>Show array size: {array.length}</h1>
            <h1>Do I have Holy Spirit? {boolean}</h1>
            <h1>Do Something! {fn()}</h1>
            <h1>Times I sinned: {nmb}</h1>
            <h1>Damn! {obj.name}</h1>
            <h1>My name is {str}</h1>
        </div>
    )
}

Exemplo.propTypes = {
    array: PropTypes.array,
    boolean: PropTypes.bool,
    fn: PropTypes.func,
    nmb: PropTypes.number.isRequired,
    obj: PropTypes.object,
    str: PropTypes.string.isRequired
}

Exemplo.defaultProps = {
    nmb: 0,
    str: 'Matheus'
}

export default Exemplo;