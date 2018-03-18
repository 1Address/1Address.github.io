const ethnet = (new URL(window.location.href)).searchParams.get("net") || 'ropsten';

const nodeUrl = {
	'mainnet':'wss://mainnet.infura.io/ws',
	'ropsten':'wss://ropsten.infura.io/ws',
}[ethnet];
const explorerUrl = {
	'ropsten':'https://ropsten.etherscan.io/',
	'mainnet':'https://etherscan.io/',
}[ethnet];
const contractAddress = {
	'ropsten':'0x16b0e794fEb8C4008C62269134908b12C6Ed5750',
    'mainnet':'0x0',
}[ethnet];

if (!contractAddress) {
    alert('Wrong network name! Check the page url!');
    throw 'Wrong network name! Check the page url!';
}

const abi = [{"constant":true,"inputs":[{"name":"privateKey","type":"uint256"}],"name":"bitcoinPublicKey","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"p","type":"uint256"}],"name":"invmod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"startUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"endUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes"},{"name":"b","type":"bytes"}],"name":"equalBytesToBytes","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"publicXPoint","type":"uint256"},{"name":"publicYPoint","type":"uint256"}],"name":"createBtcAddress","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"_value","type":"uint256"},{"name":"appCode","type":"bytes1"}],"name":"toBase58Checked","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"},{"name":"length","type":"uint256"}],"name":"complexityForBtcAddressPrefixWithLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"},{"name":"p","type":"uint256"}],"name":"submod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"completedTasks","outputs":[{"name":"taskType","type":"uint8"},{"name":"taskId","type":"uint256"},{"name":"creator","type":"address"},{"name":"reward","type":"uint256"},{"name":"data","type":"bytes32"},{"name":"dataLength","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"taskId","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"name":"solveTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"}],"name":"complexityForBtcAddressPrefix","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"taskId","type":"uint256"}],"name":"safeIndexOfTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes"},{"name":"b","type":"bytes"}],"name":"lengthOfCommonPrefix","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"totalReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"completedTasksCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"taskId","type":"uint256"},{"name":"reward","type":"uint256"}],"name":"payForTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"},{"name":"length","type":"uint256"}],"name":"countBtcAddressLeadingOnes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tasks","outputs":[{"name":"taskType","type":"uint8"},{"name":"taskId","type":"uint256"},{"name":"creator","type":"address"},{"name":"reward","type":"uint256"},{"name":"data","type":"bytes32"},{"name":"dataLength","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"upgradableState","outputs":[{"name":"isUpgrading","type":"bool"},{"name":"prevVersion","type":"address"},{"name":"nextVersion","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"loser","type":"address"}],"name":"recoverLost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"prefixArg","type":"bytes"}],"name":"requireValidBicoinAddressPrefix","outputs":[],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"tasksCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"source","type":"bytes"}],"name":"bytesToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"publicXPoint","type":"uint256"},{"name":"publicYPoint","type":"uint256"}],"name":"createBtcAddressHex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"x1","type":"uint256"},{"name":"y1","type":"uint256"},{"name":"x2","type":"uint256"},{"name":"y2","type":"uint256"}],"name":"addXY","outputs":[{"name":"x3","type":"uint256"},{"name":"y3","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"x1","type":"uint256"},{"name":"y1","type":"uint256"},{"name":"privateKey","type":"uint256"}],"name":"mulXY","outputs":[{"name":"x2","type":"uint256"},{"name":"y2","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes32"},{"name":"b","type":"bytes32"}],"name":"lengthOfCommonPrefix3232","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"indexOfTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"prefix","type":"bytes"},{"name":"reward","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"}],"name":"createBitcoinAddressPrefixTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x1","type":"uint256"},{"name":"y1","type":"uint256"}],"name":"doubleXY","outputs":[{"name":"x2","type":"uint256"},{"name":"y2","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes32"},{"name":"b","type":"bytes"}],"name":"lengthOfCommonPrefix32","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes32"},{"name":"b","type":"bytes"}],"name":"equalBytes32ToBytes","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"ec","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_ec","type":"address"},{"name":"_token","type":"address"},{"name":"_prevVersion","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"taskId","type":"uint256"}],"name":"TaskCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"taskId","type":"uint256"}],"name":"TaskSolved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"prevVersion","type":"address"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"nextVersion","type":"address"}],"name":"Upgrading","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"nextVersion","type":"address"}],"name":"Upgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const token_abi = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"patricipants","type":"address[]"},{"name":"amounts","type":"uint256[]"}],"name":"mintToMany","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"loser","type":"address"}],"name":"recoverLost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

