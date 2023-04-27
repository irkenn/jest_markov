/** Command-line tool to generate Markov text. */
const { MarkovMachine} = require('./markov');
const axios = require('axios');
const fs = require('fs');
const validURL = require('valid-url');
const { error } = require('console');
const { resolve } = require('path');


async function readTxt(source){
    return new Promise((resolve, reject) =>{
        fs.readFile(source, 'utf8', (err, data) =>{
            if (err){
                console.log(`Error reading ${argument} : \n ${err.message}`)
                process.exit(1)
            }
            resolve(data);
        })
    })
};


async function requestHTML(source){
    if (validURL.isHttpUri(source)){
        let response = await axios.get(source);
        return response.data
    } 
    else{
        console.log(`Error reading ${source} : \n Not a valid URL address`)
        process.exit(1);   
    }
};


async function functionHandler(flag, source){
    let text;
    if (flag == 'file'){
        text = await readTxt(source);
        console.log(text)
    }
    else if (flag == 'url'){
        let text = await requestHTML(source);
        console.log(text)
    }
};




functionHandler(process.argv[2], process.argv[3]);






//##################### E X P E R I M E N T S #####################
// const text = "The cat in the hat is in the hat";
// const text2 = "The cat in the hat";

// const machine = new MarkovMachine(text2);
// console.log('machine.words', machine.words);
// const chains = machine.makeChains();
// // console.log('chains', chains);
// // console.log('this.chains', machine.chains)
// let randomText = machine.makeText();

// console.log('randomText', randomText)


