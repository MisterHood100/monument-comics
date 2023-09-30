import "./singlePost.css";
import SinglePostImg from "../../../assets/Logo-1.png";

function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={SinglePostImg} alt="Single Post Img" />
                <h1 className="singlePostTitle">It Has Begun!
                    {/* <div className="singlePostEdit">
                        <i className="fa-solid fa-pen-to-square singlePostIcon"></i>
                        <i className="fa-solid fa-trash singlePostIcon"></i>
                    </div> */}
                    <div className="singlePostCats">
                        <span className="singlePostCat">News</span>
                        <span className="singlePostCat">Comics</span>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Branden Hood</b></span>
                    <span className="singlePostDate"><b>July 10, 2023</b></span>
                </div>
                <hr />
                <p className="singlePostDescription">
                    This is the first blog post on the official Monument Comics website. It has been a hard but extremely fun process of bringing everything together over these last four years. As it stands, Monument Comics is still just at its beginning. Heroes, Villians, storylines, plots, mythologies, etc. have all been fully planned out. At the most, I can confidently say that the foundation for the World of Monument Comics has been laid and is concrete. Next, is to bring everything together in a tangible form that fans, followers and readers can enjoy in twenty-two pages or more of beautiful artwork and immersive, captivating storytelling about characters that I'm sure you'll love. Monument Comics hasn't quite hit the ground running, yet. But, I can at the very least finally say, <b>IT HAS BEGUN!!!</b>
                    <br />
                    <br />
                    <b>#BeMonumental</b>
                </p>
            </div>
        </div>
    )
}

export default SinglePost;