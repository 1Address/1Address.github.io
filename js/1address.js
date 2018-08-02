const ethnet = (new URL(window.location.href)).searchParams.get("net") || 'mainnet';

const nodeUrl = {
    'mainnet':'wss://mainnet.infura.io/ws',
    'ropsten':'wss://ropsten.infura.io/ws',
}[ethnet];
const explorerUrl = {
    'mainnet':'https://etherscan.io/',
    'ropsten':'https://ropsten.etherscan.io/',
}[ethnet];
const contractAddress = {
    'mainnet':'0xE793F0318f571eC463A4968f7870378F7655a44d',
    'ropsten':'0x16b0e794fEb8C4008C62269134908b12C6Ed5750',
}[ethnet];

if (!contractAddress) {
    alert('Wrong network name! Check the page url!');
    throw 'Wrong network name! Check the page url!';
}

const contract_abi = [{"constant":true,"inputs":[],"name":"MAX_PERCENT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"startUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"prefixArg","type":"bytes"}],"name":"isValidBicoinAddressPrefix","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes32"},{"name":"b","type":"bytes32"}],"name":"lengthOfCommonPrefix","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"publicXPoint","type":"uint256"},{"name":"publicYPoint","type":"uint256"}],"name":"createBtcAddress","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"_value","type":"uint256"},{"name":"appCode","type":"bytes1"}],"name":"toBase58Checked","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"},{"name":"length","type":"uint256"}],"name":"complexityForBtcAddressPrefixWithLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"uint256"},{"name":"y","type":"uint256"}],"name":"isValidPublicKey","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"completedTasks","outputs":[{"name":"taskType","type":"uint8"},{"name":"taskId","type":"uint256"},{"name":"creator","type":"address"},{"name":"referrer","type":"address"},{"name":"reward","type":"uint256"},{"name":"data","type":"bytes32"},{"name":"dataLength","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"}],"name":"complexityForBtcAddressPrefix","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"referrerFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"},{"name":"length","type":"uint256"}],"name":"countBtcAddressLeadingOnes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"serviceFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tasks","outputs":[{"name":"taskType","type":"uint8"},{"name":"taskId","type":"uint256"},{"name":"creator","type":"address"},{"name":"referrer","type":"address"},{"name":"reward","type":"uint256"},{"name":"data","type":"bytes32"},{"name":"dataLength","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"upgradableState","outputs":[{"name":"isUpgrading","type":"bool"},{"name":"prevVersion","type":"address"},{"name":"nextVersion","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"source","type":"bytes"}],"name":"bytesToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"publicXPoint","type":"uint256"},{"name":"publicYPoint","type":"uint256"}],"name":"createBtcAddressHex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"indexOfTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ec","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_ec","type":"address"},{"name":"_prevVersion","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"taskId","type":"uint256"}],"name":"TaskCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"taskId","type":"uint256"},{"indexed":false,"name":"reward","type":"uint256"}],"name":"TaskSolved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"taskId","type":"uint256"},{"indexed":false,"name":"value","type":"uint256"}],"name":"TaskPayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"prevVersion","type":"address"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"nextVersion","type":"address"}],"name":"Upgrading","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"nextVersion","type":"address"}],"name":"Upgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"_serviceFee","type":"uint256"}],"name":"setServiceFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_referrerFee","type":"uint256"}],"name":"setReferrerFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_size","type":"uint256"}],"name":"upgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"endUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tasksCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"completedTasksCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_taskId","type":"uint256"}],"name":"payForTask","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_taskId","type":"uint256"}],"name":"safeIndexOfTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"prefix","type":"bytes"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"},{"name":"referrer","type":"address"}],"name":"createBitcoinAddressPrefixTask","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_taskId","type":"uint256"},{"name":"_answerPrivateKey","type":"uint256"},{"name":"publicXPoint","type":"uint256"},{"name":"publicYPoint","type":"uint256"}],"name":"solveTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"}],"name":"claim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var web3js;

