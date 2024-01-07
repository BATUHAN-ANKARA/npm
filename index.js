#!/usr/bin/env node

const { program } = require('commander');
const createLayers = require('./lib/commands/create-layers');

program
.command('create-layers')
  .description('Create standard layers structure')
  .action(() => {
    createLayers();
  });

program.parse(process.argv);
