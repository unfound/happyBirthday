import React from 'react'

export function ProductRow (props) {
    return props.list.map((item, i) => (
        <tr key={ i }>
            <td className={ item.stocked ? undefined : 'text-red-500' }>{ item.name }</td>
            <td>{ item.price }</td>
        </tr>
    ))
}
