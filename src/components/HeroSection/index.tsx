import React, { useState } from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './styles'
import {HeroTrendingToday, Grid, FirstArea, Area} from './styles'
import Image from '../../images/satellite-min.jpg'


export function HeroSection () {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <img src={Image} no-repeat alt="background"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    SPACE
                    <span>.</span>
                </HeroH1>
                <HeroP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie elit at lacus…
                </HeroP>
                <HeroBtnWrapper>
                    <button type='button'
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                    >
                        click 
                    </button>
                </HeroBtnWrapper>

                <HeroTrendingToday>
                    <Grid>
                        <FirstArea>Trending <br/><span>Today</span></FirstArea>
                        <Area>Lorem ipsum dolor sit amet,
                                consectetuer adipiscing
                                ligula eget dolor
                        </Area>
                        <Area>
                            Lorem ipsum dolor sit amet,
                            consectetuer adipiscing
                            ligula eget dolor
                        </Area>
                        <Area>
                            Lorem ipsum dolor sit amet,
                            consectetuer adipiscing
                            ligula eget dolor
                        </Area>
                    </Grid> 
                </HeroTrendingToday>
            </HeroContent>
        </HeroContainer>
    )
}
