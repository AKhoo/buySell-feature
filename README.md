# Project Name

> Project description

## Related Projects

  - https://github.com/FEC-socrates/AboutAndNews-feature
  - https://github.com/FEC-socrates/lineGraph-feature

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
if initial run:

  - run 'npm install'
  - start mongoDB server
  - run 'mongoimport --db robinsHood --collection stocks --file nasdaq-data.csv --type csv --headerline' to seed the database with the included .csv file

server start script is 'npm run server-dev'
react start script is 'npm run react-dev'
test start is 'npm run test'

home url path is 'localhost:3333'

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MongoDB/Mongoose
- React

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

