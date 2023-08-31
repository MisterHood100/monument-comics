import "./posts.css"
import PostImage from "../../../assets/Logo-1.png"
import { NavLink } from "react-router-dom";

function Posts() {
    return (
        <div className="posts">
            <NavLink to="post"><img className="postsImg" src={PostImage} alt="Posts Image" /></NavLink>
            <div className="postsInfo">
                <div className="postsCats">
                    <span className="postsCat">News</span>
                    <span className="postsCat">Comics</span>
                </div>
                <NavLink to="post"><span className="postsTitle">It Has Begun!</span></NavLink>
                <hr />
                <span className="postsDate">July 10, 2023</span>
                <p className="postsDescription">
                At this moment, I can finally say that the World of Monument Comics is no longer nearing its beginning, <b>IT HAS BEGUN!!!</b>
                </p>
            </div>
        </div>
    )
}

export default Posts;