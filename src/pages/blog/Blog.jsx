import "./blog.css";
import Posts from "./posts/Posts";
import Icon from "../../assets/Icon.png";

function Blog() {
    return (
        <div className="blog">
            <div className="blogIconWrapper">
                <img className="blogIcon" src={Icon} alt="Monument Comics Logo" />
            </div>

            <h1 className="blogTitle">MONUMENT COMICS NEWS</h1>
            <hr />
            <div className="blogPostsWrapper">
                <Posts />
            </div>
        </div>
    )
}

export default Blog;