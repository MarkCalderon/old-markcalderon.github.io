import React from 'react'

const projectItem = [
    {
        id: 0,
        backgroundImage: './assets/img/project/ProjectX.png',
        url: 'https://certain-plate.surge.sh',
        title: 'PROJECT X',
    },
    {
        id: 1,
        backgroundImage: './assets/img/project/Rouland.png',
        url: 'https://distinct-mountain.surge.sh/',
        title: 'ROULAND',
    },
    {
        id: 2,
        backgroundImage: './assets/img/project/SchoolLP.png',
        url: 'http://beautiful-passenger.surge.sh/',
        title: 'SCHOOL LP',
    },
]


const ProjectSec = () => {
    return (
        <section className="projectSec">
            <h2 className="projectSec__headerText">PROJECTS</h2>
            <div className="projectSec__inner">
                <div className="projectSec__list">
                {
                        projectItem.map((item, i) => (
                            <div key={i} className="projectSec__listItem">
                                <figure className="projectSec__listItemImageArea">
                                    <div className="projectSec__listItemImageThumb" style={{backgroundImage: 'url(' + item.backgroundImage + ')'}}></div>
                                </figure>
                                <h4 className="projectSec__listItemTitleText">{item.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectSec