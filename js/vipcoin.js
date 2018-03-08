const nodeUrl = 'wss://ropsten.infura.io/ws';
const explorerUrl = 'https://ropsten.etherscan.io/tx/';
const contractAddress = '0x16b0e794fEb8C4008C62269134908b12C6Ed5750';
const gasToContract = 1200000;
const abi = [{"constant":true,"inputs":[{"name":"privateKey","type":"uint256"}],"name":"bitcoinPublicKey","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"p","type":"uint256"}],"name":"invmod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"startUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"endUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes"},{"name":"b","type":"bytes"}],"name":"equalBytesToBytes","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"publicXPoint","type":"uint256"},{"name":"publicYPoint","type":"uint256"}],"name":"createBtcAddress","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"_value","type":"uint256"},{"name":"appCode","type":"bytes1"}],"name":"toBase58Checked","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"},{"name":"length","type":"uint256"}],"name":"complexityForBtcAddressPrefixWithLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"},{"name":"p","type":"uint256"}],"name":"submod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"completedTasks","outputs":[{"name":"taskType","type":"uint8"},{"name":"taskId","type":"uint256"},{"name":"creator","type":"address"},{"name":"reward","type":"uint256"},{"name":"data","type":"bytes32"},{"name":"dataLength","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"taskId","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"name":"solveTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"}],"name":"complexityForBtcAddressPrefix","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"taskId","type":"uint256"}],"name":"safeIndexOfTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes"},{"name":"b","type":"bytes"}],"name":"lengthOfCommonPrefix","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"totalReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"completedTasksCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"taskId","type":"uint256"},{"name":"reward","type":"uint256"}],"name":"payForTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"},{"name":"length","type":"uint256"}],"name":"countBtcAddressLeadingOnes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tasks","outputs":[{"name":"taskType","type":"uint8"},{"name":"taskId","type":"uint256"},{"name":"creator","type":"address"},{"name":"reward","type":"uint256"},{"name":"data","type":"bytes32"},{"name":"dataLength","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"upgradableState","outputs":[{"name":"isUpgrading","type":"bool"},{"name":"prevVersion","type":"address"},{"name":"nextVersion","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"loser","type":"address"}],"name":"recoverLost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"prefixArg","type":"bytes"}],"name":"requireValidBicoinAddressPrefix","outputs":[],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"tasksCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"source","type":"bytes"}],"name":"bytesToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"publicXPoint","type":"uint256"},{"name":"publicYPoint","type":"uint256"}],"name":"createBtcAddressHex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"x1","type":"uint256"},{"name":"y1","type":"uint256"},{"name":"x2","type":"uint256"},{"name":"y2","type":"uint256"}],"name":"addXY","outputs":[{"name":"x3","type":"uint256"},{"name":"y3","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"x1","type":"uint256"},{"name":"y1","type":"uint256"},{"name":"privateKey","type":"uint256"}],"name":"mulXY","outputs":[{"name":"x2","type":"uint256"},{"name":"y2","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes32"},{"name":"b","type":"bytes32"}],"name":"lengthOfCommonPrefix3232","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"indexOfTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"prefix","type":"bytes"},{"name":"reward","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"}],"name":"createBitcoinAddressPrefixTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x1","type":"uint256"},{"name":"y1","type":"uint256"}],"name":"doubleXY","outputs":[{"name":"x2","type":"uint256"},{"name":"y2","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes32"},{"name":"b","type":"bytes"}],"name":"lengthOfCommonPrefix32","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes32"},{"name":"b","type":"bytes"}],"name":"equalBytes32ToBytes","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"ec","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_ec","type":"address"},{"name":"_token","type":"address"},{"name":"_prevVersion","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"taskId","type":"uint256"}],"name":"TaskCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"taskId","type":"uint256"}],"name":"TaskSolved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"prevVersion","type":"address"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"nextVersion","type":"address"}],"name":"Upgrading","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"nextVersion","type":"address"}],"name":"Upgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const token_abi = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"patricipants","type":"address[]"},{"name":"amounts","type":"uint256[]"}],"name":"mintToMany","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"loser","type":"address"}],"name":"recoverLost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

