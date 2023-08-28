import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon, TikTok,
} from '@/components/SocialIcons'
import portraitImage from '@/images/vijayTupakulaPicture.JPG'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={'_blank'}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Vijay Tupakula</title>
        <meta
          name="description"
          content="I’m Vijay Tupakula. I live in Austin, TX, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m <span className="text-indigo-500">Vijay Tupakula.</span> <br/> I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <h3 className="text-2xl font-bold">Currently</h3>
              <p>I am co-founder of <a className="text-indigo-600 font-bold" href="https://getcate.ai"> Cate AI </a> - A Virtual Phone assistant for restaurants that answers incoming calls to take orders and answer questions</p>
              <p> I also tinker lot of machines or electronic devices to create a better home, Yes, lot of home automation. I post my home automation tutorials and demos on
                 <a className="text-indigo-500" href="https://www.tiktok.com/@vijaysmarthome" target={'_blank'} rel="noreferrer"> TikTok</a> if you are interested</p>
              <h3 className="text-2xl font-bold">History</h3>
              <p>I started learning web technologies in 2006, at the age of 15, with html. I remember getting excited with html and css. I am self-learner and from that day I started exploring internet aiming to earn money with the skills I had at that time, its fun looking back at the web pages I used to make. Got one of my blog approved for google ad sense after lot of tries, the blog is based on Ethical Hacking, yes I have spent enough time to learn myself about Ethical hacking.</p>
              <p>Around 2008 (during my Bachelors Degree), I discovered PHP and developed few dynamic websites. I used to contact local store owners and develop them small applications which were used by them for while. During my Bachelors degree, I was good at one thing for sure, programming. I fell in love with programming and decided to explore in this area.</p>
              <p>Around 2012, I got a partime job from PHPPOS for the skills I have like php, mysql, codeigniter, html, css, jquery and I am good at them. While my part time goes well as a backend developer with minimum html and css work, I explored into themeforest market where I could sell my own themes, to do that I have to be really good at themes and after applying for more than 17 times, one of my item is approved and during this process of approval (8 months) I got really good with designing too. That is the time I started my own company Bootstrap Guru . My part time job and startup demanded me to learn lot of things as a web developer and I really liked it.</p>
              <p>Over the years, I have worked on many freelance projects working to individuals and big companies. I have gained lot of skills on web development and few years ago fell in love with javascript (mainly es6 and VueJS). I have worked on many of own projects too and the big one of them is Larapos I lead many projects with many developers, reviewed the code, distribute the work basing on their skills, choose the best the technologies for a project. I have successfully completed custom projects to production.</p>

              <p>I am also interested in Internet of things and using javascript I made lot of hardware projects. I do play PS4 games, binge watch.</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://tiktok.com/@vijaysmarthome" icon={TikTok}>
                Follow on Tiktok
              </SocialLink>
              <SocialLink href="https://twitter.com/vijaytupakula" icon={TwitterIcon}  className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/vijaysmarthome/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/vijaytupakula" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="mailto:sponsor@vijaykumar.me"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hello@vijaykumar.me
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
