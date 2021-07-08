import React from 'react'

export class SearchBar extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <input
                    value={this.props.searchWord}
                    onChange={this.props.onSearch}
                    type="text"
                    className="block w-full mb-1 text-black"
                    placeholder="Search..."/>
                <label className="cursor-pointer">
                    <input
                        value={this.props.stockChecked}
                        onChange={this.props.onChecked}
                        type="checkbox"
                        name="onlyStock"
                        id="onlyStock"
                        className="mr-1"/>
                    Only show products in stock
                </label>
            </div>
        )
    }
}
