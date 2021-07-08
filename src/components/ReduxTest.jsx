import React from 'react'
import { connect, Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

let nextTodoId = 0

const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
} 

const Todo = ({ onClick, completed, text }) => {
    console.log(text)
    return (
        <li
            onClick={ onClick }
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >{ text }</li>
    )
}

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        { todos.map((todo, index) => (
            <Todo key={ index } {...todo} onClick={ () => onTodoClick(index) } />
        )) }
    </ul>
)

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{ children }</span>
    }

    return (
        <a
            href=""
            onClick={
                e => {
                    e.preventDefault()
                    onClick()
                } 
            }
        >{ children }</a>
    )
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)


const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

const reducers = combineReducers({
    todos,
    visibilityFilter
})

const linkMapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const linkMapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const FilterLink = connect(
    linkMapStateToProps,
    linkMapDispatchToProps
)(Link)

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink> | 
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink> | 
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
)

const AddTodoForm = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }

                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input ref={ node => (input = node) } />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

const AddTodo = connect()(AddTodoForm)

const store = createStore(reducers)

const IsRefresh = function () {
    console.log('refresh')
    return <div>看看刷新了没</div>
}
const IsRefreshComponent = connect()(IsRefresh)
const ReduxTest = () => (
    <Provider store={store}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <IsRefreshComponent />
    </Provider>
)

export default ReduxTest
