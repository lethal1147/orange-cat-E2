import './homebmi.css'
import bmiImageStrong from '../../../assets/homepage/hero-img.png'
import bmiImageUnder from '../../../assets/homepage/hero-img-pom.png'
import bmiImageOver from '../../../assets/homepage/hero-big.png'

export default function Homebmi({bmiInput, onChange, onClick}) {
    
    return (
        <section id="bmi" className="bmi-section">
            <div className="bmi-form-container">
                <form className='bmi-form'>
                    <h3>BMI Calculator</h3>
                    <input placeholder='Your Height!' onChange={onChange} name="height" value={bmiInput.height} />
                    <input placeholder='Your Weight!' onChange={onChange} name="weight" value={bmiInput.weight} />
                    <span>{bmiInput.bmi}</span>
                    <button onClick={onClick}>Calculate</button>
                </form>
            </div>
            <div className="bmi-image-container">
                {bmiInput.shape === 'strong' && <img src={bmiImageStrong} alt='strong orange-cat' />}
                {bmiInput.shape === 'under' && <img src={bmiImageUnder} alt='strong orange-cat' />}
                {bmiInput.shape === 'over' && <img src={bmiImageOver} alt='strong orange-cat' />}
            </div>
        </section>
    )
}