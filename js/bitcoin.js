var bitcore = require('bitcore-lib');

//

console.log(bitcore);
const tempPrivateKey = new bitcore.PrivateKey();
const tempPublicKey = tempPrivateKey.toPublicKey();
$('#create_private_key').val(tempPrivateKey.bn.toString(16).toUpperCase());
$('#create_public_key').val("04" + tempPublicKey.point.x.toString(16).toUpperCase() + tempPublicKey.point.y.toString(16).toUpperCase());

//

$('#create_private_key').bind('input', function() {
	const privateKey = new bitcore.PrivateKey($('#create_private_key').val());
	const publicKey = privateKey.toPublicKey();
	$('#create_public_key').val("04" + publicKey.point.x.toString(16).toUpperCase() + publicKey.point.y.toString(16).toUpperCase());
});

//

$('#create_private_key_2').bind('input', function() {
	const privateKey = new bitcore.PrivateKey($('#create_private_key_2').val());
	const publicKey = privateKey.toPublicKey();
	$('#create_public_key_2').val("04" + publicKey.point.x.toString(16).toUpperCase() + publicKey.point.y.toString(16).toUpperCase());
});

//

function addPrivateKeys() {
	const privateKey1 = new bitcore.PrivateKey($('#add_private_key_1').val());
	const privateKey2 = new bitcore.PrivateKey($('#add_private_key_2').val());
	const privateKey = new bitcore.PrivateKey(privateKey1.bn.add(privateKey2.bn).mod(bitcore.crypto.BN.fromString("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", 16)).toString(16));
	$('#add_private_key_3').val(privateKey.bn.toString(16).toUpperCase());
	$('#add_private_key_3_wif').val(privateKey.toWIF());
}

$('#add_private_key_1').bind('input', addPrivateKeys);
$('#add_private_key_2').bind('input', addPrivateKeys);

