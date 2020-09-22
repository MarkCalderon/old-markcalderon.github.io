import React from 'react'

import ServiceSec from './section/ServiceSec'
import StatSec from './section/StatSec'

export default class TopPage extends React.Component {
    render() {
        return (
            <main className="mainSection">
                <ServiceSec></ServiceSec>
                <StatSec></StatSec>
            </main>
        )
    }
}