import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessList from './guess-list.js';

describe('<GuessList />', ()=>{
    it('renders without crashing', ()=>{
        shallow(<GuessList guesses={[]} />);
    });

    it('creates list items out of the guesses prop passed to it', ()=>{
        const arrayOfValues = [1,2,3];
        const wrapper = mount(<GuessList guesses={arrayOfValues} />);
        const items = wrapper.find('li');
    
        expect(wrapper.find('#guessList').children());
        expect(items.length).toEqual(arrayOfValues.length);
        //Reference: When there is no way to check the count of children,
        //break down the props and the pieces they help create into 
        //variables that you can make assertions about the length of.
    })
});


