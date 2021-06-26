import React from 'react'
import { FeaturesContainer,  FeaturesH1, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesP, FeaturesH2} from './FeaturesElements'
import Icon1 from '../../Images/icon-1.png'
import Icon2 from '../../Images/icon-2.png'
import Icon3 from '../../Images/icon-3.png'
const Features = () => {
    return (
        <>
        <FeaturesContainer id="features">
            <FeaturesH1>Our Features</FeaturesH1>
                <FeaturesWrapper>
                    <FeaturesCard>
                        <FeaturesIcon src={Icon1}/>
                        <FeaturesH2>Financetify Goals</FeaturesH2>
                        <FeaturesP>In this feature, you can set your own financial goals or goals. It will make it easier and so that your finances are successful.</FeaturesP>
                    </FeaturesCard>
                    <FeaturesCard>
                        <FeaturesIcon src={Icon2}/>
                        <FeaturesH2>Financetify Savings</FeaturesH2>
                        <FeaturesP>In this feature, you can do savings activities so that your financial condition can be more stable and maintained.</FeaturesP>
                    </FeaturesCard>
                    <FeaturesCard>
                        <FeaturesIcon src={Icon3}/>
                        <FeaturesH2>Financetify Investation</FeaturesH2>
                        <FeaturesP>This feature provides several types of investments, namely stocks, savings, deposits, state bonds, and gold..</FeaturesP>
                    </FeaturesCard>
                </FeaturesWrapper>     
        </FeaturesContainer>
       
            
        </>
    )
}

export default Features
