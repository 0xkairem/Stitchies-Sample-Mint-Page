import React, { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { contractAddress, contractABI } from "../utils/constants";

export const Web3Context = React.createContext();

// const { ethereum } = window;

// create instance of contract

const createContract = () => {
  if (window.ethereum) {
    // initialize contract
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
  }
};

export const Web3Provider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState([]);
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(currentAccount[0]);

  // create function for Web3 wallet connection
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
      }

      let chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      console.log("Connected to chainId", chainId);
      const rinkebyChainId = "0x4";
      if (chainId !== rinkebyChainId) {
        alert("Collection is only available on Rinkeby network");
        return;
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.", error);
    }
  };

  // function to handle mint
  const mintToken = async () => {
    if (isConnected) {
      const rinkebyChainId = "0x4";
      let chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      if (chainId !== rinkebyChainId) {
        alert("Careful, collection can only be minted on Rinkeby network");
        return;
      }
      try {
        const contract = createContract();

        let num = mintAmount * 0.01;
        let mintPrice = num.toString();

        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther(mintPrice, "ether"),
        });
        console.log("response: ", response);
      } catch (error) {
        console.log(error);
        throw new Error("Error: ", error);
      }
    }
  };

  const checkWalletConnection = async () => {
    try {
      if (isConnected) return console.log("Connected on load up");
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object:", error);
    }
  };

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 4) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        currentAccount,
        isConnected,
        mintAmount,
        mintToken,
        setMintAmount,
        handleDecrement,
        handleIncrement,
        checkWalletConnection,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
