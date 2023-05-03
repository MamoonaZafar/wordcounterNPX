#! /usr/bin/env node
import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';

const title = chalk.blue(figlet.textSync('Word Counter'));

inquirer
  .prompt([
    {
      type: 'input',
      name: 'paragraph',
      message: 'Enter a paragraph:',
    },
  ])
  .then((answers) => {
    const { paragraph } = answers;
    const words = paragraph.trim().split(/\s+/);
    const wordCount = words.length;
    const characterCount = paragraph.replace(/\s/g, '').length;

    console.log(title);
    console.log(`Your paragraph:\n${paragraph}\n`);
    console.log(chalk.green(`Word count: ${wordCount}`));
    console.log(chalk.green(`Character count (excluding spaces): ${characterCount}`));
  })
  .catch((error) => {
    console.log(chalk.red(`Error: ${error}`));
  });
