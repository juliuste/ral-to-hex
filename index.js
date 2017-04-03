'use strict'

const colours = require('./colours.json')

const ralToHex = (ral) => {
	if(!ral || !colours[ral+'']) throw new Error(`Unknown RAL code: '${ral}'`)
	else return colours[ral+'']
}

module.exports = ralToHex