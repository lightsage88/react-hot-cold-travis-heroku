import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form.js';
import { callbackify } from 'util';

describe('<Guess-Form/>', ()=>{
    it('renders without crashing', ()=>{
        shallow(<GuessForm />);
    });

    it('calls props.onMakeGuess when you press submit', ()=>{
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={guess => callback(guess)} />)
        const value = 88;
        wrapper.find('input').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
        //Reference: testing props that deal with refs, passing values, callbacks, and mount
    });

    it('says Guess', ()=>{
        const wrapper = shallow(<GuessForm/>);
        expect(wrapper.contains("Guess")).toBe(true);
    });

    it('should reset the input once submit is done', ()=>{
        const wrapper = mount(<GuessForm />);
        const value = 99;
        wrapper.find('input').instance().value = value;
        wrapper.simulate('submit');
        expect(wrapper.find('input').instance().value).toEqual('');
    });
});


