import './CreateCard.css'
import { useState } from 'react'
import Layout from "../../component/layout/layout"
import PrevCard from "../../component/createCard-prevCard/PrevCard"
import caiBiceps from "../../assets/images/CreateCard/catBiceps.png"
import Form from '../../component/createCard-form/Form'

function CreateCard () {
    
    const [ inputs, setInputs] = useState ({
        title: 'This is title',
        caption: 'I wish I was a cat, no school, no work, no exercise, just meow meow meow meow meow',
        time_start: '',
        time_end: '',
        duration: '1 h 30 m',
        date: '2023-03-18',
        task: '',
        type: ''
    })

    const [ task, setTask ] = useState('');

    function calcDuration () {
        let tStart = inputs.time_start;
        let tEnd = inputs.time_end;
        // console.log(tStart, tEnd);
    
        //convert timeStart and timeEnd to milliseconds
        let milliseconds1 = Number(tStart.split(':')[0]) * 60 * 60 * 1000 + Number(tStart.split(':')[1]) * 60 * 1000;
        let milliseconds2 = Number(tEnd.split(':')[0]) * 60 * 60 * 1000 + Number(tEnd.split(':')[1]) * 60 * 1000;
        // console.log(milliseconds1, milliseconds2);
    
        //find differences in milliseconds
        let difference = Math.abs(milliseconds2 - milliseconds1);
        if (milliseconds2 < milliseconds1) {
            difference = 86400000 - difference;
        }
        // console.log(difference)
    
        let msec = difference;
                let hh = Math.floor(msec / 1000 / 60 / 60);
                msec -= hh * 1000 * 60 * 60;
                //console.log('hh ' + hh);
                //console.log('hh ' + msec);
                let mm = Math.floor(msec / 1000 / 60);
                //console.log('mm1 ' + mm);
                msec -= mm * 1000 * 60;
                //console.log('mm2 ' + msec);
                let ss = Math.floor(msec / 1000);
                msec -= ss * 1000;
    
                // console.log(hh + ":" + mm + ":" + ss);
    
                //prepare to display in preview card
                let displayHour = hh + ' h';
                let displayMin = mm + ' m'
                // console.log(displayHour, displayMin)
    
                let hour;
                let min; 
                if (hh === 0) {
                    hour = '';
                    min = displayMin;
                } else if (mm === 0) {
                    hour = displayHour;
                    min = '';
                } else if (hh > 0 && mm > 0) {
                    hour = displayHour;
                    min = displayMin;
                } else {
                    hour = '0 h';
                    min = '0 m';
                }
                let calculateDuration = `${hour} ${min}`
                setInputs({...inputs,duration:calculateDuration})
        }

        let changeColor = (e) => {
            const color = ['#96d674', '#fff476', '#fd8888']
            const { value } = e.target
            if (value == 'complete') {
                //console.log('you click green')
                setTask(color[0])
            }
            if (value == 'inProgress') {
                //console.log('you click yellow')
                setTask(color[1])
            }
            if (value == 'fail') {
                // console.log('you click red')
                setTask(color[2])
            }
        }

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        //console.log({...inputs})
        setInputs({...inputs,[name]: value})
        // console.log({...inputs})
    }

    //console.log(inputs)
    return (
        <Layout>
            <div className='create-card-container'>
                <div className='bg'>
                    <div className='sideContainer'>
                        <div className='sideText'>
                            <h1 className='greyText'>Be The <br /> <span className='orangeText'>STRONGEST</span> Cat!!!</h1>
                        </div>
                        <img src={caiBiceps} className='sideIMG'></img>
                    </div>
                    <div className='container'>
                        <div className='head-sentence'>
                            <h1 className='firsttopic'>Create Your Awesome Card</h1>
                            <h2 className='secondtopic'>Did You Meow Today?</h2>
                            <h3 className='thirdtopic'>Today's Workout</h3>
                        </div>
                        <PrevCard inputs={inputs} task={task} />
                        <Form handleChangeInput={handleChangeInput} calcDuration={calcDuration} changeColor={changeColor}  />
                        
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export default CreateCard