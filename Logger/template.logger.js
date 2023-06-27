//This is how we'll be working with a logger called winston

//Import Winston - npm i winston

//Pull the needed parts:

const { createLogger, transports, format } = require('winston')

//create logging function:

const templateLogger = createLogger({
    transports: [
        new transports.File({
            filename: 'template.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'templateError.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())

        })
    ]
})

module.exports = { templateLogger }

//You will need to import this file to the Controller
//Once imported, you'll see 2 new files appear that store your logs
//Here is the syntax to import:
// const logger = require ('../../Logger/template.logger')
// logger.templateLogger.log()

//when you're ready to use it to log something, do this:
// loggers.templateLogger.log ('level','message')
