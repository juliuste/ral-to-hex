'use strict'

const tape = require('tape')
const r = require('./index')

tape('ral-to-hex', (t) => {
	t.plan(3)
	t.ok(r(4010)==='#CF3476', 'RAL 4010')
	t.ok(r('1005')==='#A98307', 'RAL 1005')
	t.ok(r(3012)==='#C1876B', 'RAL 3012')
})