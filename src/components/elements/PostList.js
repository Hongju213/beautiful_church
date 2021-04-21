import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  const boardList = posts.data;
  return (
    <table>
      {boardList.map(post => (
        <tr key={post.no}>
          <Link to={`bulletins/${post.no}`}>{post.title}</Link>
        </tr>
      ))}
    </table>
  );
}

export default PostList;
