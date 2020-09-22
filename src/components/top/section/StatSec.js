import React from 'react'

const statItem = [
    {
        id: 0,
        backgroundImage: 'http://lorempixel.com/g/450/250/sports/1',
        num: 17,
        title: 'PRODUCT/LANDING PAGE',
    },
    {
        id: 1,
        backgroundImage: 'http://lorempixel.com/g/450/250/sports/2',
        num: 15,
        title: 'WORDPRESS THEMES',
    },
    {
        id: 2,
        backgroundImage: 'http://lorempixel.com/g/450/250/sports/3',
        num: 7,
        title: 'API/SURVEY/CONTACT FORM ',
    }
]


const StatSec = () => {
    return (
        <section className="statSec">
            <h2 className="statSec__header">DEVELOPMENT STATISTICS</h2>
            <div className="statSec__inner">
                <div className="statSec__listArea">
                    {
                        statItem.map((item, i) => (
                            <div key={i} className="statSec__listAreaItem">
                                <figure className="statSec__listAreaImageArea">
                                    <div className="statSec__listAreaImageThumb" style={{backgroundImage: 'url(' + item.backgroundImage + ')'}}></div>
                                    <figcaption className="__statContent">{item.num}</figcaption>
                                </figure>
                                <h4 className="statSec__title">{item.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default StatSec

