import './App.css';
import { ethers } from 'ethers';
import { useState,useEffect } from 'react';
import artifacts from "./artifacts/contracts/Super_Coin.sol/Super_Coin.json";
const abi = artifacts.abi;
const provider = new ethers.BrowserProvider(window.ethereum);
const contractaddress = "";


function App() {
  const [signer,setSigner] = useState("");
  const [contract,setContract] = useState("");
  const [receiver, setReceiver] = useState("");
  const [payableamount, setpayableamount] = useState("");
  const [balanceAccount, setbalanceAccount] = useState("");

  async function getWallet() {
    if(!window.ethereum){
      alert("MetaMask install kr bhai.");
      return;
    }
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const dummySigner = await provider.getSigner();
    setSigner(dummySigner);
    const dummyContract = new ethers.Contract(contractaddress,abi,signer);
    setContract(dummyContract);

  }

  async function transfer() {
    await contract.transfer(receiver ,payableamount)
  }

  async function balancecheck() {
    await contract.balanceOf(balanceAccount);
  }

  return(
    <>
      <div className='Container'></div>
    </>
  );
}

export default App;
