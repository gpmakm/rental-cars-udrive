import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import safari from '../UdriveImages/TaTaSafari.jpg'
import scorpip from '../UdriveImages/ScorpipN.jpg'
import xuv from '../UdriveImages/XUV.jpg'
import baleno from '../UdriveImages/Baleno.jpg'
import dzire from '../UdriveImages/11.png'
import thar from '../UdriveImages/14.png'
import sonet from '../UdriveImages/Sonet.jpg'
import swift from '../UdriveImages/Swift.jpg'
import i20 from '../UdriveImages/i20.jpg'
import venue from '../UdriveImages/Venue.jpg'
import s3 from '../UdriveImages/S3.jpg'
import s10 from '../UdriveImages/S10.jpg'
import gv from '../UdriveImages/GrandVitara.jpg'


const cars = () => {
  return (
    <div className='carPage'>We have the following range of vehicles alognwith their rents.
      <div className='cars'>
        <div className='carInfo'>
          <Image src={gv} width={450} height={400} />
          <div className='carRent'>Rs. 4999/- per day</div>
          <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
        </div>
        <div className='carInfo'>
          <Image src={scorpip} width={450} height={400} />
          <div className='carRent'>Rs. 4999/- per day</div>
          <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
        </div>

      </div>
      <div className='cars'>
        <div className='carInfo'>
          <Image src={baleno} width={450} height={400} />
          <div className='carRent'>Rs. 2500/- per day</div>
          <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
        </div>
        <div className='carInfo'>
          <Image src={xuv} width={450} height={400} />
          <div className='carRent'>Rs. 2799/- per day</div>
          <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
        </div>
      </div>
      <div className='cars'>
      <div className='carInfo'>
        <Image src={dzire} width={450} height={400} />
        <div className='carRent'>Rs. 2200/- per day</div>
        <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
      </div>
      <div className='carInfo'>
        <Image src={thar} width={450} height={400} />
        <div className='carRent'>Rs. 4199/- per day</div>
        <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
      </div>
      </div>
      <div className='cars'>
      <div className='carInfo'>
        <Image src={swift} width={450} height={400} />
        <div className='carRent'>Rs. 2099/- per day</div>
        <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
      </div>
      <div className='carInfo'>
        <Image src={sonet} width={450} height={400} />
        <div className='carRent'>Rs. 2800/- per day</div>
        <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
      </div>
      </div>
      <div className='cars'>
      <div className='carInfo'>
        <Image src={venue} width={450} height={400} />
        <div className='carRent'>Rs. 2750/- per day</div>
        <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
      </div>
      <div className='carInfo'>
        <Image src={i20} width={450} height={400} />
        <div className='carRent'>Rs. 2699/- per day</div>
        <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
      </div>
      </div>
      <div className='cars'>
      <div className='carInfo'>
        <Image src={s3} width={450} height={400} />
        <div className='carRent'>Rs. 3999/- per day</div>
        <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
      </div>
      <div className='carInfo'>
        <Image src={s10} width={450} height={400} />
        <div className='carRent'>Rs. 3499/- per day</div>
        <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
      </div>
      </div>
    </div>

  )
}

export default cars