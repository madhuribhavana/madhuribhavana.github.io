import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const UX_PROJECTS = [
  {
    href: 'https://www.figma.com/proto/xsA2oo2IC99FbLsHLl9Yj9/Sam-s-project?node-id=1-46475&p=f&viewport=79%2C50%2C0.13&t=XhZgVyKsjBYdgLth-1&scaling=contain&content-scaling=fixed&page-id=0%3A1',
    img: '/images/Sams_tb.png',
    alt: "Sam's Club",
    title: 'AI powered auto experiences',
    subtitle: 'Coming soon | Reach out for more details',
    tags: ['UX FOR AI', 'UX STRATEGY', 'SERVICE DESIGN'],
  },
  {
    href: 'https://docs.google.com/presentation/d/11n_rFK2tfmp_A4webABooM70lus-7OWUVoAJAx3Qwjs/edit?slide=id.g1223a25088b_0_113#slide=id.g1223a25088b_0_113',
    img: '/images/Wish_tb.svg',
    alt: 'Wish',
    title: 'Merchandising experiences for Wish shoppers',
    subtitle: 'Designing for growth, engagement and trust',
    tags: ['GROWTH DESIGN', 'UX DESIGN STRATEGY'],
    external: true,
  },
  {
    to: '/nutanix',
    img: '/images/Nutanix_tb.svg',
    alt: 'Nutanix',
    title: 'Re-imagining the compute creation flow',
    subtitle: 'Increased developer efficiency by 80% in deploying virtual machines',
    tags: ['UX DESIGN', 'UX RESEARCH', 'NBU'],
  },
  {
    to: '/amazon',
    img: '/images/projectlinks/proj1.png',
    alt: 'Amazon',
    title: 'Amazon for emerging markets',
    subtitle: 'Amazon Easy (Project Udaan) — Designed an assisted shopping model',
    tags: ['UX Design', 'UX Research', 'Design for NBU'],
  },
  {
    to: '/admob',
    img: '/images/projectlinks/proj7.png',
    alt: 'AdMob',
    title: 'Helping app publishers monetize and build trust',
    subtitle: 'Mixed-methods research to improve the AdMob experience',
    tags: ['GENERATIVE RESEARCH', 'PRODUCT STRATEGY'],
  },
  {
    to: '/cardekho',
    img: '/images/cd_tb.svg',
    alt: 'Cardekho',
    title: 'Making the Car Buying experience seamless',
    subtitle: 'My 9 to 5 at Cardekho.com — the largest car portal in India.',
    tags: ['UX Design', 'UX Research', 'B2C'],
  },
]

const FEATURED_ITEMS = [
  {
    href: 'https://www.nytimes.com/2021/04/12/style/wish-local-shopping.html',
    img: '/images/wish_article.jpeg',
    alt: 'Wish Article',
    meta: 'THE NEW YORK TIMES · APR 2021',
    title: 'Wish App: The Not-Quite-Everything Store',
  },
  {
    href: 'https://www.aboutamazon.in/news/small-business/amazon-easy-stores-bridge-digital-divide-for-indias-shoppers-in-smaller-towns-cities',
    img: '/images/amazon-easy.png',
    alt: 'Amazon Easy',
    meta: 'AMAZON · JAN 2021',
    title: "Amazon Easy Stores Bridge Digital Divide for India's Shoppers in Smaller Towns & Cities",
  },
  {
    href: 'https://blog.google/products/admob/earn-more-this-holiday-season-with-engaging-admob-ad-formats/',
    img: '/images/admob_gif.gif',
    alt: 'AdMob Holiday',
    meta: 'GOOGLE · NOV 2020',
    title: 'Earn more this holiday season with engaging ad formats',
    centeredSmall: true,
  },
  {
    href: 'https://blog.google/products/admob/protecting-mobile-app-ecosystem/',
    img: '/images/policy_center.jpeg',
    alt: 'AdMob Ecosystem',
    meta: 'GOOGLE · FEB 2020',
    title: 'AdMob Policy center: Protecting the mobile app ecosystem',
  },
  {
    href: 'https://blog.google/products/admob/admobs-new-reporting-delivers-better-insights/',
    img: '/images/admob_article.jpeg',
    alt: 'AdMob Reporting',
    meta: 'GOOGLE · SEP 2019',
    title: "AdMob's new reporting delivers better insights",
  },
  {
    href: 'https://www.aboutamazon.in/news/innovation/taking-ecommerce-to-indias-heartland-with-project-udaan-now-called-amazon-easy',
    img: '/images/amazon-udaan.png',
    alt: 'Project Udaan',
    meta: 'AMAZON · MAY 2018',
    title: 'Taking ecommerce to India\'s heartland with Project Udaan (now Amazon Easy)',
  },
]

const EXPLORATION_PROJECTS = [
  {
    to: '/glass',
    img: '/images/projectlinks/proj6.png',
    alt: 'Google Glass',
    title: 'Google glass for order picking in warehouses',
    subtitle: 'AR solutions for efficient order picking',
    tags: ['WEARABLE TECH', 'AUGMENTED REALITY'],
  },
  {
    href: 'https://docs.google.com/presentation/d/1L5GhzelAnS9XgfAmt6JSuMHtTWz3RM54nP7qlgJMhgY/edit?usp=sharing',
    img: '/images/projectlinks/proj9.png',
    alt: 'Wrist Wearable',
    title: 'Designing gestures for a self powered wrist band',
    subtitle: 'Defining use cases for gesture based interactions for vision impaired',
    tags: ['WEARABLES', 'DESIGNING FOR DISABILITIES'],
    external: true,
  },
]

