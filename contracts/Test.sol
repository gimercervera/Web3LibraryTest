pragma solidity ^0.8.1;

contract Test {

    uint private value;
    address private sender;

    constructor () {
        sender = msg.sender;
    }

    function getSender() 
        public
        view
        returns (address)
    {
        return sender;
    } 

    function setValue(uint _value) 
        public
    {
        value = _value;
    }

    function getValue() 
        public
        view
        returns (uint)
    {
        return value;
    }

}