import React from 'react'
import { Modal } from './Modal.jsx'

const APlayer  = React.lazy(() => import('./APlayer'))

export function Card (props) {
    console.log('Card rander!')
    return (
        <div className="card-container" onTouchEnd={props.handleClick}>
            <div className={`card ${(props.info.completed || props.info.flip) ? 'flip' : ''}`}>
                <div className="card-front bg-red-200">
                    <img src={`${import.meta.env.BASE_URL}${props.info.front}`} alt="xiaoxin2" />
                </div>
                <div className="card-back bg-red-200">{props.info.back}</div>
            </div>
        </div>
    )
}

let currentIndex, lastIndex
let cardList = [
    {
        front: 'images/xiaoxin2.jpeg',
        back: '祝',
        flip: false,
        value: 0,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '祝',
        flip: false,
        value: 0,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '你',
        flip: false,
        value: 1,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '你',
        flip: false,
        value: 1,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '生',
        flip: false,
        value: 2,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '生',
        flip: false,
        value: 2,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '日',
        flip: false,
        value: 3,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '日',
        flip: false,
        value: 3,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '快',
        flip: false,
        value: 4,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '快',
        flip: false,
        value: 4,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '乐',
        flip: false,
        value: 5,
        completed: false
    }, {
        front: 'images/xiaoxin2.jpeg',
        back: '乐',
        flip: false,
        value: 5,
        completed: false
    }
]

function shuffle (arr) {
    const length = arr == null ? 0 : arr.length
    if (!length) {
        return []
    }

    let index = -1
    const lastIndex = length - 1
    const res = arr.concat()
    while (++index < length) {
        const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
        ;[res[index], res[rand]] = [res[rand], res[index]]
    }

    return JSON.parse(JSON.stringify(res))
}

export function Game () {
    let [list, setList] = React.useState(shuffle(cardList))
    let [visibled, setVisibled] = React.useState(false)

    function handleClick (index) {
        // list[index].flip = true
        if (currentIndex === index) return
        currentIndex = index
        if (lastIndex != null && list[currentIndex].value === list[lastIndex].value) {
            list[currentIndex].completed = true
            list[lastIndex].completed = true
        }

        list = list.map((item, i) => {
            if (index === i) {
                item.flip = true
            } else {
                item.flip = false
            }
            return item
        })
        console.log(currentIndex, lastIndex)
        lastIndex = currentIndex
        setList(list)
        checkIsCompleted(list)
    }

    function checkIsCompleted (list) {
        let isCompleted = list.every(item => item.completed)
        console.log(isCompleted)
        isCompleted && setVisibled(true)
    }

    function handleClose () {
        setVisibled(false)
    }

    function restart () {
        setList(shuffle(cardList))
    }
    console.log('Game rander!')
    return (
        <div className="p-4">
            <header className="flex justify-between">
                <div className="text-xl font-bold">来玩游戏吧</div>
                <div>
                    <button onTouchEnd={ restart }>重玩</button>
                </div>
            </header>
            <p className="text-left my-2">每次只能翻开一张卡片，翻到两张相同的图片则会匹配成功，当所有卡片匹配成功，则游戏完成，解锁彩蛋。</p>
            <div className="game-container">
                {
                    list.map((item, i) => {
                        return <Card info={item} key={i} index={i} handleClick={handleClick.bind(this, i)}/>
                    })
                }
            </div>
            <Modal visibled={ visibled } onClose={ handleClose }/>
            <React.Suspense fallback={ <div>加载中……</div> }>
                <APlayer />
            </React.Suspense>
        </div>
    )
}
