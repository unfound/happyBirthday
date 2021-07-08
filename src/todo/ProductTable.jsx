import React from 'react'
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'
import { ErrorBoundary } from '../components/ErrorBoundary'

export class ProductTable extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <ErrorBoundary>
                <table className="text-left">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.categoryList.map((category, i) => (
                                <React.Fragment key={ i }>
                                    <ProductCategoryRow category={ category.title }/>
                                    <ProductRow list={ category.list }/>
                                </React.Fragment>
                            ))
                        }
                    </tbody>
                </table>
            </ErrorBoundary>
        )
    }
}
