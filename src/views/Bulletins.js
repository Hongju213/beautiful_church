import React from 'react';
import ReactPlayer from 'react-player';
import BulletinsContents from '../components/sections/BulletinsContents';
import PostContainer from '../containers/PostContainer';



const Bulletins = ({ match }) => {
  const { id } = match.params;
  // if (loading && !data) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  // if (error) return <div>에러 발생!</div>;
  // if (!data) return null;

  // const isReady = data && !loading

  return (
    <>
      
      <div style={{marginTop: '20%'}}>
        <BulletinsContents className="illustration-section-01" />
      </div>
      {/* <PostContainer postId={parseInt(id, 10)} /> */}
      <div style={{ display:'inline-block', position: "fixed", top: '0', left: '30%', right: '0%', width:'20%', index: '2'}}>
        <ReactPlayer url='https://youtu.be/Qni9o9AHqEw' playing controls/>
      </div>
    </>
  );
}

export default Bulletins;