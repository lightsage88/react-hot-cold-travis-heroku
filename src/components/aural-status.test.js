import React from 'react';

import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status.js';

describe('<AuralStatus />', ()=>{
    
    it('renders without crashing', ()=>{
        shallow(<AuralStatus />);
    });

    it('will render the auralStatus prop in a p tag', ()=>{
        const auralStatusString = "This is it.";
        const wrapper = shallow(<AuralStatus auralStatus={auralStatusString}/>);
        expect(wrapper.find('p#status-readout').text()).toEqual(auralStatusString);
    }) 
});



