import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
    padding-top: 50px;
    padding-bottom: 30px;
    text-align: center;
`

const SectionHeader = styled.h4`
    text-align: center;
`

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 700px;
`

export default () =>
    <div>
        <Header>
            About
        </Header>

        <Wrapper>
            <section>
                <p>
                    pubg.sh started as an experiment to work with GraphQL, React, and canvas, but it’s grown
                    into a decently featured 2D replay app that I plan on maintaining and improving as time
                    allows. I’m happy to consider suggestions, pull requests, and bug reports on GitHub.
                    The project is open-source and available at two repositories:
                </p>

                <ul style={{ listStyleType: 'none' }}>
                    <li><a href="https://github.com/apazzolini/pubg.sh-api">apazzolini/pubg.sh-api</a></li>
                    <li><a href="https://github.com/apazzolini/pubg.sh-client">apazzolini/pubg.sh-client</a></li>
                </ul>
            </section>

            <section>
                <SectionHeader>Roadmap</SectionHeader>

                <ul>
                    <li>Progress bar during telemetry download</li>
                    <li>Interpolate positions in between known telemetry points</li>
                    <li>Different dot color for knocked down players</li>
                    <li>Pulse animation on a dot when they kill someone</li>
                    <li>Pulse animation on a dot when they are revived</li>
                    <li>Additional default tracked players including victims, killer, winners</li>
                    <li>Indicator when riding in a vehicle</li>
                    <li>Bullet trails</li>
                </ul>
            </section>

            <section>
                <SectionHeader>Change history</SectionHeader>

                <h5>2018-05-22</h5>
                <ul>
                    <li>Version 1.0.0 made publicly available.</li>
                </ul>
            </section>
        </Wrapper>
    </div>