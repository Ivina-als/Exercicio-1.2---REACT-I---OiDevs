import "./App.css";
import { Component } from "react";
import { PostCard } from "./components/PostCard";
import { loadPosts } from "./requests/load-posts";
import { PostCardProps } from "./components/PostCard/post-card.type";

class App extends Component {
  state = {
    posts: Array<PostCardProps>(),
  };

  async componentDidMount() {
    await this.handleLoadPosts();
  }

  handleLoadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
