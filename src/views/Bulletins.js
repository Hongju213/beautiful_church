import React from 'react';
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
      <>
      <BulletinsContents className="illustration-section-01" />
      <PostContainer postId={parseInt(id, 10)} />
      
      </>
    </>
  );
}

export default Bulletins;