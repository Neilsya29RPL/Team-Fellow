import React , {useState} from 'react'
import Video from '../../Videos/video.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, Herobg, VideoBg, HeroContent, HeroH1, HeroP,HeroH5, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <Herobg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </Herobg>
            <HeroContent>
                <HeroH5><b>Finance App</b></HeroH5>
                <HeroH1>Why stay having trouble when you can use Financetify</HeroH1>
                <HeroP>
                    Sign up for a new account and manage your bussiness in Financetify
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter=
                    {onHover} onMouseLeave={onHover}
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                    >Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection;
