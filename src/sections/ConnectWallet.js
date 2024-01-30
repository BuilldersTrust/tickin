import React from 'react';
import brand from '../assets/logo2.png';
import './ConnectWallet.scss';
import metaMaskImage from '../assets/Meta mask.png';
import trustWalletImage from '../assets/Trust wallet.png';
import phantomImage from '../assets/Phantom.png';
import coinbasetImage from '../assets/Component 2.png';
import EventiiWeb3 from '../EventiiWeb3';

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
        <div className='wallet-container'>
            <div className='wallet-card'>
                <img src={brand} alt="brand" className='brand-logo' />
                <p className="header-text">Connect your wallet</p>
                {wallets.map((wallet) => (
                    <a key={wallet.id} className="wallet" href="javascript:void(0)" onClick={() => EventiiWeb3.connectWallet().then(() => window.location.assign('/'))}>
                        <img src={wallet.img} alt={wallet.name} />
                        <p>{wallet.name}</p>
                    </a>
                ))}
                <div className='footer-text'>
                    By connecting a wallet, you agree to our Terms and Conditions and consent to its Privacy Policy
                </div>
            </div>
        </div>
    );
};

export default ConnectWallet;
