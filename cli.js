#!/usr/bin/env node

const { formatMessage, pbcopy } = require('./utils');

const [,, ...args] = process.argv;

const [title, description, max_line ] = args;

const MAX_LINE_LENGTH_PER_LINE = max_line || 72;

const commitMsg = `${title}\n\n${formatMessage(description, MAX_LINE_LENGTH_PER_LINE)}`;
pbcopy(commitMsg)