var web3js;

window.addEventListener('load', async function() {

    let token;
    let contract;
    let account;
    let tasks;
    let ethBalance;
    let vipBalance;
    
    function isValidBicoinAddressPrefix(prefix) {
        if (prefix[0] != "1") {
            return false;
        }
        
        for (let i = 0; i < prefix.length; i++) {
            let ch = prefix[i];
            if (ch == "0" || ch == "O" || ch == "I" || ch == "l") {
                return false;
            }
            if (!((ch >= "1" && ch <= "9") || (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))) {
                return false;
            }
        }

        return true;
    }
    
    async function updateBtcDifficulty() {
        let btc_prefix = web3js.utils.utf8ToHex($("#btc_prefix").val());
        $('#btc_difficulty').val('...');
        if (btc_prefix > 2) {
            contract.methods.complexityForBtcAddressPrefixWithLength(btc_prefix, btc_prefix.length/2 - 1).call().then(result => {
                $('#btc_difficulty').val(result / 10**9);
                updateBtcPrice();
            });
        } else {
            $('#btc_difficulty').val('');
        }
    }
    
    async function updateBtcPrice() {
        let btc_reward = $("#btc_reward").val();
        let btc_difficulty = $('#btc_difficulty').val();
        if (btc_reward > 0 && btc_difficulty > 0) {
            $('#btc_price').val(btc_reward / btc_difficulty);
        } else {
            $('#btc_price').val('');
        }
    }
    
    async function updateBtcReward() {
        let btc_price = $("#btc_price").val();
        let btc_difficulty = $('#btc_difficulty').val();
        $('#btc_reward').val(btc_price * btc_difficulty);
    }
    
    async function createTask() {
	    // Prefix
        let btc_prefix = $("#btc_prefix").val();
        if (!isValidBicoinAddressPrefix(btc_prefix)) {
	        alert(`Bitcoin Address prefix "${btc_prefix}" contains incorrect symbols. Do not use: 0 O I l characters`);
	        return;
        }
        if (btc_prefix.length < 5) {
	        alert(`Bitcoin Address prefix is too short, should be at least 5 characters length`);
	        return;
        }
        if (btc_prefix.length >= 13) {
	        alert(`Bitcoin Address prefix is too long, should be less than 13 characters length`);
	        return;
        }
        btc_prefix = web3js.utils.utf8ToHex(btc_prefix);
        
        // Reward
        let btc_reward = $("#btc_reward").val() * 10**18;
        if (vipBalance && btc_reward > vipBalance) {
	        alert('Insufficent VIP balance: ' + vipBalance);
	        return;
        }
        let difficulty = parseFloat($("#btc_difficulty").val());
        if (tasks && tasks.length > 4 && difficulty) {
	        let price = btc_reward / 10**18 / difficulty;
	        if (price && price < tasks[Math.trunc(tasks.length/2)].price / 10**9) {
		        if (!confirm(`Your price ${price} VIP/GH is in lowest half of tasks list, are you sure?`)) {
			        return;
		        }
	        }
        }
        
        // Public Key
        let btc_publickey = $('#btc_publickey').val();
        if (btc_publickey.length == 66 && (btc_publickey.startsWith('02') || btc_publickey.startsWith('03'))) {
	        //
        } else
        if (btc_publickey.length == 68 && (btc_publickey.startsWith('0x02') || btc_publickey.startsWith('0x03'))) {
	        btc_publickey = btc_publickey.substr(2);
        } else 
        if (btc_publickey.length == 130 && btc_publickey.startsWith('04')) {
	        //
        } else 
        if (btc_publickey.length == 132 && btc_publickey.startsWith('0x04')) {
	        btc_publickey = btc_publickey.substr(2);        
        } else {
        	alert('BTC Public key should start from 04 and have 130 hex chars or start from 02/03 and have 64 hex chars');
	        return;
        }
        if (!(/^[0-9A-Fa-f]+$/g).test(btc_publickey)) {
	        alert('BTC Public Key should be in HEX format');
	        return;
	    }
	    let btc_publickey_xy;
	    try {
	        btc_publickey_xy = bitcore.PublicKey.fromString(btc_publickey);
	    } catch(e) {
		    alert('BTC Public Key is invalid');
	        return;
	    }
        let requestPublicXPoint = '0x' + btc_publickey_xy.point.x.toString(16, 64);
        let requestPublicYPoint = '0x' + btc_publickey_xy.point.y.toString(16, 64);
        
        const data = contract.methods.createBitcoinAddressPrefixTask(btc_prefix, btc_reward, requestPublicXPoint, requestPublicYPoint).encodeABI();
        if (account) {
            token.methods.approve(contract.options.address, btc_reward, data).send({from: account})
                .on('transactionHash', function(hash) {
    	            let url = explorerUrl + 'tx/' + hash;
                    console.log(`Sending transaction ${url}`);
                    window.open(url, '_blank').focus();
                    alert(`Creating task, wait for transaction to be mined! ${url}`);
                })
                .on('error', function(error) {
                    console.error(error);
                })
                .then(function(receipt) {
                    console.log('Transaction was mined: ' + receipt);
                    Location.reload();
                });
        } else {
            const fullData = token.methods.approve(contract.options.address, btc_reward, data).encodeABI();
            const estimateGas = await token.methods.approve(contract.options.address, btc_reward, data).estimateGas()
            $('#tx_to').val(token.options.address);
            $('#tx_value').val('0');
            $('#tx_data').val(fullData);
            $('#tx_gas').val(Math.ceil(estimateGas/1000)*1000);
            $('#txModal').modal('show');
        }
    }
    
    async function payForTask(taskId, reward) {
	    const amount = web3js.utils.toWei(reward);
        const data = contract.methods.payForTask(taskId, amount).encodeABI();
        
        if (account) {
	        token.methods.approve(contract.options.address, amount, data).send({from: account})
	            .on('transactionHash', function(hash) {
		            let url = explorerUrl + 'tx/' + hash;
	                console.log(`Sending transaction ${url}`);
	                window.open(url, '_blank').focus();
	                alert(`Paying for task, wait for transaction to be mined! ${url}`);
	            })
	            .on('error', function(error) {
	                console.error(error);
	            })
	            .then(function(receipt) {
	                console.log('Transaction was mined: ' + receipt);
	                Location.reload();
	            });
	    } else {
            const fullData = token.methods.approve(contract.options.address, amount, data).encodeABI();
            const estimateGas = await token.methods.approve(contract.options.address, amount, data).estimateGas()
            $('#tx_to').val(token.options.address);
            $('#tx_value').val('0');
            $('#tx_data').val(fullData);
            $('#tx_gas').val(Math.ceil(estimateGas/1000)*1000);
            $('#txModal').modal('show');
        }
    }
    
    async function getForTask(publicKeyX_dec, publicKeyY_dec, privateKey_dec) {
		const publicKey = '04' + web3js.utils.toBN(publicKeyX_dec).toString(16, 64).toUpperCase() + web3js.utils.toBN(publicKeyY_dec).toString(16, 64).toUpperCase();
	    const privateKey = web3js.utils.toBN(privateKey_dec).toString(16, 64).toUpperCase();
	    alert(`Your public key: ${publicKey}\n` +
	    	  `Found Private Key: ${privateKey}\n` +
	    	  `You should add this Private Key to your Private Key to produce final Private Key.`);
    }

    // https://gist.github.com/brandonaaskov/1596867
    $('#btc_prefix').bind('input', updateBtcDifficulty);
    $('#btc_reward').bind('input', updateBtcPrice);
    $('#btc_price').bind('input', updateBtcReward);
    $('#create').click(createTask);

    for (const name of ['#tx_to', '#tx_value', '#tx_data', '#tx_gas']) {
        let buttonName = name + '_copy';
        $(name).tooltip();

        $(buttonName).bind('click', function() {
            var input = document.querySelector(name);
            input.setSelectionRange(0, input.value.length + 1);
            try {
                if (document.execCommand('copy')) {
                    $(buttonName).trigger('copied', ['Copied!']);
                } else {
                    $(buttonName).trigger('copied', ['Copy with Ctrl+C']);
                }
            } catch (err) {
                $(buttonName).trigger('copied', ['Copy with Ctrl+C']);
            }
        });

        $(name).bind('copied', function(event, message) {
            $(this).attr('title', message)
                .tooltip('fixTitle')
                .tooltip('show')
                .attr('title', 'Copy to Clipboard')
                .tooltip('fixTitle');
        });
    }


    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    let accountPromiseDone;
    let accountPromise = new Promise(done => accountPromiseDone = done);
    function updateAccount() {
        web3js.eth.getAccounts(async function(error, result) {
	        if (result && result.length > 0) {
		        if (account !== result[0]) {
					account = result[0];
			        console.log('Account = ' + account);
					$('#account').html(`<code style="color:#ffffff">Account: <a style="color:#ffffff" href="${explorerUrl}address/${account}">${account}</a></code>`);
				}
			} else {
				$('#account').html('<a style="color:#ffffff" href="https://metamask.io">Get MetaMask!</a>');
				$('#balances').text('');
			}
			
			if (account) {
				let ethBalance2 = await web3js.eth.getBalance(account);
				let vipBalance2 = token ? (await token.methods.balanceOf(account).call()) : -1; 
				if (account && (ethBalance2 != ethBalance || vipBalance2 != vipBalance)) {
					ethBalance = ethBalance2;
					vipBalance = vipBalance2;
					$('#balances').html('<code style="color:#ffffff">(' + (ethBalance / 10**18).toFixed(4) + ' ETH' + ', ' + (vipBalance >= 0 ? (vipBalance / 10**18).toFixed(4) : '--.----') + ' VIP)</code>');
				}
			}
			
			setTimeout(updateAccount, 1000);
			if (accountPromiseDone) {
				accountPromiseDone();
			}
		});
    }
        
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
        updateAccount();
    } else {
        console.log('No web3js? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3js = new Web3(new Web3.providers.WebsocketProvider(nodeUrl));
        web3 = web3js;
        updateAccount();
        accountPromiseDone();
    }
    await accountPromise;
    accountPromiseDone = null;
    
    // Move to latest contract
    let contracts = []
    contract = new web3js.eth.Contract(abi, contractAddress);
    contracts.push(contract);
    let nextVersion = 0;
    while ((nextVersion = (await contract.methods.upgradableState().call()).nextVersion) != 0) {
        contract = new web3js.eth.Contract(abi, nextVersion);
        contracts.push(contract);
        console.log('Upgraded contract to next version: ' + contract.options.address);
    }
    token = new web3js.eth.Contract(token_abi, (await contract.methods.token().call()));

    // Fetching active tasks
    
    const tasksCount = await contract.methods.tasksCount().call();
    console.log('Fetching ' + tasksCount + ' active tasks...');
    let promises = [];
    for (let i = 0; i < tasksCount; i++) {
        promises.push(contract.methods.tasks(i).call().then(async function(task) {
            task.difficulty = await contract.methods.complexityForBtcAddressPrefixWithLength(task.data, task.dataLength).call();
            task.prefix = web3js.utils.hexToAscii(task.data);
            task.price = task.reward / task.difficulty;
            return task;
        }));
    }    
    tasks = await Promise.all(promises);
    tasks.sort((b,a) => a.reward / a.difficulty - b.reward / b.difficulty);
    
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        console.log('Task #' + task.taskId + ': ' + web3js.utils.toAscii(task.data) + ' (' +
                    task.reward/10**18 + ' VIP, ' +
                    task.difficulty/10**6 + ' MH, ' +
                    task.price/10**9 + ' VIP/GH)');

		let payInputId = `task_payment_${task.taskId}`;
        let payButtonId = `button_pay_${task.taskId}`;
        let payButtonHTML =
        	'<div class="input-group mb-3"' + (account != task.creator ? ' hidden ' : '') + '>' +
        		`<input type="text" class="form-control form-control-sm" id="${payInputId}">` +
        		'<div class="input-group-append">' +
    				`<button type="button" class="btn btn-outline-secondary btn-sm" id="${payButtonId}">Pay</button>` +
        		'</div>' +
        	'</div>';

        $("#tasks tbody").append(
            '<tr id="task_${task.id}">' +
                `<td>` + task.taskId + '</td>' +
                `<td>` + web3js.utils.toAscii(task.data) + '</td>' +
                `<td>` + task.reward/10**18 + ' VIP' + '</td>' +
                `<td>` + Math.round(task.difficulty/10**9*1000)/1000 + ' GH' + '</td>' +
                `<td>` + Math.round(task.price/10**9*1000)/1000 + ' VIP/GH' + '</td>' +
                `<td>` + payButtonHTML + '</td>' +
            '</tr>'
        );
        
        $('#' + payButtonId).click(function() {
	        payForTask(task.taskId, $('#' + payInputId).val());
	    });
    }
    
    // Fetching completed tasks
    
    let completedPromises = [];
    for (let j = 0; j < contracts.length; j++) {
        const completedTasksCount = await contracts[j].methods.completedTasksCount().call();
        let promises = [];
        for (let i = 0; i < completedTasksCount; i++) {
            completedPromises.push(contracts[j].methods.completedTasks(i).call().then(async function(task) {
                task.difficulty = await contracts[j].methods.complexityForBtcAddressPrefixWithLength(task.data, task.dataLength).call();
                task.prefix = web3js.utils.hexToAscii(task.data);
                task.price = task.reward/task.difficulty;
                return task;
            }));
        }
    }
    console.log('Fetching completed tasks...');
    const completedTasks = await Promise.all(completedPromises);
    
    for (let i = 0; i < completedTasks.length; i++) {
        const task = completedTasks[i];
        console.log('Task #' + i + ': ' + web3js.utils.toAscii(task.data) + ' (' +
                    task.reward/10**18 + ' VIP, ' +
                    task.difficulty/10**6 + ' MH, ' +
                    task.price/10**9 + ' VIP/GH)');
                    
        let getButtonId = `button_get_${task.taskId}`;
        let getButtonHTML = `<button type="button" class="btn btn-outline-secondary btn-sm" id="${getButtonId}"` + (account != task.creator ? ' hidden ' : '') + `>Result</button>`;

        $("#completed-tasks tbody").append(
            '<tr id="task_${task.id}">' +
                `<td>` + task.taskId + '</td>' +
                `<td>` + web3js.utils.toAscii(task.data) + '</td>' +
                `<td>` + task.reward/10**18 + ' VIP' + '</td>' +
                `<td>` + Math.round(task.difficulty/10**9*1000)/1000 + ' GH' + '</td>' +
                `<td>` + Math.round(task.price/10**9*1000)/1000 + ' VIP/GH' + '</td>' +
                `<td>` + getButtonHTML + '</td>' +
            '</tr>'
        );
        
        $('#' + getButtonId).click(function() {
	        getForTask(task.requestPublicXPoint, task.requestPublicYPoint, task.answerPrivateKey);
	    });
    }
});
