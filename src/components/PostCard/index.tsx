import { PostCardProps } from "./post-card.type";

export const PostCard = (props: PostCardProps) => {
  const { body, title, cover } = props;
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1 className="content">{title}</h1>
        <p className="content">{body}</p>
      </div>
    </div>
  );
};
