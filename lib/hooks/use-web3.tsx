"use client";

import { BrowserProvider, JsonRpcSigner } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export interface IWeb3State {
  address: string | null;
  currentChain: number | null;
  signer: JsonRpcSigner | null;
  provider: BrowserProvider | null;
  isAuthenticated: boolean;
}

const ethereum = typeof window !== "undefined" ? window.ethereum : undefined;

const useWeb3Provider = () => {
  const initialWeb3State: IWeb3State = {
    address: null,
    currentChain: null,
    signer: null,
    provider: null,
    isAuthenticated: false,
  };

  const [walletState, setState] = useState<IWeb3State>(initialWeb3State);

  const connectWallet = useCallback(async () => {
    if (walletState.isAuthenticated) return;

    try {
      if (!ethereum) {
        return toast.error("No ethereum wallet found", {
          position: "top-right",
          style: {
            background: "red",
            color: "white",
          },
        });
      }

      const provider = new BrowserProvider(ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const network = await provider.getNetwork();

      setState({
        address: accounts[0],
        currentChain: Number(network.chainId),
        signer,
        provider,
        isAuthenticated: true,
      });
      localStorage.setItem("isAuthenticated", "true");
    } catch (err) {
      console.error("Wallet connection failed:", err);
      toast.error("Failed to connect wallet", {
        style: {
          background: "red",
          color: "white",
        },
      });
    }
  }, [walletState.isAuthenticated]);

  const disconnect = () => {
    setState(initialWeb3State);
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    if (window == null) return;
    if (localStorage.getItem("isAuthenticated")) {
      connectWallet();
    }
  }, [connectWallet]);

  useEffect(() => {
    if (!ethereum) return;

    ethereum.on("accountsChanged", (accounts: string[]) => {
      setState((prev) => ({ ...prev, address: accounts[0] || null }));
    });

    ethereum.on("chainChanged", (chainId: string) => {
      setState((prev) => ({ ...prev, currentChain: Number(chainId) }));
    });

    return () => {
      ethereum.removeAllListeners();
    };
  }, []);

  return { connectWallet, disconnect, walletState };
};

export default useWeb3Provider;
