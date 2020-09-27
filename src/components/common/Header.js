import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <header className="siteHeader">
                <div className="siteHeader__inner">
                    <div className="siteHeader__innerSite">
                        <a href="./">
                            <img className="siteHeader__innerSiteName" src="./../assets/img/common/portfolio-02.png" />
                        </a>
                    </div>
                    <div className="siteHeader__innerDirectoryList flex__field">
                        <div className="siteHeader__innerDirectoryListItem">
                            <a href="https://twitter.com/markzev0" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div className="siteHeader__innerDirectoryListItem">
                            <a href="https://github.com/MarkCalderon" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        <div className="siteHeader__innerDirectoryListItem">
                            <a href="https://www.linkedin.com/in/markcalderon/" target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}