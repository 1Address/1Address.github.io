const nodeUrl = 'wss://ropsten.infura.io/ws';
const contractAddress = '0x16b0e794fEb8C4008C62269134908b12C6Ed5750';
const gasToContract = 1200000;
const abi = [{"constant":true,"inputs":[{"name":"privateKey","type":"uint256"}],"name":"bitcoinPublicKey","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"p","type":"uint256"}],"name":"invmod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"startUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"endUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes"},{"name":"b","type":"bytes"}],"name":"equalBytesToBytes","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"publicXPoint","type":"uint256"},{"name":"publicYPoint","type":"uint256"}],"name":"createBtcAddress","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"_value","type":"uint256"},{"name":"appCode","type":"bytes1"}],"name":"toBase58Checked","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"},{"name":"length","type":"uint256"}],"name":"complexityForBtcAddressPrefixWithLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"},{"name":"p","type":"uint256"}],"name":"submod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"completedTasks","outputs":[{"name":"taskType","type":"uint8"},{"name":"taskId","type":"uint256"},{"name":"creator","type":"address"},{"name":"reward","type":"uint256"},{"name":"data","type":"bytes32"},{"name":"dataLength","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"taskId","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"name":"solveTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"}],"name":"complexityForBtcAddressPrefix","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"taskId","type":"uint256"}],"name":"safeIndexOfTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes"},{"name":"b","type":"bytes"}],"name":"lengthOfCommonPrefix","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"totalReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"completedTasksCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"taskId","type":"uint256"},{"name":"reward","type":"uint256"}],"name":"payForTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"prefix","type":"bytes"},{"name":"length","type":"uint256"}],"name":"countBtcAddressLeadingOnes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tasks","outputs":[{"name":"taskType","type":"uint8"},{"name":"taskId","type":"uint256"},{"name":"creator","type":"address"},{"name":"reward","type":"uint256"},{"name":"data","type":"bytes32"},{"name":"dataLength","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"},{"name":"answerPrivateKey","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"upgradableState","outputs":[{"name":"isUpgrading","type":"bool"},{"name":"prevVersion","type":"address"},{"name":"nextVersion","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"loser","type":"address"}],"name":"recoverLost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"prefixArg","type":"bytes"}],"name":"requireValidBicoinAddressPrefix","outputs":[],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"tasksCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"source","type":"bytes"}],"name":"bytesToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"publicXPoint","type":"uint256"},{"name":"publicYPoint","type":"uint256"}],"name":"createBtcAddressHex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"x1","type":"uint256"},{"name":"y1","type":"uint256"},{"name":"x2","type":"uint256"},{"name":"y2","type":"uint256"}],"name":"addXY","outputs":[{"name":"x3","type":"uint256"},{"name":"y3","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"x1","type":"uint256"},{"name":"y1","type":"uint256"},{"name":"privateKey","type":"uint256"}],"name":"mulXY","outputs":[{"name":"x2","type":"uint256"},{"name":"y2","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes32"},{"name":"b","type":"bytes32"}],"name":"lengthOfCommonPrefix3232","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"indexOfTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"prefix","type":"bytes"},{"name":"reward","type":"uint256"},{"name":"requestPublicXPoint","type":"uint256"},{"name":"requestPublicYPoint","type":"uint256"}],"name":"createBitcoinAddressPrefixTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x1","type":"uint256"},{"name":"y1","type":"uint256"}],"name":"doubleXY","outputs":[{"name":"x2","type":"uint256"},{"name":"y2","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes32"},{"name":"b","type":"bytes"}],"name":"lengthOfCommonPrefix32","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"bytes32"},{"name":"b","type":"bytes"}],"name":"equalBytes32ToBytes","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"ec","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_ec","type":"address"},{"name":"_token","type":"address"},{"name":"_prevVersion","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"taskId","type":"uint256"}],"name":"TaskCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"taskId","type":"uint256"}],"name":"TaskSolved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"prevVersion","type":"address"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"nextVersion","type":"address"}],"name":"Upgrading","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"nextVersion","type":"address"}],"name":"Upgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];



window.addEventListener('load', async function() {

    let contract;
    
    async function updateBtcDifficulty() {
        let btc_prefix = web3js.utils.utf8ToHex($("#btc_prefix").val());
        $('#btc_difficulty').val('...');
        if (btc_prefix > 2) {
            contract.methods.complexityForBtcAddressPrefixWithLength(btc_prefix, btc_prefix.length/2 - 1).call().then(result => {
                $('#btc_difficulty').val(result / 10**9);
                updateBtcPrice();
            });
        } else {
            
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
        $('#btc_reward').val(btc_price * $('#btc_difficulty').val());
    }

    // https://gist.github.com/brandonaaskov/1596867
    $('#btc_prefix').bind('input', updateBtcDifficulty);
    $('#btc_reward').bind('input', updateBtcPrice);
    $('#btc_price').bind('input', updateBtcReward);

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
    } else {
        console.log('No web3js? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3js = new Web3(new Web3.providers.WebsocketProvider(nodeUrl));
    }
    
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
        console.log('Task #' + i + ': ' + web3js.utils.toAscii(task.data) + ' (' +
                    task.reward/10**18 + ' VIP, ' +
                    task.difficulty/10**6 + ' MH, ' +
                    task.reward/task.difficulty/10**9 + ' VIP/GH)');
        $("#tasks tbody").append(
            '<tr id="task_${task.id}">' +
                `<td id="task_${task.id}_1">` + task.taskId + '</td>' +
                `<td id="task_${task.id}_2">` + web3js.utils.toAscii(task.data) + '</td>' +
                `<td id="task_${task.id}_3">` + task.reward/10**18 + ' VIP' + '</td>' +
                `<td id="task_${task.id}_4">` + Math.round(task.difficulty/10**9*1000)/1000 + ' GH' + '</td>' +
                `<td id="task_${task.id}_5">` + Math.round(task.reward/task.difficulty/10**9*1000)/1000 + ' VIP/GH' + '</td>' +
            '</tr>'
        );
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
                `<td id="task_${task.id}_1">` + task.taskId + '</td>' +
                `<td id="task_${task.id}_2">` + web3js.utils.toAscii(task.data) + '</td>' +
                `<td id="task_${task.id}_3">` + task.reward/10**18 + ' VIP' + '</td>' +
                `<td id="task_${task.id}_4">` + Math.round(task.difficulty/10**9*1000)/1000 + ' GH' + '</td>' +
                `<td id="task_${task.id}_5">` + Math.round(task.reward/task.difficulty/10**9*1000)/1000 + ' VIP/GH' + '</td>' +
            '</tr>'
        );
    }
});
