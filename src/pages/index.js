/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import SEO from '../components/seo'
import { TypeAnimation } from 'react-type-animation'
import Layout from '../components/layout'
import injected from '../injected.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiamondTurnRight,
  faCopyright,
  faHeart,
  faFaceFrownOpen,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'

export default function IndexPage() {
  const mail = false
  const subscriptionError = false
  const subscriptionSuccess = false

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
      <div className='min-h-screen flex flex-col md:flex-row bg-secondary text-primaryText'>
        {!mail && (
          <div className='relative items-center justify-center overflow-hidden basis-3/4'>
            <video
              className='object-cover absolute z-10 h-full w-full'
              poster='video_placeholder.png'
              autoPlay
              muted
              loop
            >
              <source type='video/mp4' src='video.mp4'></source>
              <source type='video/ogv' src='video.ogv'></source>
            </video>
            <div className='bg-secondaryBg/60 relative justify-between z-30 h-full flex sm:px-24 px-9 w-full flex-col text-base'>
              <Image
                className='py-10 opacity-transition'
                width='130'
                height='130'
                src='/logo.png'
                alt={injected.description}
              />
              <div className='max-w-3xl'>
                <h1 className='py-12 text-xl font-semibold'>{injected.headline.title}</h1>
                <TypeAnimation
                  sequence={sequences}
                  className='text-2xl sm:text-6xl font-bold after:content-["|"] after:text-secondary whitespace-nowrap'
                  repeat={Infinity}
                />
              </div>
              <div className='py-8 max-w-3xl text-base font-normal'>
                <div className='my-8 py-5'>
                  {injected.headline.text.map((t, index) => (
                    <p key={index} className='py-2'>
                      {t}
                    </p>
                  ))}
                </div>
                <a
                  href={`tel:${injected.tel.tel}`}
                  className='transition-all font-bold my-10 rounded-md p-5 bg-secondary text-primaryText hover:bg-opacity-0 hover:text-primaryText hover:border-2'
                >
                  <span>{injected.headline.caption}</span>
                </a>
              </div>
              <div className='py-10 flex flex-col w-full justify-between sm:text-base text-xs sm:flex-row  opacity-transition'>
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
        )}

        {mail && (
          <div className='bg-secondaryBg/70 flex flex-col text-base font-normal justify-center basis-3/4 opacity-transition px-14'>
            <div className='max-w-2xl'>
              <h3 className='py-6 lg:text-2xl/10 font-bold'>
                Apprenez-en plus sur notre lancement
              </h3>
              <p className='py-10'>
                Inscrivez-vous à notre newsletter et nous vous enverrons une notification concernant
                le lancement de notre tout nouveau site web ainsi que l'ouverture de votre centre
                Premier Art.
              </p>
              <form className='flex flex-col' id='notify-form'>
                <input
                  className='mb-10 border-solid border-b-2 border-primaryText p-5 outline-none bg-secondaryBg/0'
                  type='email'
                  placeholder='Adresse e-mail'
                  required
                />
                <button
                  className='w-44 transition-all mb-10 font-bold text-sm bg-secondary rounded-md border-2 border-primaryText p-5 hover:bg-secondaryBg/0'
                  type='submit'
                >
                  <span>Envoyer</span>
                </button>
              </form>
            </div>
            {subscriptionSuccess && (
              <div className='max-w-2xl py-5'>
                <FontAwesomeIcon className='lg:text-2xl/10 font-bold py-5' icon={faCircleCheck} />
                <p className='lg:text-2xl/10 font-bold py-5'>
                  {injected.mail.callback.successMessage}
                </p>
                <span className='py-10'>{injected.mail.callback.successSubMessage}</span>
              </div>
            )}
            {subscriptionError && (
              <div className='max-w-2xl py-5'>
                <FontAwesomeIcon className='lg:text-2xl/10 font-bold py-5' icon={faFaceFrownOpen} />
                <p className='lg:text-2xl/10 font-bold py-5'>
                  {injected.mail.callback.errorSubMessage}
                </p>
                <span className='py-10'>{injected.mail.callback.errorMessage}</span>
              </div>
            )}
          </div>
        )}

        <div className='basis-1/4 text-base font-normal py-16 opacity-transition'>
          <div className='px-12 flex flex-col justify-between h-full'>
            <h2 className='py-6 lg:text-2xl/10 font-bold'>{injected.asideContent.title}</h2>
            {injected.asideContent.text.map((t, index) => (
              <p key={index} className='text-sm mb-9'>
                {t}
              </p>
            ))}
            <div className='py-3 font-bold text-sm'>
              <div>
                <a
                  href={`mailto:${injected.mail.mail}`}
                  className='transition-all mb-10 rounded-md border-2 p-5 hover:bg-secondary/0 hover:text-secondaryText hover:border-0'
                >
                  <span>{injected.mail.caption}</span>
                </a>
              </div>
              <div className='py-12 font-bold text-sm'>
                <a
                  href={`tel:${injected.tel.tel}`}
                  className='transition-all mb-10 rounded-md border-2 p-5 hover:bg-secondary/0 hover:text-secondaryText hover:border-0'
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
      </div>
    </Layout>
  )
}
