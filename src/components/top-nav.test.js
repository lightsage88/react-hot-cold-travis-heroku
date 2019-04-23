import React from 'react';

import {shallow, mount} from 'enzyme';

import TopNav from './top-nav.js';

describe('<TopNav />', ()=>{
    it('renders without crashing', ()=>{
        shallow(<TopNav />);
    });

    it('will restart the game if you click on .new', ()=>{
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onRestartGame={callback}/>);
        wrapper.find('.new').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

    it('will give us the auralUpdate of the game when you click on .status-link', ()=>{
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback}/>);
        wrapper.find('.status-link').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

    

});


