import React from 'react'
import { Button } from '../ButtonElements'
import  {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtittle, BtnWrap, ImgWrap, Img} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtittle darkText={darkText}>{description}</Subtittle>
                                <BtnWrap>
                                    <Button to='home' 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact="true" 
                                    offset={-80} 
                                    >
                                    {buttonLabel}</Button> 
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/> 
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
