import React from 'react';

import {shallow, mount} from 'enzyme';

import StatusSection from './status-section.js';

it('renders without crashing', ()=>{
    const wrapper = shallow(<StatusSection auralStatus={''} guesses={[]}  />);
   

})