var web3js;

window.addEventListener('load', async function() {

    let token;
    let contract;
    let account;
    
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
        let btc_prefix = web3js.utils.utf8ToHex($("#btc_prefix").val());
        let btc_reward = $("#btc_reward").val() * 10**18;
        let btc_publickey = $('#btc_publickey').val();
        if (btc_publickey.length != 130 || !btc_publickey.startsWith('04')) {
	        alert('BTC Public key should start from 04 and have 130 hex chars');
	        return;
        }
        let requestPublicXPoint = '0x' + btc_publickey.substr(2, 64);
        let requestPublicYPoint = '0x' + btc_publickey.substr(66, 64);
        
        const data = contract.methods.createBitcoinAddressPrefixTask(btc_prefix, btc_reward, requestPublicXPoint, requestPublicYPoint).encodeABI();
        token.methods.approve(contract.options.address, btc_reward, data).send({from: account})
            .on('transactionHash', function(hash) {
	            let url = explorerUrl + hash;
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
    }
    
    async function payForTask(taskId, reward) {
	    const amount = web3js.utils.toWei(reward);
        const data = contract.methods.payForTask(taskId, amount).encodeABI();
        token.methods.approve(contract.options.address, amount, data).send({from: account})
            .on('transactionHash', function(hash) {
	            let url = explorerUrl + hash;
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
    }

    // https://gist.github.com/brandonaaskov/1596867
    $('#btc_prefix').bind('input', updateBtcDifficulty);
    $('#btc_reward').bind('input', updateBtcPrice);
    $('#btc_price').bind('input', updateBtcReward);
    $('#create').click(createTask);

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    let accountPromiseDone;
    let accountPromise = new Promise(done => accountPromiseDone = done);
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
        function updateAccount() {
	        web3js.eth.getAccounts(function(error, result) {
		        if (result && result.length > 0) {
			        if (account !== result[0]) {
						account = result[0];
				        console.log('Account = ' + account);
						$('#account').text(`Account: ${account}`);
					}
				} else {
					$('#account').html('<a href="https://metamask.io">Get MetaMask!</a>');
				}
				setTimeout(updateAccount, 1000);
				accountPromiseDone();
			});
        }
        updateAccount();
    } else {
        console.log('No web3js? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3js = new Web3(new Web3.providers.WebsocketProvider(nodeUrl));
        web3 = web3js;
        accountPromiseDone();
    }
    await accountPromise;
    
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
            return task;
        }));
    }    
    const tasks = await Promise.all(promises);
    tasks.sort((b,a) => a.reward / a.difficulty - b.reward / b.difficulty);
    
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        console.log('Task #' + task.taskId + ': ' + web3js.utils.toAscii(task.data) + ' (' +
                    task.reward/10**18 + ' VIP, ' +
                    task.difficulty/10**6 + ' MH, ' +
                    task.reward/task.difficulty/10**9 + ' VIP/GH)');

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
                `<td>` + Math.round(task.reward/task.difficulty/10**9*1000)/1000 + ' VIP/GH' + '</td>' +
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
                    task.reward/task.difficulty/10**9 + ' VIP/GH)');
        $("#completed-tasks tbody").append(
            '<tr id="task_${task.id}">' +
                `<td>` + task.taskId + '</td>' +
                `<td>` + web3js.utils.toAscii(task.data) + '</td>' +
                `<td>` + task.reward/10**18 + ' VIP' + '</td>' +
                `<td>` + Math.round(task.difficulty/10**9*1000)/1000 + ' GH' + '</td>' +
                `<td>` + Math.round(task.reward/task.difficulty/10**9*1000)/1000 + ' VIP/GH' + '</td>' +
            '</tr>'
        );
    }
});
