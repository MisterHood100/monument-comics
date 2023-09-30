import "./announcement.css";

function Announcement() {
    return (
        <div className="announcement">
            <div className="announcementLeft">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="announcementSocialIcon fa-brands fa-square-instagram"></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="announcementSocialIcon fa-brands fa-square-twitter"></i></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="announcementSocialIcon fa-brands fa-youtube"></i></a>
            </div>
            <div className="announcementCenter">
                <h1 className="announcementTitle">WELCOME TO THE WORLD OF MONUMENT COMICS</h1>
            </div>
            <div className="announcementRight">
                <a href="mailto:bhood@monumentcomicsworld.com"><i className="announcementEmailIcon fa-solid fa-envelope"></i></a>
            </div>
        </div>
    )
}

export default Announcement;