import React from 'react'
import APlayers from 'aplayer'
import 'aplayer/dist/APlayer.min.css'

export default function APlayer () {
  const container = React.useRef(null)

  React.useEffect(() => {
    const ap = new APlayers({
      container: container.current,
      lrcType: 1,
      fixed: true,
      audio: [{
        name: '热爱105℃的你',
        artist: '早稻叽',
        autoplay: true,
        theme: '#fffbeb',
        url: import.meta.env.BASE_URL + 'media/001.m4a',
        cover: import.meta.env.BASE_URL + 'media/001.jpg',
        lrc: '[00:00.000] 作词 : 无\n[00:00.001] 作曲 : 无\n[00:00.003]混音：圈太\n[00:00.004]填词：雲夏的小盆栽\n[00:00.003]\n[00:00.004]\n[00:00.213]比超级偶像的笑容还要灿烂\n[00:03.581]比八月午后的阳光还要耀眼\n[00:07.205]你是比105度还要\n[00:10.197]闪闪发光的存在\n[00:15.479]如果要问“可爱”是什么\n[00:17.919]摔倒后马上就会开怀笑的你\n[00:21.881]梦想本来应该很遥远\n[00:24.967]指向的那颗星却近了\n[00:28.543]温柔的风正吹来\n[00:31.655]想要比“身边”的距离更近\n[00:35.599]说着“只要我们一起就不怕风浪”\n[00:42.103]比超级偶像的笑容还要灿烂\n[00:45.599]比八月午后的阳光还要耀眼\n[00:49.127]你是比105度还要\n[00:51.775]闪闪发光的存在\n[00:56.167]不再是孤身一人\n[00:57.964]迈出脚步吧\n[00:59.798]将所有都丢掉全力恋爱吧\n[01:03.150]你是比105度还要\n[01:05.796]闪闪发光的存在\n[01:10.348]不再是孤身一人\n[01:11.924]迈出脚步吧\n[01:13.674]追寻问题的答案陷入恋爱吧\n[01:17.161]你是比105度还要\n[01:20.097]闪闪发光的存在\n[01:22.766]喝一口开心好幸运\n[01:29.436]每一口都是喜欢你\n[01:39.877]如果要问“可爱”是什么\n[01:41.973]摔倒后马上就会开怀笑的你\n[01:46.052]梦想本来应该很遥远\n[01:48.972]指向的那颗星却近了\n[01:52.636]温柔的风正吹来\n[01:55.750]想要比“身边”的距离更近\n[01:59.771]说着“只要我们一起就不怕风浪”\n[02:06.275]比超级偶像的笑容还要灿烂\n[02:09.747]比八月午后的阳光还要耀眼\n[02:13.219]你是比105度还要\n[02:15.867]闪闪发光的存在\n[02:20.283]不再是孤身一人\n[02:22.403]迈出脚步吧\n[02:23.963]将所有都丢掉全力恋爱吧\n[02:27.315]你是比105度还要\n[02:30.043]闪闪发光的存在\n[02:34.531]不再是孤身一人\n[02:36.139]迈出脚步吧\n[02:37.907]追寻问题的答案陷入恋爱吧\n[02:41.411]你是比105度还要\n[02:44.235]闪闪发光的存在\n[02:47.347]喝一口开心好幸运\n[02:53.571]每一口都是喜欢你\n[03:00.547]喝一口开心好幸运\n[03:10.219]\n'
      }]
    })

    ap.on('canplay', () => {
      ap.play()
    })

    return () => {
      ap.destroy()
    }
  }, [])

  return <div ref={ container }></div>
}
