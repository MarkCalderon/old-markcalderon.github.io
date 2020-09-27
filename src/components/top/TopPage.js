import React from 'react'

import KvSec from './section/KVSec'
import ServiceSec from './section/ServiceSec'
import StatSec from './section/StatSec'

export default class TopPage extends React.Component {
    render() {
        return (
            <main className="mainSection">
                <KvSec></KvSec>
                <ServiceSec></ServiceSec>
                <StatSec></StatSec>
            </main>
        )
    }
}