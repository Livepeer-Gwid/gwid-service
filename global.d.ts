export {};

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

interface EthereumProvider {
  isMetaMask?: boolean;
  request: (args: {
    method: string;
    params?: unknown[] | object;
  }) => Promise<unknown>;
  on: (event: string, handler: (...args: any[]) => void) => void;
  removeAllListeners: () => void;
}
