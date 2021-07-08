import React from 'react'

class MouseTracker extends React.Component {
    constructor (props) {
        super(props)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove (e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render () {
        return (
            <div style={{ height: '100vh' }} onMouseMove={ this.handleMouseMove }>
                <h1>移动鼠标！</h1>
                <p>当前的鼠标位置是({this.state.x}, {this.state.y})</p>
            </div>
        )
    }
}

export default MouseTracker