window.addEventListener('load', async function() {

    let contract;
    let account;
    let tasks;
    let ethBalance;

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
        if (btc_reward > ethBalance) {
            alert('Insufficent ETH balance: ' + ethBalance);
            return;
        }
        let difficulty = parseFloat($("#btc_difficulty").val());
        if (tasks && tasks.length > 4 && difficulty) {
            let price = btc_reward / 10**18 / difficulty;
            if (price && price < tasks[Math.trunc(tasks.length/2)].price / 10**9) {
                if (!confirm(`Your price ${Math.round(price*1000000)/1000000} ETH/GH is in lowest half of tasks list, are you sure?`)) {
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

        if (account) {
            contract.methods.createBitcoinAddressPrefixTask(btc_prefix, requestPublicXPoint, requestPublicYPoint, 0).send({from: account, value: btc_reward})
                .on('transactionHash', function(hash) {
                    let url = explorerUrl + 'tx/' + hash;
                    console.log(`Sending transaction ${url}`);
                    window.open(url, '_blank').focus();
                    $('#txPending').modal('show');
                })
                .on('error', function(error) {
                    console.error(error);
                })
                .then(function(receipt) {
                    console.log('Transaction was mined: ' + receipt);
                    $('#txPending').modal('hide');
                });
        } else {
            const fullData = contract.methods.createBitcoinAddressPrefixTask(btc_prefix, requestPublicXPoint, requestPublicYPoint, 0).encodeABI();
            const estimateGas = 500000;
            $('#tx_to').val(contract.options.address);
            $('#tx_value').val(btc_reward);
            $('#tx_data').val(fullData);
            $('#tx_gas').val(Math.ceil(estimateGas/1000)*1000);
            $('#txModal').modal('show');
        }
    }

    async function payForTask(taskId, reward) {
        const amount = web3js.utils.toWei(reward);

        if (account) {
            contract.methods.payForTask(taskId).send({from: account, value: amount})
                .on('transactionHash', function(hash) {
                    let url = explorerUrl + 'tx/' + hash;
                    console.log(`Sending transaction ${url}`);
                    window.open(url, '_blank').focus();
                    $('#txPending').modal('show');
                })
                .on('error', function(error) {
                    console.error(error);
                })
                .then(function(receipt) {
                    console.log('Transaction was mined: ' + receipt);
                    $('#txPending').modal('hide');
                });
        } else {
            const fullData = contract.methods.payForTask(taskId).encodeABI();
            const estimateGas = 200000;
            $('#tx_to').val(contract.options.address);
            $('#tx_value').val(amount);
            $('#tx_data').val(fullData);
            $('#tx_gas').val(Math.ceil(estimateGas/1000)*1000);
            $('#txModal').modal('show');
        }
    }

    async function getForTask(task) {
        $('#ans_prefix').val(task.prefix);
        $('#ans_difficulty').val(task.difficulty / 10**9);
        $('#ans_reward').val(task.reward / 10**18);
        $('#ans_price').val(task.price / 10**9);
        $('#ans_publickey').val('04' + web3js.utils.toBN(task.requestPublicXPoint).toString(16, 64).toUpperCase() + web3js.utils.toBN(task.requestPublicYPoint).toString(16, 64).toUpperCase());
        $('#ans_privatekey').val(web3js.utils.toBN(task.answerPrivateKey).toString(16, 64).toUpperCase());
        $('#modalAnswer').modal('show');
    }

    // https://gist.github.com/brandonaaskov/1596867
    $('#btc_prefix').bind('input', updateBtcDifficulty);
    $('#btc_reward').bind('input', updateBtcPrice);
    $('#btc_price').bind('input', updateBtcReward);
    $('#create').click(createTask);

    for (const name of ['#tx_to', '#tx_value', '#tx_data', '#tx_gas', '#ans_privatekey']) {
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
                if (account && (ethBalance2 != ethBalance)) {
                    ethBalance = ethBalance2;
                    $('#balances').html('<code style="color:#ffffff">Balances: ' + (ethBalance / 10**18).toFixed(4) + ' ETH</code>');
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
    contract = new web3js.eth.Contract(contract_abi, contractAddress);
    contracts.push(contract);
    let nextVersion = 0;
    while ((nextVersion = (await contract.methods.upgradableState().call()).nextVersion) != 0) {
        contract = new web3js.eth.Contract(contract_abi, nextVersion);
        contracts.push(contract);
        console.log('Upgraded contract to next version: ' + contract.options.address);
    }

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
                    task.reward/10**18 + ' ETH, ' +
                    task.difficulty/10**6 + ' MH, ' +
                    task.price/10**9 + ' ETH/GH)');

        let payInputId = `task_payment_${task.taskId}`;
        let payButtonId = `button_pay_${task.taskId}`;
        let payButtonHTML =
            '<div class="input-group"' + ((account && account != task.creator) ? ' hidden ' : '') + '>' +
                `<input type="text" class="form-control form-control-sm" id="${payInputId}">` +
                '<div class="input-group-append">' +
                    `<button type="button" class="btn btn-outline-secondary btn-sm" id="${payButtonId}">Pay</button>` +
                '</div>' +
            '</div>';

        $("#tasks tbody").append(
            '<tr id="task_${task.id}">' +
                `<td>` + task.taskId + '</td>' +
                `<td>` + web3js.utils.toAscii(task.data) + '</td>' +
                `<td>` + Math.round(task.reward/10**18*1000000)/1000000+ ' ETH' + '</td>' +
                `<td>` + Math.round(task.difficulty/10**9*1000000)/1000000 + ' GH' + '</td>' +
                `<td>` + Math.round(task.price/10**9*1000000)/1000000 + ' ETH/GH' + '</td>' +
                `<td>` + payButtonHTML + '</td>' +
            '</tr>'
        );

        $('#' + payButtonId).click(function() {
            payForTask(task.taskId, $('#' + payInputId).val());
        });
    }
    $('#tasks').DataTable({
        "order": [[ 4, "desc" ]]
    });

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
                    task.reward/10**18 + ' ETH, ' +
                    task.difficulty/10**6 + ' MH, ' +
                    task.price/10**9 + ' ETH/GH)');

        let getButtonId = `button_get_${task.taskId}`;
        let getButtonHTML = `<button type="button" class="btn btn-outline-secondary btn-sm" id="${getButtonId}"` + ((account && account != task.creator) ? ' hidden ' : '') + `>Result</button>`;

        $("#completed-tasks tbody").append(
            '<tr id="task_${task.id}">' +
                `<td>` + task.taskId + '</td>' +
                `<td>` + web3js.utils.toAscii(task.data) + '</td>' +
                `<td>` + Math.round(task.reward/10**18*1000000)/1000000 + ' ETH' + '</td>' +
                `<td>` + Math.round(task.difficulty/10**9*1000000)/1000000 + ' GH' + '</td>' +
                `<td>` + Math.round(task.price/10**9*1000000)/1000000 + ' ETH/GH' + '</td>' +
                `<td>` + getButtonHTML + '</td>' +
            '</tr>'
        );

        $('#' + getButtonId).click(function() {
            getForTask(task);
        });
    }
    $('#completed-tasks').DataTable();
});
