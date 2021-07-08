import React from 'react'
import Home from '../components/Home'
import { FilterableProductTable } from '../todo/FilterableProductTable'
import MouseTracker from '../components/MouseTracker'
import { HooksTest } from '../components/HooksTest'
import ReduxTest from '../components/ReduxTest'
import { Game } from '../components/Game'
import { ErrorBoundary } from '../components/ErrorBoundary'

class Router extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            route: window.location.hash.substr(1)
        }

        this.routeChange = this.routeChange.bind(this)
    }

    routeChange () {
        console.log(window.location.hash)
        this.setState({
            route: window.location.hash.substr(1)
        })
    }

    componentDidMount () {
        window.addEventListener('hashchange', this.routeChange)
    }

    componentWillUnmount () {
        window.removeEventListener('hashchange', this.routeChange)
    }

    render () {
        let Child
        switch (this.state.route) {
            case '/todo':
                Child = FilterableProductTable
                break
            case '/mouse-tracker':
                Child = MouseTracker
                break
            case '/hooks-test':
                Child = HooksTest
                break
            case '/redux-test':
                Child = ReduxTest
                break
            case '/game':
                Child = Game
                break
            default:
                Child = Game
                break
        }

        return (
            <ErrorBoundary>
                <Child />
            </ErrorBoundary>
        )
    }
}

export default Router
