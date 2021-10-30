#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();
program.version('0.0.1');
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small ', 'small pizza size')
  .option('-p, --pizza-type [type]', 'flavour of pizza');


program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log(options); console.log('- small pizza size');
if (options.pizzaType) console.log(options); console.log(`- ${options.pizzaType}`);
const a = 1;


// const brew = program.command('brew');

// brew.command('tea')
// .action(() => {
//     console.log('brew tea');
// })
// program.parse(process.argv);
// console.log('hello pro');
