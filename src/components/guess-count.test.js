import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count.js';

describe('<GuessCount />', ()=>{
    
    it('renders without crashing', ()=>{
        shallow(<GuessCount />);
    });

    it('will output a sentence about our guess', ()=>{
        const wrapper = mount(<GuessCount guessCount={1}/>);
        expect(wrapper.text()).toEqual("You've made 1 guess!");
    });

    it('will output a sentence about our guesses (plural)', ()=>{
        const wrapper = shallow(<GuessCount guessCount={900}/>);
        expect(wrapper.text()).toEqual("You've made 900 guesses!");
    })

})
    

