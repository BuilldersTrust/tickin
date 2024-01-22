import React from 'react'
import "./About.scss"
import Card from '../components/Card'
import FavoriteIcon from '@mui/icons-material/Favorite';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function Benefits() {
  return (
    <div className='about-section'>
      <div>Big benefits, readily available</div>
      <div> We help anyone who issues tickets worldwide to take
        advantage of the latest technological innovations</div>

      <div className='card-section'>
        <Card headerText="A title" bodyText="a text" icon={<FavoriteIcon />} />
        <Card headerText="A title" bodyText="a text" icon={<QrCodeScannerIcon />} />
        <Card headerText="A title" bodyText="a text" icon={<MonetizationOnIcon />} />
        <Card headerText="A title" bodyText="a text" icon={<VerifiedUserIcon />} />
      </div>

    </div>
  )
}
