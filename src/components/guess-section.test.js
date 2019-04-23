import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section.js';

it('renders without crashing', ()=>{
    shallow(<GuessSection />);
})