function ProjectCard({ project }) {
  const inner = (
    <div className="pcard">
      <div className="pcard-img-wrap">
        <img src={project.img} alt={project.alt} />
      </div>
      <div className="pcard-body">
        <h5 className="pcard-title">{project.title}</h5>
        <p className="pcard-subtitle">{project.subtitle}</p>
        <div className="pcard-tags">
          {project.tags.map(tag => (
            <span key={tag} className="pcard-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )

  if (project.to) {
    return <Link className="pcard-link" to={project.to}>{inner}</Link>
  }
  if (project.href) {
    return <a className="pcard-link" href={project.href} target="_blank" rel="noreferrer">{inner}</a>
  }
  return <a className="pcard-link" href="#">{inner}</a>
}

function FeaturedCarousel() {
  const trackRef = useRef(null)
  const nextRef = useRef(null)
  const prevRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const btnNext = nextRef.current
    const btnPrev = prevRef.current
    if (!track || !btnNext || !btnPrev) return

    function getStep() {
      const card = track.querySelector('.featured-card-link')
      return card ? card.offsetWidth + 20 : 400
    }

    function updateButtons() {
      const atStart = track.scrollLeft <= 8
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8
      btnPrev.style.display = atStart ? 'none' : 'flex'
      btnNext.style.display = atEnd ? 'none' : 'flex'
    }

    const handleNext = () => track.scrollBy({ left: getStep(), behavior: 'smooth' })
    const handlePrev = () => track.scrollBy({ left: -getStep(), behavior: 'smooth' })

    btnNext.addEventListener('click', handleNext)
    btnPrev.addEventListener('click', handlePrev)
    track.addEventListener('scroll', updateButtons)
    updateButtons()

    return () => {
      btnNext.removeEventListener('click', handleNext)
      btnPrev.removeEventListener('click', handlePrev)
      track.removeEventListener('scroll', updateButtons)
    }
  }, [])

  return (
    <div className="featured-carousel-outer">
      <div className="featured-carousel-track" ref={trackRef}>
        {FEATURED_ITEMS.map((item) => (
          <a key={item.href} className="featured-card-link" href={item.href} target="_blank" rel="noreferrer">
            <div className="featured-card">
              <div className={`featured-card-img-wrap${item.centeredSmall ? ' featured-card-img-wrap--centered-small' : ''}`}>
                <img src={item.img} alt={item.alt} />
              </div>
              <div className="featured-card-body">
                <div className="featured-pub-meta">{item.meta}</div>
                <p className="featured-card-title">{item.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <button className="featured-carousel-btn featured-carousel-btn--prev" ref={prevRef} aria-label="Previous slide">&#8249;</button>
      <button className="featured-carousel-btn featured-carousel-btn--next" ref={nextRef} aria-label="Next slide">&#8250;</button>
    </div>
  )
}

export default function Home() {
  return (
    <div id="app-body" className="placard">
      <Navbar />

      {/* Hero */}
      <div id="introduction-block" className="introduction container d-flex justify-content-center align-items-center">
        <div className="col-7 d-flex align-items-start flex-column">
          <h1 className="intro-heading">
            <strong>Product designer</strong> driven by bridging
            the gap between <strong>experience strategy</strong>
            and measurable outcomes.
          </h1>
          <p className="intro-subtext">
            Currently, designing how AI shapes retail at <strong>Walmart/Sams club</strong> and{' '}
            <em className="vibe-text">vibe designing</em> on the side.
          </p>
          <div className="intro-companies">
            <span>WALMART &nbsp;·&nbsp; WISH &nbsp;·&nbsp; GOOGLE &nbsp;·&nbsp; NUTANIX &nbsp;·&nbsp; AMAZON</span>
          </div>
        </div>
        <div className="introduction-block-image col-5 d-flex justify-content-end align-self-center">
          <img src="/images/maddy_tb.png" alt="Madhuri Bhavana" />
        </div>
      </div>

      {/* UX Work */}
      <div className="container projects-container">
        <div className="section-header-new">
          <h2 className="section-title-new">UX work I shipped</h2>
          <p className="section-subtitle-new">Reach out for details on the most recent</p>
        </div>
        <div className="pcard-grid">
          {UX_PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>

      {/* Featured In */}
      <div className="container projects-container">
        <div className="section-header-new">
          <h2 className="section-title-new">Featured in</h2>
          <p className="section-subtitle-new">Press and work mentions</p>
        </div>
        <FeaturedCarousel />
      </div>

      {/* Explorations */}
      <div className="container projects-container">
        <div className="section-header-new">
          <h2 className="section-title-new">Designing for Wearables</h2>
          <p className="section-subtitle-new">Exploring gesture based interactions</p>
        </div>
        <div className="pcard-grid">
          {EXPLORATION_PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>

      <Footer />
    </div>
  )
}
