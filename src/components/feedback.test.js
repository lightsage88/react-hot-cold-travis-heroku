import React from 'react';

import {shallow, mount} from 'enzyme';

import Feedback from './feedback.js';

describe('<Feedback/>', ()=>{
   
    it('renders without crashing', ()=>{
        shallow(<Feedback />);
    })

    it('will render the string passed to it as the [prop] feedback', ()=>{
        const wrapper = shallow(<Feedback feedback={'testFeedbackString'}/>);
        expect(wrapper.contains('testFeedbackString')).toBe(true);
    })
});
// it('will do the above and have a guessAgain phrase added', ()=>{
//     const wrapper = shallow(<Feedback feedback={'mystikal'} guessCount={1}/>);
//     expect(wrapper.contains('mystikal Guess again!')).toBe(true);
// })

