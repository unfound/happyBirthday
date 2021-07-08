import React from 'react'

export function ProductCategoryRow (props) {
    return (
        <tr>
            <td colSpan="2" className="font-semibold">{ props.category }</td>
        </tr>
    )
}
