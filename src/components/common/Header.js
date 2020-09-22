import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <header className="siteHeader">
                <div className="siteHeader__inner">
                    <nav>
                        <a className="siteHeader__logo" href="#"></a>
                    </nav>
                </div>
            </header>
        )
    }
}