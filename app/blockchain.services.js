import Web3 from "web3";
import Dbank from "./dbank.json";
import { ethers } from "ethers";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const mycontract = "0x167caA634787E6a479fBB93838C76EB0Bd5A233E";


export const mydepo = async (
 amount
) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(mycontract, Dbank, signer);
  const tokenId = await Role.deposit(
{
    value: amount
}
  );
  // localStorage.setItem("mintdata", name, receiver, product, quantity, sender);
  console.log(tokenId);
  return tokenId;
};
