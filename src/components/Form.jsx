import React from 'react'

export class Form extends React.Component {
    constructor (props) {
        super(props)
        this.input = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        console.log(this.input)
        e.preventDefault()
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={this.input}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}