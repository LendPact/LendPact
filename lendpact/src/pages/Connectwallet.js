import React from 'react'
import { useAccount } from "wagmi";

function Connectwallet() {
    const { address, isConnecting, isDisconnected } = useAccount();
    if (isConnecting) return <div>Connecting...</div>;
    if (isDisconnected) return <div>Disconnected</div>;
    return <div>Connected Wallet: {address}</div>;
  
}

export default Connectwallet
