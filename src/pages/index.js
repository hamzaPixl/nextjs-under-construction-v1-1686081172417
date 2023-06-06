/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import SEO from '../components/seo'
import { TypeAnimation } from 'react-type-animation'
import Layout from '../components/layout'
import injected from '../injected.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamondTurnRight, faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function IndexPage() {
  const sequences = []
  injected.headline.chips.forEach((chip, index) => {
    sequences.push(chip)
    if (index !== injected.headline.chips.length - 1) {
      sequences.push(500)
    }
  })

  return (
    <Layout>
      <SEO
        themeColor={injected.manifest.themeColor}
        description={injected.description}
        author={injected.author.name}
        meta={[{ keywords: injected.keywords }]}
        title={injected.title}
        name={injected.manifest.projectShortName}
        url={injected.manifest.url}
      />
      <div className='flex flex-col md:flex-row'>
        <div className='relative items-center justify-center overflow-hidden basis-3/4'>
          <video
            className='object-cover absolute z-10 h-full w-full'
            poster='video_placeholder.jpg'
            autoPlay
            muted
            loop
          >
            <source type='video/mp4' src='video.mp4'></source>
            <source type='video/webm' src='video.webm'></source>
            <source type='video/ogv' src='video.ogv'></source>
          </video>
          <div className='bg-secondaryBg/70 relative z-30 h-full flex justify-between sm:px-24 px-9 w-full flex-col text-primaryText text-base'>
            <div className='py-10'>
              <Image width='200' height='200' src='logo.svg' alt={injected.description} />
            </div>
            <div className='py-20 sm:text-2xl text-base font-normal'>
              <p className='py-5'>{injected.headline.title}</p>
              <TypeAnimation
                sequence={sequences}
                className='sm:text-9xl text-4xl font-bold after:content-["|"] after:text-secondary'
                repeat={Infinity}
              />
              <p className='py-10'>{injected.headline.subTitle}</p>
              <p className='py-10'>{injected.headline.description}</p>
              <div className='py-10 font-bold text-sm'>
                <a
                  href={`tel:${injected.tel.tel}`}
                  className='transition-all mb-10 rounded-md p-5 bg-secondary text-secondaryText hover:bg-opacity-0 hover:text-primaryText hover:border-2'
                >
                  <span>{injected.headline.caption}</span>
                </a>
              </div>
            </div>
            <div className='py-10 flex flex-col w-full justify-between sm:text-base text-xs sm:flex-row'>
              <div>
                <span>{injected.countdownTitle}</span>
              </div>
              <div className='flex flex-row  pt-2 sm:pt-0'>
                <div className='uppercase opacity-60'>
                  made with
                  <FontAwesomeIcon className='px-2' icon={faHeart} />
                  by
                </div>
                <a
                  href={injected.author.url}
                  className='transition-all uppercase hover:text-secondary pl-2'
                  target='_blank'
                  rel='noreferrer'
                >
                  {injected.author.name}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-secondary basis-1/4 text-base font-normal py-16 opacity-transition'>
          <div className='px-12 flex flex-col justify-between h-full'>
            <h1 className='py-6 lg:text-2xl/10 font-bold'>{injected.asideContent.title}</h1>
            {injected.asideContent.text.map((t, index) => (
              <p key={index} className='mb-9'>
                {t}
              </p>
            ))}
            <div className='py-3 font-bold text-sm'>
              <div>
                <a
                  href={`mailto:${injected.mail.mail}`}
                  className='transition-all mb-10 rounded-md border-2 p-5 hover:bg-transparent hover:text-secondaryText hover:border-0'
                >
                  <span>{injected.mail.caption}</span>
                </a>
              </div>
              <div className='py-12 font-bold text-sm'>
                <a
                  href={`tel:${injected.tel.tel}`}
                  className='transition-all mb-10 rounded-md border-2 p-5 hover:bg-transparent hover:text-secondaryText hover:border-0'
                >
                  <span>{injected.tel.caption}</span>
                </a>
              </div>
            </div>
            <div className='pt-10 font-medium text-xs'>
              <a
                href={injected.address.url}
                className='transition-all uppercase font-medium hover:text-secondaryText'
                target='_blank'
                rel='noreferrer'
              >
                {injected.address.address}
              </a>
              <FontAwesomeIcon className='px-2' icon={faDiamondTurnRight} />
            </div>
            <div className='py-3 text-xs font-medium inline-flex uppercase'>
              <div className='inline-flex items-center'>
                <a
                  href={injected.manifest.url}
                  target='_blank'
                  className='transition-all hover:text-secondaryText'
                  rel='noreferrer'
                >
                  {injected.manifest.projectShortName}
                </a>
                <FontAwesomeIcon icon={faCopyright} className='px-2' />
              </div>
              <div className='opacity-60'>{injected.manifest.copyright}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
