export const PostCard = (props) => {
  const { post } = props;
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h1 className="content">{post.title}</h1>
        <p className="content">{post.body}</p>
      </div>
    </div>
  );
};
