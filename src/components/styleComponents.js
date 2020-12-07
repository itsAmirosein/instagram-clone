import styled,{keyframes} from 'styled-components'


export const Wrraper = styled.div`
width:960px;
max-width:95%;
height:auto;

margin:20px auto;
display:grid !important;
grid-template-areas:'. TrItem TrItem'
                    '. TrItem TrItem';
 justify-content:space-between; 
 row-gap:30px;
 column-gap:30px;

 align-content:space-between;                  
                                    
`
export const Modal = styled.div`
   position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    z-index:3;
    display:none;
    color:white;
   font-size:16px;
   font-weight:700;
`

export const Item = styled.div`

width:300px;
height:300px;
position:relative;
&:hover{
${Modal}{
    display:flex;
    align-items:center;
    justify-content:center;
    }
}


`

export const TrendItem = styled.div`

grid-area:TrItem;
position:relative;  
&:hover{
    ${Modal}{
        display:flex;
align-items:center;
justify-content:center;
    }
}
 
`

export const ExpIcons = styled.div`
color:white;
padding:7px;
font-size:25px;

`

const zoomIn = keyframes`
  from{
    transform:scale(0,0)
  
  }
  
  to{
    transform:scale(100%,100%)
  }

`
const fadeIn = keyframes`
from{
  opacity:0;
}
to{
  opacity:1;
}
`

export const Cover = styled.div`
opacity:0;
width:100%;
z-index:100;
height:100vh;
background-color:rgb(186,186,186,0.6);
position:fixed;
top:0px;
left:0px;
display:flex;
justify-content:center;
align-items:center;
animation:${fadeIn} 0.3s ease;
animation-fill-mode:forwards;

`

export const ChosenPost = styled.div`
width:960px;
max-width:95%;
height:600px;
display:flex;
flex-direction:row;
animation:${zoomIn} 0.3s ease;
animation-fill-mode:forwards;


`
export const PostDescription = styled.div`
width:360px;
background-color:white;


`
export const PostHeader = styled.div`
padding:20px;
height:72px;
display:flex;
flex-direction:row;
align-items:center;
font-weight:700;
font-size:15px;
position:relative;
border-bottom:1px solid #E1E1E1;

`
export const PostComments = styled.div`
padding:16px;
height:370px;
overflow-y:scroll;
::-webkit-scrollbar {
  display:none !important;
}

`
export const PostStateBox = styled.div`
border-bottom:1px solid #E1E1E1;
border-top:1px solid #E1E1E1;
height:101px;

`
export const PostIput = styled.input`
width:100%;
padding:0px 16px;
height:56px;
outline:none;
border:none;
&:placeholder{
  font-size:24px;
}

`
export const UserName = styled.div`
margin-left:20px;
`
export const IsFollowed = styled.div`
color:#0095f6;
`
export const Menu = styled.div`
display:flex;
align-items:center;
font-size:20px;
position:absolute;
right:0px;
margin-right:10px;
`
export const Doute = styled.div`
display:flex;
align-items:flex-start;
font-size:30px;
padding:0 6px 20px 9px;
`

export const CommentsWrraper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;



`
export const Caption = styled.div`
position:relative;
width:250px;
padding:2px 10px;

`

export const CaptionUserName = styled.span`
position:relative;
top:0px;
left:0px;
padding:0 4px;
font-weight:700;
`

export const AvatarWrraper = styled.div`
display:flex;
align-items:flex-start;
padding:7px;


`
export const Houer = styled.div`
padding: 10px 0 20px 0;
font-size:12px;
color:#535353;
`

export const LoadMore = styled.div`
width:100%;
padding-bottom:20px;
font-size:29px;
color:#7D7D7D;
display:flex;
justify-content:center;
align-items:center;
`



export const CommentInfo = styled.div`
display:flex;
flex-direction:row;

`
export const Commnetdate = styled.span`
padding:15px 10px 20px 0;
font-size:12px;
font-weight:700;
color:#7D7D7D;
`
export const CommentLiks = styled.span`
padding:15px 10px 20px 0;
font-size:12px;
font-weight:700;
color:#7D7D7D;
`
export const Reply = styled.span`
padding:15px 10px 20px 0;
font-size:12px;
font-weight:700;
color:#7D7D7D;
`
export const AvatarWrrap = styled.div`
font-size:27px;
padding:3px 7px;
`
export const SaveAvatar = styled.div`
font-size:27px;
padding:3px 7px;
position:absolute;
right:0;
`
export const Icons = styled.div`
display:flex;
flex-direction:row;
position:relative;
`
export const PostLikes = styled.div`
padding:3px 7px;
font-size:13px;
font-weight:700;
`
export const PostTime = styled.div`
font-size:10px;
color:#767676;
padding:3px 7px;
`
