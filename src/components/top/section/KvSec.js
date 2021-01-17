import React from 'react'

const scrollParallax = () => {
    window.addEventListener('scroll', () => {
        let distance = window.scrollY
        document.querySelector('.kvSec__innerImageThumb').style.transform = `translateY(${distance * 0.5}px)`
    })
}


const KvSec = () => {
    scrollParallax()
    return (
        <section className="kvSec">
            <div className="kvSec__inner">
                <div className="kvSec__innerImageArea topSection">
                    <div className="kvSec__innerImageThumb"></div>
                    <div className="kvSec__innerTextArea">
                        <h1 className="kvSec__innerTextAreaName">Mark Angeo Calderon</h1>
                        <h2 className="kvSec__innerTextAreaTitle">Front end web developer</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KvSec