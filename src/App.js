import Header from "./components/Header";
import Home from "./components/Home";
import Explore from './components/Explore'
import { POST } from './components/DATA'
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from 'styled-components'
import { FaDiscord, FaReply } from "react-icons/fa";
import * as sc from "./styles/header";
import * as io from "react-icons/io5";
import InfiniteScroll from 'react-infinite-scroll-component';
import {Cover,
  ChosenPost,
  PostDescription,
  PostHeader,
  PostComments,
  PostStateBox,
  PostIput,
  UserName,
  IsFollowed,
  Menu,
  Doute,
  CommentsWrraper,
  Caption,
  CaptionUserName,
  AvatarWrraper,
  Houer,
  LoadMore,
  CommentInfo,
  Commnetdate,
  CommentLiks,
  Reply,
  AvatarWrrap,
  SaveAvatar,
  Icons,
  PostLikes,
  PostTime} from './components/styleComponents'

function App() {
  const [chosenPost, setChosenPost] = useState({})
  const [cover, setCover] = useState(false)
  const copyPosts = useRef([...POST])
  const [moreResults, setMoreResults] = useState([copyPosts.current.splice(0, 9)])

  useEffect(() => {
    window.addEventListener('click', () => {
      if (Cover) {
        setCover(false)
        document.body.style.overflow = 'auto'

      }
    })

  }, [])






  const handelChosenPost = (eve, id) => {

    const findPost = POST.find(item => item.id === id)
    setChosenPost(findPost)
    setCover(true)

    eve.stopPropagation()

  }
  const fetchMoreData = () => {

    let copyMoreResults = [...moreResults]
    const PostParts = copyPosts.current.splice(0, 9)
    copyMoreResults.push(PostParts)
    setMoreResults(copyMoreResults)


  }






  return (
    <>


      <Header />
      {/* <Home /> */}
      <InfiniteScroll
        dataLength={1}
        next={fetchMoreData}
        hasMore={true}
        loader={copyPosts.length > 0 && <h4>Loading...</h4>}
      >
        {moreResults.map((item,index) => <Explore index={index} post={item} chosePost={handelChosenPost} />)}
      </InfiniteScroll>

      { cover && <Cover >
        <ChosenPost onClick={(eve) => eve.stopPropagation()}>
          <img src={chosenPost.img + `?${chosenPost.id}`} width='600px' height={'600px'} />
          <PostDescription  >
            <PostHeader>
              <sc.Avatar />
              <UserName>{chosenPost.author}</UserName>
              <Doute>.</Doute>
              <IsFollowed>{chosenPost.isFollowed ? 'Following' : "Follow"}</IsFollowed>
              <Menu><io.IoEllipsisHorizontalSharp /> </Menu>
            </PostHeader>
            <PostComments>
              <CommentsWrraper>
                <AvatarWrraper> <sc.Avatar /></AvatarWrraper>
                <Caption>
                  <CaptionUserName>{chosenPost.author}</CaptionUserName>{chosenPost.caption}
                  <Houer>{chosenPost.createDate}</Houer>
                </Caption>
                <LoadMore><io.IoAddCircleOutline /></LoadMore>
              </CommentsWrraper>
              {chosenPost.comments.map(item => (
                <CommentsWrraper>
                  <AvatarWrraper> <sc.Avatar /></AvatarWrraper>
                  <Caption>
                    <CaptionUserName>{item.commentedBy}</CaptionUserName>{item.body}
                    <CommentInfo>
                      <Commnetdate>{item.createDate}</Commnetdate>
                      <CommentLiks>{item.likeCount} like</CommentLiks>
                      <Reply>Reply</Reply>
                    </CommentInfo>
                  </Caption>
                  <AvatarWrraper ><io.IoHeartOutline /></AvatarWrraper>
                </CommentsWrraper>
              ))}
            </PostComments>

            <PostStateBox>
              <Icons>
             <AvatarWrrap> <io.IoHeartOutline /></AvatarWrrap> 
             <AvatarWrrap> <io.IoChatbubbleOutline /></AvatarWrrap> 
             <AvatarWrrap> <io.IoPaperPlaneOutline /></AvatarWrrap> 
             <SaveAvatar><io.IoBookmarkOutline/></SaveAvatar>
             </Icons>
              <PostLikes>{chosenPost.likers.length} likes</PostLikes>
              <PostTime>{chosenPost.createDate} AGO</PostTime>
            </PostStateBox>
            <PostIput placeholder='Add a comment ...' />
          </PostDescription>
        </ChosenPost>
      </Cover>}
    </>
  );
}

export default App;
