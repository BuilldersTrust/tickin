import React, { useState } from 'react';
import './ConnectWallet.scss'; // Make sure this SCSS file includes all the necessary styles
import metaMaskImage from '../assets/Meta mask.png';
import trustWalletImage from '../assets/Trust wallet.png';
import phantomImage from '../assets/Phantom.png';
import coinbaseImage from '../assets/Component 2.png';
import brand from '../assets/logo2.png';

// The array of wallets
const wallets = [
    {
        img: metaMaskImage,
        name: 'MetaMask',
        id: 1
    },
    {
        img: trustWalletImage,
        name: 'TrustWallet',
        id: 2
    },
    {
        img: phantomImage,
        name: 'PhantomWallet',
        id: 3
    },
    {
        img: coinbaseImage,
        name: 'CoinbaseWallet',
        id: 4
    }
];

const ConnectWallet = () => {
    // State to control the visibility of the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const connectWallet = (walletName) => {
        // Logic to connect to the wallet
        console.log(`Connecting to ${walletName}`);
        // Close modal after wallet selection
        closeModal();
    };

    return (
        <>
            <button onClick={openModal} className="open-modal-button">
                Connect Wallet
            </button>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img className='brand-logo' src={brand} alt="brand"/>
                        <p>Connect your wallet</p>
                        <div className="wallet-buttons">
                            {wallets.map((wallet) => (
                                <button key={wallet.id} onClick={() => connectWallet(wallet.name)} className={`wallet-button ${wallet.name.toLowerCase()}`}>
                                    <img src={wallet.img} alt={`${wallet.name} logo`} />
                                    {wallet.name.replace(/Wallet/, '')} 
                                </button>
                            ))}
                        </div>
                        <div className="terms">
                            By connecting a wallet, you agree to our <a href="/terms">Terms and Conditions</a> and consent to our <a href="/privacy">Privacy Policy</a>.
                        </div>
                        <button onClick={closeModal} className="close-modal-button">
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConnectWallet;
