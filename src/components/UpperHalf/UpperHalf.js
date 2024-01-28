import './UpperHalf.css'
import hero from "../../images/hero-image.PNG"

const UpperHalf = () =>{
    return(
        <div className='upperHalf'>
            <img src={hero} className='hero-image' alt='hero'/>
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default UpperHalf;