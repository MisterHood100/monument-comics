import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <h3 className="footerMessage">FOLLOW MONUMENT COMICS ON SOCIAL MEDIA</h3>
            <div className="footerSocialIcons">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="footerSocialIcon fa-brands fa-square-instagram"></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="footerSocialIcon fa-brands fa-square-twitter"></i></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="footerSocialIcon fa-brands fa-youtube"></i></a>
            </div>
        </div>

    )
}

export default Footer;