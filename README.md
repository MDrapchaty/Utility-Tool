##Debug Tool

Debugging tool that console logs to the CLI and log file

## install
Within the directory of the project/application
```
npm install nx-debugtool --save
```

## Use
### Requiring the debug tool on your project
In each file your planning to debug make sure to always require it at the top you will also will need to create a logs folder in the main directory
```
const debug = require('nx-debugtool');
```

### Setting your own debug messages
Put the following line were you want to get a debug message:

#### Successful
```
debug.debug('Your Successful Message', 'Successful');
```

#### Error
```
debug.debug('Your message because of the following error: ' + err, 'Error! ');
```

#### Error Types
All logs include date and time

***success*** console log error in green.  
***error*** console log error in red.

### Running debug mode

Once your file are setup simply type

```
DEBUG=true
```

## Unit testing
Making sure you first have mocha installed globally then type the following in your CLI

```
mocha
```

A complete successful test should look like this:
```
NX-Utility-Tool

 2 passing (14ms)
```
