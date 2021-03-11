const artifacts = require('./build/contracts/Test.json');
var contract = require("@truffle/contract");
const Test = contract(artifacts);

Test.setProvider(web3.currentProvider);

module.exports = function (callback) {
    //Este script devuelve las cuentas que estén creadas en la blockchain.
    /*web3.eth.getAccounts((err, accounts) => {
        console.log(accounts);
        if(err) console.log(err);
    }); */

    //Deveuelve la primera cuenta.
    /*web3.eth.getAccounts((err, accounts) => {
        console.log(accounts[0]);
        if(err) console.log(err);
    });*/

    //Primero obtengo todas las cuentas, después obtengo el balance de la primera cuenta.
    /*web3.eth.getAccounts((err, accounts) => {
        let account0 = accounts[0];
        console.log("La primera cuenta es: ", account0)
        web3.eth.getBalance(account0, (err, balance) => {
            console.log("El balance es: ", web3.utils.fromWei(balance, 'ether'));
            if(err) console.log(err);    
        });

        if(err) console.log(err);
    });*/

    //Obtener la dirección del contrato Test
    /*Test.deployed()
        .then(instance => console.log(instance.address))
        .catch(err => {
            console.log(err);
        })*/
    //Obtener una instancia del contrato y vamos a llamar a la función getSender del contrato Test.sol
    /*Test.deployed()
        .then( (instance) => { 
            console.log(instance.address)
            return instance.getSender();
        })
        .then((_sender) => {
            console.log(_sender);
        })
        .catch(err => {
            console.log(err);
        })*/

    //Usando async y await vamos a obtener una instancia del contrato y vamos a llamar a la función getSender del contrato Test.sol

    async function f() {
        try{
            let instance = await Test.deployed();
            let sender = await instance.getSender();
            console.log("El contrato se envió con la cuenta: ", sender);
        }catch(err){
            console.log(err);
        }
    }

    f();

}

