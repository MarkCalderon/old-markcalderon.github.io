import React from 'react'

const ServiceItems = [
    {
        id: 0,
        name: "fas fa-code",
        caption: "TECHNOLOGY",
    },
    {
        id: 1,
        name: "fab fa-searchengin",
        caption: "OPTIMIZATION"
    },
    {
        id: 2,
        name: "fab fa-wordpress",
        caption: "MANAGEABILITY",
    },
]

const ServiceSec = () => {
    return (
        <section className="serviceSec">
            <h2 className="serviceSec__behindText">SERVICE</h2>
            <div className="serviceSec__inner">
                <div className="serviceSec__serviceList">
                    {
                        ServiceItems.map((item, i) => (
                            <div key={i} className="serviceSec__serviceListItem">
                                <figure className="serviceSec__serviceListItemIcon">
                                    <i className={item.name}></i>
                                        <figcaption>{item.caption}</figcaption>
                                </figure>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServiceSec