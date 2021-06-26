
import Photo from '../../Images/png-1.png'
import Gambar from '../../Images/svg-1.svg'
import Illus from '../../Images/svg-2.svg'

export const homeObjOne = {
    id : 'about',
    lightBg : false, 
    lightText : true,
    lightTextDesc : true,
    topLine : 'FINANCE APP FOR UMKM',
    headline : 'A new standard in  managing a busines',
    description : 'Meet Financetify- the next generation UMKM manager software that solve existing problems one by one in real time. So that you can focus more on  planning a business development  strategy.',
    buttonLabel: 'Read More',
    imgStart: true,
    img: Photo,
    alt:'hp', 
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObjTwo = {
    id : 'discover',
    lightBg : true, 
    lightText : false,
    lightTextDesc : false,
    topLine : 'Unlimited Access',
    headline : 'Login to your account at any time',
    description : 'We have you covered on matter where are you located. All you need is internet connection and phone or computer',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: Gambar,
    alt:'illus', 
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObjThree = {
    id : 'signup',
    lightBg : true, 
    lightText : false,
    lightTextDesc : false,
    topLine : 'JOIN WITH FINANCETIFY',
    headline : 'Creating an account is extremely easy',
    description : 'Get everything set up and ready in 10 minutes. All you need to do is add your information and you`re ready to go.',
    buttonLabel: 'Start Now',
    imgStart: true,
    img: Illus,
    alt:'sign', 
    dark: true,
    primary: true,
    darkText: false,
}

