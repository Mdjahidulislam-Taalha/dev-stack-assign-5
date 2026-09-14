import logoText from "../assets/logo-text.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <img src={logoText} alt="Dev Stack" />

                        <p>
                            Build your ideal development stack with the right technologies
                            for your next project.
                        </p>

                        <div className="footer-socials">
                            <a href="#">GitHub</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div>
                            <h4>PRODUCT</h4>
                            <a href="#">Home</a>
                            <a href="#">Technologies</a>
                            <a href="#">Projects</a>
                        </div>

                        <div>
                            <h4>COMPANY</h4>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <a href="#">Careers</a>
                        </div>

                        <div>
                            <h4>LEGAL</h4>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;