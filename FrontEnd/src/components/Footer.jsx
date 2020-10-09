import React from "react"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <div className="">
                Copyright © {currentYear}:
                <a className="rodape" href="https://twitter.com/joaomariok"> @JoaoMarioK</a>
            </div>
        </footer>
    )
}   

export default Footer;