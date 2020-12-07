import React, { useState } from 'react'
import * as io from 'react-icons/io5'
import {
    Wrraper,
    Item,
    TrendItem,
    Modal,
    ExpIcons

} from './styleComponents'

function Explore({ post, chosePost, index }) {

    const [like, setLike] = useState(false)
    const hanelOnClick = (eve, id) => {
        chosePost(eve, id)
        document.body.style.overflow = 'hidden'
    }

    (function sort() {
        post.sort((a, b) => (b.view + b.likers.length) - (a.view + a.likers.length))
    })()
    return (

        <Wrraper index={index} >
            {post.map((item, index) => {
                if (index === 0) {
                    return <TrendItem
                        key={item.id}
                        onClick={(eve) => hanelOnClick(eve, item.id)}
                    >
                        <img width={'630px'} height={'630px'} src={item.img + `?${item.id}`} alt={'img'} />
                        <Modal>
                            <ExpIcons><io.IoHeartOutline /></ExpIcons>{item.likers.length}
                            <ExpIcons><io.IoChatbubbleOutline /></ExpIcons>{item.comments.length}
                        </Modal>
                    </TrendItem>


                }
                else {
                    return (<>
                        <Item

                            key={item.id}
                            onClick={(eve) => hanelOnClick(eve, item.id)}
                        >
                            <Modal>
                                <ExpIcons><io.IoHeartOutline onClick={() => setLike(!like)} /></ExpIcons>{item.likers.length}
                                <ExpIcons><io.IoChatbubbleOutline /></ExpIcons>{item.comments.length}
                            </Modal>
                            <img width={'300px'} height={'300px'} src={item.img + `?${item.id}`} />
                        </Item>
                    </>
                    )
                }
            })}
        </Wrraper>



    )
}

export default Explore
