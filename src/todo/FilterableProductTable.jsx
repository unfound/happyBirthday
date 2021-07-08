import React from 'react'
import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'

export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)

        this.tableDataDepot = []
        this.state = {
            tableData: [],
            searchWord: '',
            stockChecked: false
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
    }

    handleSearch (e) {
        this.setState({
            searchWord: e.target.value
        }, () => {
            this.filterList()
        })
    }

    handleChecked (e) {
        this.setState({
            stockChecked: e.target.checked
        }, () => {
            this.filterList()
        })
    }

    filterList () {
        let resMap = new Map()
        this.tableDataDepot.forEach(item => {
            if (!item.name.toLowerCase().includes(this.state.searchWord.toLowerCase().trim())) return
            if (this.state.stockChecked && !item.stocked) return
            if (!resMap.has(item.category)) {
                resMap.set(item.category, [item])
            } else {
                resMap.get(item.category).push(item)
            }
        })
        let res = []
        for (let item of resMap.entries()) {
            res.push({
                title: item[0],
                list: item[1]
            })
        }
        console.log(res)
        this.setState({
            tableData: res
        })
    }

    componentDidMount() {
        let responseData = [
            { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
        ];
        this.tableDataDepot = responseData
        this.filterList()
    }

    render() {
        return (
            <div className="border-2 rounded-sm border-gray-300 p-4">
                <SearchBar
                    searchWord={ this.state.searchWord }
                    stockChecked={ this.state.stockChecked }
                    onSearch={ this.handleSearch }
                    onChecked={ this.handleChecked }
                />
                <ProductTable categoryList={this.state.tableData} />
            </div>
        )
    }
}
