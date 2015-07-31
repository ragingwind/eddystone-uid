'use strict';
var assert = require('assert');
var eddystoneUid = require('./');

function compareBuffer(src, dest) {
	for (var i = 0; src.length; ++i){
		if (src.readInt8(i) !== dest.readInt8(i)) {
			return false;
		}
	}

	return true;
}

it('should returns encoded id', function () {
	var id = '123456';

	assert.strictEqual(eddystoneUid.toBeaconId(id), '313233343536');
	assert.ok(compareBuffer(eddystoneUid.toBeaconId(id, 'buf') == new Buffer(id)));

	id = 'app-id';
	assert.strictEqual(eddystoneUid.toBeaconId(id), '6170702d6964');
	assert.ok(compareBuffer(eddystoneUid.toBeaconId(id, 'buf') == new Buffer(id)));

	id = '8b0ca750-e7a7-4e14-bd99-095477cb3e77';
	assert.strictEqual(eddystoneUid.toNamespace(id), '8b0ca750095477cb3e77');
});
