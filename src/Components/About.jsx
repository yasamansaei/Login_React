import React from 'react'
import {useParams} from 'react-router-dom'
import PropsTypes from 'prop-types'

function About(props) {
    const param=useParams()
    console.log(param)
    return (
        <div>
            <h2>Hello {props.name}</h2>
        </div>
    )
}

export default About

About.propTypes={
    name:PropsTypes.string.isRequired
}
About.defaultProps={
    name:"yasaman"
}
