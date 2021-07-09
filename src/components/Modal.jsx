import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Typed from 'typed.js'

export function ModalBody (props) {
    let rootClassName = classNames("modal-root", {
        visibled: props.visibled
    })
    let maskClassName = classNames("modal-mask", {
        fadeIn: props.visibled,
        fadeOut: !props.visibled
    })
    let contentClassName = classNames("modal-content", {
        zoomIn: props.visibled,
        zoomOut: !props.visibled
    })

    let [footerVisibled, setFooterVisibled] = React.useState(false)
    let footerClassName = classNames("modal-footer", {
        fadeIn: footerVisibled,
        hidden: !footerVisibled
    })
    

    React.useEffect(() => {
        if (props.visibled) {
            const typed = new Typed('#bless', {
                stringsElement: '#blessBackup',
                typeSpeed: 160,
                backSpeed: 100,
                backDelay: 2000,
                startDelay: 1000,
                cursorChar: '♥',
                smartBackspace: true,
                onComplete: () => {
                    setFooterVisibled(true)
                }
            })
            return () => {
                typed.destroy()
                setFooterVisibled(false)
            }
        }
    }, [props.visibled])

    return (
        <div className={ rootClassName }>
            <div className={ maskClassName }></div>
            <div className="modal-wrap">
                <div className="modal">
                    <div className={ contentClassName }>
                        <div className="modal-header"></div>
                        <div className="modal-body">
                            <div>
                                <div id="blessBackup">
                                    <p>
                                        生日快乐！<br/>
                                        愿你能够一直努力开心地生活下去<br/>
                                        或许不用等到你退休的那一天<br/>
                                        你就能度过<br/>
                                        晨曦的阳光暖暖地抚过身体<br/>
                                        午后的微风带着花香略过鼻尖<br/>
                                        黄昏的落日余晖映红了脸颊<br/>
                                        夜晚满天的繁星都在头顶上闪耀着<br/>
                                        这样悠闲而又惬意的生活<br/>
                                        愿一切皆如你所愿<br />
                                    </p>
                                    <p>
                                        生日快乐！<br/>
                                        愿你能够一直努力开心地生活下去<br/>
                                        或许不用等到你退休的那一天<br/>
                                        你就能度过<br/>
                                        晨曦的阳光暖暖地抚过身体<br/>
                                        午后的微风带着花香略过鼻尖<br/>
                                        黄昏的落日余晖映红了脸颊<br/>
                                        夜晚满天的繁星都在头顶上闪耀着<br/>
                                        这样悠闲而又惬意的生活<br/>
                                        愿一切皆如你所愿<br />
                                        PS: ^1000 在这里的每一天 ^1000 都好想你<br />
                                    </p>
                                    <p>
                                        生日快乐！<br/>
                                        愿你能够一直努力开心地生活下去<br/>
                                        或许不用等到你退休的那一天<br/>
                                        你就能度过<br/>
                                        晨曦的阳光暖暖地抚过身体<br/>
                                        午后的微风带着花香略过鼻尖<br/>
                                        黄昏的落日余晖映红了脸颊<br/>
                                        夜晚满天的繁星都在头顶上闪耀着<br/>
                                        这样悠闲而又惬意的生活<br/>
                                        愿一切皆如你所愿<br />
                                        PS: ^1000 好想见你 
                                    </p>
                                </div>
                                <span id="bless"></span>
                            </div>
                        </div>
                        <div className={ footerClassName }>
                            <button onTouchEnd={ props.onClose }>知道了</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Modal (props) {
    return ReactDOM.createPortal(<ModalBody {...props}/>, document.body)
}

function langue () {
//     <p>生日快乐！<br/>
// 任何事物的诞生都有其意义<br/>
// 虽然我们或许还不知晓自己所诞生的意义<br/>
// 只是迷茫地，浑浑噩噩地生活着<br/>
// 但是，我遇到了你<br/>
// 或许仅仅是时间长河中的一瞬<br/>
// 就算是在彼此已经度过的短暂人生中<br/>
// 也仅仅是微不足道的短暂时光吧<br/>
// 更不会大言不惭这便是自己的人生意义<br/>
// 但这确实对我来说是无可代替的宝贵记忆<br/>
// 就算不是我的全部人生意义<br />
// 也是其中一个闪耀着辉光的碎片<br/>
// 所以<br/>
// 要一直这样开心努力地生活下去<br/>
// 或许不用等到你退休的那一天<br/>
// 你就能度过<br/>
// 晨曦的阳光暖暖地抚过身体<br/>
// 午后的微风带着花香略过鼻尖<br/>
// 黄昏的落日余晖映红了脸颊<br/>
// 夜晚满天的繁星都在头顶上闪耀着<br/>
// 这样悠闲而又惬意的生活<br/>
// 总之<br/>
// 愿一切皆如你所想<br/>
// 愿一切皆如你所愿</p>
}
