import React from 'react';

import {shallow} from 'enzyme';

import Game from './game.js';

describe('<Game/>', () => {
    it('renders without crashing', ()=>{
        shallow(<Game />);
    });

    it('has a state reflecting what is passed into it initially', ()=>{
        const wrapper = shallow(<Game />);
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('auralStatus')).toEqual('');
        expect(wrapper.state('correctAnswer')).not.toEqual('');
    });



    it('will reset the state if "restartGame" is run', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [1, 2, 3, 4],
            feedback: 'Awesome',
            correctAnswer: -1
        });
        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        
    });

    it('can make guesses', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 100,
            guesses: []
        });
        wrapper.instance().makeGuess('NaN');
        expect(wrapper.state('feedback')).toEqual("Please enter a valid number");


        wrapper.instance().makeGuess(50);
        expect(wrapper.state('feedback')).toEqual("You're Ice Cold...");
        wrapper.instance().makeGuess(70);
        expect(wrapper.state('feedback')).toEqual("You're Cold...");
        wrapper.instance().makeGuess(90);
        expect(wrapper.state('feedback')).toEqual("You're Warm.");
        wrapper.instance().makeGuess(99);
        expect(wrapper.state('feedback')).toEqual("You're Hot!");
        wrapper.instance().makeGuess(100);
        expect(wrapper.state('feedback')).toEqual("You got it!");

        expect(wrapper.state('guesses')).toEqual([50, 70, 90, 99, 100]);
    })

    it('can give us aural feed back through generateAuralUpdate', () => {
        const wrapper = shallow(<Game/>);
        wrapper.setState({correctAnswer: 100});
        wrapper.instance().makeGuess(50);
        expect(wrapper.state('feedback')).toEqual("You're Ice Cold...");
        expect(wrapper.state('guesses')).toEqual([50]);
        wrapper.instance().generateAuralUpdate();
        expect(wrapper.state('auralStatus')).toEqual("Here's the status of the game right now: You're Ice Cold... You've made 1 guess. It was: 50");
        wrapper.instance().makeGuess(99);
        expect(wrapper.state('feedback')).toEqual("You're Hot!");
        wrapper.instance().generateAuralUpdate();
        expect(wrapper.state('auralStatus')).toEqual("Here's the status of the game right now: You're Hot! You've made 2 guesses. In order of most- to least-recent, they are: 99, 50");
    })

});

