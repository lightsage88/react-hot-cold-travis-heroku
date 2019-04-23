import React from 'react';

import {shallow, mount} from 'enzyme';

import InfoSection from './info-section.js';

describe('<InfoSection />', ()=>{
    it('renders without crashing', ()=>{
        shallow(<InfoSection />);
    });

    it('returns a section with the id of "what" ', ()=>{
        const wrapper = shallow(<InfoSection/>);
        expect(wrapper.find('#what').exists()).toEqual(true);
    })

});


