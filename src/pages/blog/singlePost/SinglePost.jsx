import "./singlePost.css"
import SinglePostImg from "../../../assets/Logo-1.png"

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
                    This is the first blog post on the official Monument Comics website. I originally planned on giving a grand introduction for the website and introducing what Monument Comics represented in its totality, however, I quickly realized that at this moment, I don't care to be so long winded. That will come at a later time when I can fully present the work that I worked tirelessly across these last four years trying to bring to fruition. And some work it was. At this moment I would rather like to keep it succint and straight to the point. No longer is Monument Comics just an infantile idea stuck inside my mind, eating away at my creative conscious as I maniacally visualize its beautiful final form. It is now a reality in its teenage phaze slowly growing to adolescence. At this moment, I can finally say that the World of Monument Comics is no longer nearing its beginning, <b>IT HAS BEGUN!!!</b>
                    <br />
                    <br />
                    <b>#BeMonumental</b>
                </p>
            </div>
        </div>
    )
}

export default SinglePost;