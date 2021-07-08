import React, { useState } from 'react'

export function HooksTest (props) {
    console.log('===重新渲染===')
    const [count, setCount] = useState(0)

    let number = [0,1,2]
    number = new Proxy(number, {
        get (target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver)
            } else {
                return 0
            }
        },
        set (target, prop, val, receiver) {
            if (typeof val === 'number') {
                return Reflect.set(target, prop, val, receiver)
            } else {
                return false
            }
        }
    })

    number.push(1)
    try {
        number.push('str')
    } catch (e) {
        console.log(e)
    }

    return (
        <div>
            <p>proxy: { number[1] }</p>
            <p>proxy: { number[12] }</p>
            <p>点击自增{ count }</p>
            <button onClick={ () => { setCount(count + 1) } }>点我点我</button>
            <div className="property" style={{width: '200px', height: '100px'}}></div>
        </div>
    )
}
