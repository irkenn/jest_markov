const { MarkovMachine } = require('../markov.js');

describe("MarkovMachine", function(){
    let text;
    let machine;
    let result;

    beforeAll(function(){
        text = "The cat in the hat";
        machine = new MarkovMachine(text);
        result = {
            the: ['cat', 'hat'],
            cat: ['in'],
            in: ['the'],
            hat: [undefined]
        };
    });
    test('should create the proper chain', function(){
        let chains = machine.makeChains();
        expect(chains).toEqual(result);
});
})

