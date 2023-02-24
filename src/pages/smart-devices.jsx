import Image from 'next/image'
import Head from 'next/head'
import { Container } from '@/components/Container'

import { SimpleLayout } from '@/components/SimpleLayout'
import {Prose} from "@/components/Prose";
import Link from "next/link";
import {GitHubIcon, InstagramIcon, TikTok, TwitterIcon} from "@/components/SocialIcons";

const products = [
  {
    id: 1,
    name: 'Wyze Smart Lock',
    description: 'Wyze Fingerprint Bluetooth Smart Lock - Keyless Entry via Code, Fingerprint, or App, Complete Deadbolt Replacement, Installs in 10 Minutes',
    href: 'https://amzn.to/3XrRVF6',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09R38VVXF&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },
  {
    id: 2,
    name: 'CradleWise Smart Crib',
    description: '4-in-1 crib, reinvented: How to choose grow-with-baby nursery items',
    href: 'https://cradlewise.com?aff=26',
    imageSrc: 'https://cradlewise.com/_next/image?url=https%3A%2F%2Fs3.us-west-1.amazonaws.com%2Fassets.cradlewise.com%2Fwp-content%2Fuploads%2F2022%2F11%2F4-in-1-hero-crib-image-1.png&w=1920&q=75',
  },
  {
    id: 3,
    name: 'Kasa Smart Plug',
    description: 'This is a smart plug that can be used for any electric appliances',
    href: 'https://amzn.to/3xl31RL',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07RCNB2L3&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },
  {
    id: 2,
    name: 'Govee Smart LED Strip Lights',
    description: '16.4ft WiFi LED Light Strip Work with Alexa and Google Assistant, 16 Million Colors with App Control',
    href: 'https://amzn.to/3IpBfcV',
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
    href: 'https://www.amazon.com/dp/B07QQB9VCV?th=1&linkCode=ll1&tag=vijaytupakula-20&linkId=75a8d11897d5239b18ab29d26e985064&language=en_US&ref_=as_li_ss_tl',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QQB9VCV&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },
  {
    id: 5,
    name: 'Logitech MX Master 3S - Wireless Performance',
    description: 'Logitech MX Master 3S - Wireless Performance Mouse with Ultra-fast Scrolling.',
    href: 'https://www.amazon.com/dp/B09HM94VDS?th=1&linkCode=ll1&tag=vijaytupakula-20&linkId=347a19de32092e2db7fc808a5cdc01ea&language=en_US&ref_=as_li_ss_tl',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09HM94VDS&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },
  {
    id: 7,
    name: 'Govee Smart Light Bulbs',
    description: 'WiFi Bluetooth Color Changing Light Bulbs, Music Sync, 54 Dynamic Scenes,',
    href: 'https://www.amazon.com/Govee-Changing-Dynamic-Bluetooth-Assistant/dp/B09B7NQT2K?crid=DSRRWFM8UN08&keywords=govee%2Bsmart%2Bplug%2Bbulb&qid=1671860711&sprefix=govee%2Bsmart%2Bplug%2Bbulb%2Caps%2C155&sr=8-4-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFOUFZHN1VGVE5CRUUmZW5jcnlwdGVkSWQ9QTA4MDczNzUxMjJETkYxUklEVTI3JmVuY3J5cHRlZEFkSWQ9QTA0MDIwNjAxVFczUjlNWDhCUk9OJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1&linkCode=ll1&tag=vijaytupakula-20&linkId=1f3c5805c38d551bb96be3500bc90339&language=en_US&ref_=as_li_ss_tl',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09B7NQT2K&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },
  {
    id: 8,
    name: 'Govee LED Strip Lights - Trash Pickup Automation',
    description: 'WiFi Bluetooth Color Changing Light Bulbs, Music Sync, 54 Dynamic Scenes,',
    href: 'https://www.amazon.com/gp/product/B08YDGL4Q7?ie=UTF8&th=1&linkCode=ll1&tag=vijaytupakula-20&linkId=d0fcb5a1d8f5597106af7945b50c131e&language=en_US&ref_=as_li_ss_tl',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08YDGL4Q7&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=sripriyankama-20&language=en_US',
  },
  {
    id: 9,
    name: 'Ring Yard Sign',
    description: 'WiFi Bluetooth Color Changing Light Bulbs, Music Sync, 54 Dynamic Scenes,',
    href: 'https://www.amazon.com/Ring-53-021459-Solar-Security-Sign/dp/B07P3FQ8SF?keywords=ring+yard+sign&qid=1676993655&sprefix=ring+ya%2Caps%2C138&sr=8-3&linkCode=ll1&tag=vijaytupakula-20&linkId=0dd3f9d641c9058144e6086e547f593a&language=en_US&ref_=as_li_ss_tl',
    imageSrc: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07P3FQ8SF&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=vijaytupakula-20&language=en_US',
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

function SocialLink({ icon: Icon, ...props }) {
  return (
      <Link className="group -m-1 p-1" {...props} target="_blank">
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </Link>
  )
}

export default function Links() {
  return (
    <>
      <Container>
        <div className="flex gap-6 mt-6">
          <SocialLink
              href="https://tiktok.com/@vijaysmarthome"
              aria-label="Follow on LinkedIn"
              icon={TikTok}
          />
          <SocialLink
              href="https://twitter.com/vijaytupakula"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
          />
          <SocialLink
              href="https://instagram.com/vijaysmarthome"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
          />
          <SocialLink
              href="https://github.com/vijaythecoder"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
          />
        </div>
      </Container>
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
        <hr className="my-4" />
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
