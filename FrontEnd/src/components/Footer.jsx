import React from "react"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="fixed-bottom footer">
            <div className="footer-copyright text-center py-3">
                Copyright © {currentYear}:
                <a className="rodape" href="https://twitter.com/joaomariok"> @JoaoMarioK</a>
            </div>
        </footer>
    )
}   

export default Footer;