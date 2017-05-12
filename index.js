#!/usr/bin/env node

const jclrz = require('json-colorz');
const getStdin = require('get-stdin');
const chalk = require('chalk');

getStdin().then(str => {
  try {
    jclrz(JSON.parse(str))
  } catch (err) {
    console.log(chalk.red(err));
  }
});
