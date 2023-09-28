import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <img className="footerImage" src="../../public/favicon.png" alt="Monument Comics Logo" />
            <div className="footerSocialMedia">
                <h4 className="footerMessage">Follow Monument Comics On Social Media</h4>
                <div className="footerSocialIcons">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="footerSocialIcon fa-brands fa-square-instagram"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="footerSocialIcon fa-brands fa-square-twitter"></i></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="footerSocialIcon fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <hr />
            <h4 className="footerCopyright">&copy; Monument Comics, All Rights Reserved | Designed By Branden Hood</h4>
        </div>

    )
}

export default Footer;