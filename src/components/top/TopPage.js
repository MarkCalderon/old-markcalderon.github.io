import React from 'react'

import KvSec from './section/KVSec'
import IntroSec from './section/IntroSec'
import ServiceSec from './section/ServiceSec'
import StatSec from './section/StatSec'
import ProjectSec from './section/ProjectSec'

export default class TopPage extends React.Component {
    render() {
        return (
            <main className="mainSection">
                <KvSec></KvSec>
                <IntroSec></IntroSec>
                <ServiceSec></ServiceSec>
                <ProjectSec></ProjectSec>
                {/* <StatSec></StatSec> */}
            </main>
        )
    }
}