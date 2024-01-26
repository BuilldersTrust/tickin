import React from 'react'
import "./Nft.scss"

import {
    man, warthog, ape
} from '../../assets'


export default function NFT() {
    return (
        <div className='nft-section'>
            <div className='header-text'>NFT</div>
            <div className='nft-container'>

                <div className='nft-element'>
                    <img src={warthog} alt="nft-warthog" />
                </div>
                <div className='nft-element'>
                    <img src={ape} alt="nft-ape" />
                </div>
                <div className='nft-element'>
                    <img src={man} alt="nft-man" />
                </div>
            </div>
        </div>
    )
}
