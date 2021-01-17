import React from 'react'

const IntroSec = () => {
    return (
        <section className="introSec">
            <div className="introSec__inner">
                <figure className="introSec__innerImageArea">
                    <img className="introSec__innerImageThumb" src="./assets/img/top/profile_pic.jpg" alt="profile pic" />
                </figure>
                <div className="introSec__innerTextArea">
                    <p className="introSec__innerParaText">
                        I like to simplify things,<br />yet stay amazing..
                    </p>
                </div>
            </div>
        </section>
    )
}

export default IntroSec