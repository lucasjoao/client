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
                    <li><a href="https://github.com/pubgsh/api">pubgsh/api</a></li>
                    <li><a href="https://github.com/pubgsh/client">pubgsh/client</a></li>
                </ul>
            </section>

            <section>
                <SectionHeader>Roadmap</SectionHeader>

                <p>
                    The current roadmap is
                    <a href="https://github.com/orgs/pubgsh/projects/1">&nbsp;available on GitHub&nbsp;</a>.
                    If you’d like to see what’s coming up next or submit a feature request or bug, please
                    do so on GitHub.
                </p>
            </section>

            <section>
                <SectionHeader>Change history</SectionHeader>

                <h5>2018-06-12</h5>
                <ul>
                    <li>Render alive players count (Thanks @mikkokeskinen)</li>
                    <li>Render care packages (Thanks @mikkokeskinen)</li>
                    <li>Render bullet tracers (Thanks @mikkokeskinen)</li>
                    <li>Add custom game support</li>
                    <li>Add direct link to player page from roster</li>
                </ul>

                <h5>2018-06-07</h5>
                <ul>
                    <li>Show player health on dots</li>
                    <li>Track player health (Thanks @sevirinov)</li>
                    <li>Track knocked-down state (Thanks @sevirinov)</li>
                    <li>New player tooltips</li>
                    <li>Add XBOX support</li>
                    <li>Track players by clicking on them, shift+click to track full squad</li>
                    <li>Several small UI and UX improvements</li>
                </ul>

                <h5>2018-05-29</h5>
                <ul>
                    <li>Finer grain control of autoplay speed</li>
                    <li>Rank and kills on match list page</li>
                    <li>Sub-second interpolation</li>
                    <li>Use requestAnimationFrame instead of setInterval</li>
                </ul>

                <h5>2018-05-28</h5>
                <ul>
                    <li>Queue users and update via Websockets when PUBG is rate limited</li>
                    <li>Adjustable autoplay speed</li>
                    <li>UI/UX improvements</li>
                </ul>

                <h5>2018-05-23</h5>
                <ul>
                    <li>Added map zooming and panning (scroll wheel)</li>
                    <li>Interpolate positions in between known telemetry points</li>
                    <li>Show player last fetched time</li>
                </ul>

                <h5>2018-05-22</h5>
                <ul>
                    <li>Version 1.0.0 made publicly available.</li>
                </ul>
            </section>
        </Wrapper>
    </div>

