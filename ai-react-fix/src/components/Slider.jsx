import {useEffect, useState} from 'react';
import styled from 'styled-components';

const SliderBackground = styled.div`
    width: 100%;
    height: 50%;
    background: linear-gradient(90deg, #01735c 0%, #01735c ${props => props.middle - 1}%, var(--accent-color) ${props => props.middle}%, var(--accent-color) 100%);
    border-radius: 10px;
    position: relative;
    `;

const SliderButton = styled.div`
    width: 20px;
    height: 20px;
    background-color: #01735c;
    border 3px solid #00d0a8;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    cursor: pointer;
    `;

export default function Slider({
    min=0,
    max=100,
    steps,
    color,
    name = '',
    label='',
    description='',
}) {
    const [value, setValue] = useState(min);

    useEffect(() => {
        const slider = document.querySelector(`#slider-${name}`);
        const sliderThumb = document.querySelector(`#slider-thumb-${name}`);
        const sliderController = document.querySelector(`#slider-controller-${name}`);
        let stepList = [];
        let sliderWidth = 0;
        let stepDistance = 0;
        let sliderLeft = 0;
        let sliderRight = 0;
        let mousePosition = 0;
        let closestStep = 0;
        

        sliderController.addEventListener('dragstart', (e) => {
            sliderWidth = slider.offsetWidth;
            stepDistance = sliderWidth / steps;
            sliderLeft = slider.getBoundingClientRect().left;
            sliderRight = slider.getBoundingClientRect().right;
            
            for (let i = 0; i < steps; i++) {
                stepList.push(sliderLeft + (stepDistance * i));
            }
            stepList.push(sliderRight);
        });
        // event listener that tracks mouse positionX when sliderThumb is clicked and dragged across slider
        sliderController.addEventListener('drag', (e) => {
            mousePosition = e.clientX;
            //compare mousePosition to stepList and set sliderThumb left position to closest step
            for (let i = 0; i < stepList.length; i++) {
                if (Math.abs(mousePosition - stepList[i]) < Math.abs(mousePosition - closestStep)) {
                    if(mousePosition !== 0) {
                        setValue(Math.round(min + ((max - min) / steps) * i));
                        closestStep = stepList[i];
                    }
                }
            }
            sliderThumb.style.left = `${closestStep - sliderLeft}px`;
            sliderController.style.left = `${closestStep - sliderLeft}px`;
        });
        sliderController.addEventListener('dragend', (e) => {
            sliderThumb.style.left = `${closestStep - sliderLeft}px`;
            sliderController.style.left = `${closestStep - sliderLeft}px`;
        });
    }, []);
    return(
        <>
            <p>{label}</p>
            <p>{value}</p>
            <p>{description}</p>
            <div id={`slider-${name}`} style={{position: 'relative', width: '80%', height: '20px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <SliderBackground id="test-id" middle={(value/max) * 100}/>
                <SliderButton id={`slider-thumb-${name}`}/>
                <SliderButton id={`slider-controller-${name}`} draggable="true" style={{opacity: '0'}}/>
            </div>
        </>
        
    )
}

