import React from 'react'
import styled from "styled-components";

const Main = (props) => {
    return <Container>
                    <SharedBox>
                        Share
                    <div>
                        <img src="./images/user.svg" alt="" />
                        <button>Start a post</button>
                    </div>
                    <div>
                        <button>
                        <img src="/images/photo-icon.svg" alt="" />
                        <span>Photo</span>
                        </button>
                        <button>
                        <img src="/images/video-icon.svg" alt="" />
                        <span>Video</span>
                        </button>
                        <button>
                        <img src="/images/event-icon.svg" alt="" />
                        <span>Event</span>
                        </button>
                        <button>
                        <img src="/images/article-icon.svg" alt="" />
                        <span>Aricles</span>
                        </button>
                        
                    </div>
                    </SharedBox>
                    <div>
                        <Article>
                            <SharedActor>
                                <a>
                                <img src="./images/user.svg" alt="" />
                                <div>
                                    <span>Title</span>
                                    <span>Info</span>
                                    <span>Date</span>
                                </div>
                            <div>
                            </div>
                                </a>
                                <button>
                                <img src="./images/ellipsis.svg" alt="" />
                                </button>
                            </SharedActor>
                            <Description>
                              Description
                            </Description>
                            <SharedImg>
                                <a>
                                    <img src="images/phuket.jpg" alt="" />
                                </a>
                            </SharedImg>
                            <SocialCounts>
                                <li>
                                <button>
                                    
                                        <img src="http://www.userflow.nl/images/Linkedin-Like-Icon-Thumbup500.png" alt="" />
                                        <img src="data:image/png;base64,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" alt="" />
                                        <spam>75</spam> 
                                    </button>
                                </li>
                                <li>
                                    <a>2 Comments</a>
                                </li>
                            </SocialCounts>
                            <SocialAction>
                            <button>
                                <img src="./images/like.png" alt="" />
                                <span>Like</span>
                            </button>
                            <button>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6zjrNqPj4uoR-x7kTSWRTSLecNmRQKlUl-oMFurFFVFJE9ZexhL0GHDFGB08tIju6yo&usqp=CAU" alt="" />
                                <span>Comments</span>
                            </button>
                            <button>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6zjrNqPj4uoR-x7kTSWRTSLecNmRQKlUl-oMFurFFVFJE9ZexhL0GHDFGB08tIju6yo&usqp=CAU" alt="" />
                                <span>Share</span>
                            </button>
                            <button>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6zjrNqPj4uoR-x7kTSWRTSLecNmRQKlUl-oMFurFFVFJE9ZexhL0GHDFGB08tIju6yo&usqp=CAU" alt="" />
                                <span>Message</span>
                            </button>
                            </SocialAction>
                            </Article>
                    </div>
        </Container>


}
    const Container = styled.div`
    grid-area:main;
`;
const CommonCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
position - relative;
border:none;
box-shadow:0,0,0,1px rgb(0,0,0 /15%),0,0,0 rgb(0,0,0/20%);
`;

const SharedBox  = styled(CommonCard)`
display:flex;
flex-direction: column;
color:#958b7b;
margin:0 0 8px;
background:white;

div{
    button { 
outline:none;
color:rgba(0,0,0,0.6)
font-size:14px;
line-height:1.5;
min-height:48px;
background:transparent;
border:none;
display:flex;
align-items:center;
font-weight:600;
}
&:first-child{
    display:flex;
    align-items:center;
    padding:8px 16px 0px 16px;
    img {
        width:48px;
        border-radius:50%;
        margin-right:8px;
    }
    button{
        margin:4px 0;
        flex-grow:1;
        border-radius:35px;
        padding-left:16px;
        border:1px solid rgba(0,0,0,0.15);
        background-color:white;
        text-align:left; 
    }
  }
  &:nth-child(2){
      display:flex;
      flex:wrap;
      justify-content:space-around;
      padding-bottom:4px;

      button{
          img{
              margin:0 4px 0 -2px;
          }
          span{
              color:#70b5f9
          }
      }
  }
}
`;
const Article = styled(CommonCard)`
   padding:0;
   margin:0 0 8px;
   overflow:visible;
`;
const SharedActor = styled.div`
paddinh-right=40px;
  flex-wrap:nowrap;
  padding:12px 16px 0;
  margin-bottom:8px;
  align-items:center;
  display:flex;

  a{
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;
    img{
      width:48px;
      height:48px;
    }
    & > div{
      display:flex;
      flex-direction:column;
      flex-grow:1;
      flex-basis:0;
      margin-left:8px;
      overflow:hidden;
      span{
        text-align:left;
        &:first-child{
          font-size:14px;
          font-weight:700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n +1){
           font-size:12px;
           color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button{
    possition:absolute;
    right: 12px;
    top:0;
    background:transparent;
    border:none;
    outline: none;
    
    img{
      width:20px;
      height:20px;
      padding-bottom: 20px;
      
    }
  }
`;

const Description = styled.div`
 padding: 0 16px;
 overflow:hidden;
 color: rgba(0, 0, 0, 0.9);
 font-size: 14px;
 text-align: left;
 `;

 const SharedImg = styled.div`
  margin-top:8px;
  width:100%;
  display:block;
  position:relative;
  background-color: #f9fafb;
  img{
    object-fit:contain;
    width: 100%;
    height:400%;
    
  }
 `;

 const SocialCounts = styled.ul`
 line-height:1.3;
 display:flex;
 align-items:center;
 overflow:auto;
 margin:0 16px;
 padding:8px 0;
 border-bottom:1px solid #e9e5df;
 list-style:none;
 Button{
   align-items:center;
   background-color:transparent;
   border: none;
 }
 li{
   margin-right:5px;
   font-size:12px;
   button{
     display:flex;
   }
   img{
     width:25px;
   }
 }
 `;

 const SocialAction = styled.div`
  align-items:center;
  display:flex;
  justify-content:space-between;
  margin:0;
  min-height:40px;
  padding:4px 70px 8px 9px;
  
  button{
    display:inline-flex;
    align-items:center;
    color: #0a66c2;
     width:50px;
     height: 50px;
    background-color:transparent;
    border:none;
    // space-between:
    
    img{
      width:50px;
      height:50px;
    }
    @media(min-width:768px){
      span{
        margin-left:8px;
      }
    //   a{
    //     margin-left:8px;
    //   }
    }
  }
 `;
export default Main
