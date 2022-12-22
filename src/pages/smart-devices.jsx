import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import {Prose} from "@/components/Prose";

const products = [
  {
    id: 1,
    name: 'Kasa Smart Plug',
    description: 'This is a smart plug that can be used for any electric appliances',
    href: 'https://www.amazon.com/TP-Link-Kasa-Smart-Wifi-Plug/dp/B07RCNB2L3?keywords=kasa%2Bsmart%2Bplug&qid=1671731916&sprefix=kasa%2Bsmart%2Bpl%2Caps%2C266&sr=8-5&th=1&linkCode=li2&tag=sripriyankama-20&linkId=7d349ee1186282b8923e41248473f5f4&language=en_US&ref_=as_li_ss_il',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07RCNB2L3&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },
  {
    id: 2,
    name: 'Govee Smart LED Strip Lights',
    description: '16.4ft WiFi LED Light Strip Work with Alexa and Google Assistant, 16 Million Colors with App Control',
    href: 'https://www.amazon.com/dp/B07N1CMGQQ?th=1&linkCode=li2&tag=sripriyankama-20&linkId=6b370d295395541fd8cbc1574d9752d5&language=en_US&ref_=as_li_ss_il',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N1CMGQQ&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },
  {
    id: 3,
    name: 'Alexa Echo Dot',
    description: 'Bigger vibrant sound in a compact smart speaker with Alexa | Charcoal',
    href: 'https://www.amazon.com/dp/B09B8V1LZ3?&linkCode=li3&tag=sripriyankama-20&linkId=dee634dc1d6a8985b8f5c36ce24b6c12&language=en_US&ref_=as_li_ss_il',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09B8V1LZ3&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },
  {
    id: 4,
    name: 'Logitech G PRO Mechanical Gaming Keyboard',
    description: 'Ultra Portable Tenkeyless Design, 16.8 Million Color LIGHTSYNC RGB Backlit Keys\n',
    href: 'https://www.amazon.com/dp/B07QQB9VCV?th=1&linkCode=li3&tag=sripriyankama-20&linkId=502e634b26afbfdeb61f5f11a6877dfe&language=en_US&ref_=as_li_ss_il',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QQB9VCV&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },
  {
    id: 5,
    name: 'Logitech MX Master 3S - Wireless Performance',
    description: 'Logitech MX Master 3S - Wireless Performance Mouse with Ultra-fast Scrolling.',
    href: 'https://www.amazon.com/dp/B09HM94VDS?th=1&linkCode=li3&tag=sripriyankama-20&linkId=0d16dc89784ee07c6bd3b9ff10170e00&language=en_US&ref_=as_li_ss_il',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09HM94VDS&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },

]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Links() {
  return (
    <>
      <Head>
        <title>Smart Devices - Vijay Tupakula</title>
        <meta
          name="description"
          content="Links to the Products that I show in my videos"
        />
      </Head>
      <SimpleLayout
        title="Links to the Products that I show in my videos."
        intro="You can find multiple products below that are from the videos I have shown on TikTok or Instagram or Youtube. Just an FYI that some of them are affiliate smartDevices."
      >
    <hr/>
        <div className="bg-white">

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                  <div key={product.id}>
                      <a rel="noreferrer" href={product.href} className="group" target="_blank">
                          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                              <img
                                  src={product.imageSrc}
                                  alt={product.description}
                                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                              />
                          </div>
                          <h3 className="mt-4 text-lg font-bold text-gray-700">{product.name}</h3>
                          <Prose>{product.description}</Prose>
                      </a>

                      {products.length !== product.id && <hr className="mt-6 md:hidden"/>}
                  </div>
              ))}
            </div>
          </div>
      </SimpleLayout>
    </>
  )
}
