import React from 'react';
import brand from '../assets/logo2.png';
import './ConnectWallet.scss';
import metaMaskImage from '../assets/Meta mask.png';
import trustWalletImage from '../assets/Trust wallet.png';
import phantomImage from '../assets/Phantom.png';
import coinbasetImage from '../assets/Component 2.png';

export const wallets = [
    {
        img: metaMaskImage,
        name: 'Meta mask',
        id: 1
    },
    {
        img: trustWalletImage,
        name: 'Trust wallet',
        id: 2
    },
    {
        img: phantomImage,
        name: 'Phantom',
        id: 3
    },
    {
        img: coinbasetImage,
        name: 'Coin base',
        id: 4
    }
];

function ConnectWallet() {
    return (
        <>
            <img src={brand} alt="brand" />
            <p className="text">Connect your wallet</p>
            <div className="wallet-container">
                {wallets.map((wallet) => (
                    <div key={wallet.id} className="wallet bg-black">
                        <a className="link" href="/">
                            <img src={wallet.img} alt={wallet.name} />
                            <p>{wallet.name}</p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ConnectWallet;
