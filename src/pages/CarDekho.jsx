import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WORK_ITEMS = [
  {label:'MIXED METHODS RESEARCH', subtitle:'Conducted research to understand user types, their behaviours, needs, painpoints and touchpoints.', text:'• SME interviews to understand product vision and goals.\n• Contextual inquiries with users\n• Stakeholder interviews\n• Card sorting\n• UI Evaluation via heuristics', img:'/car/c1.png', imgRight:true},
  {label:'QUANT RESEARCH', subtitle:'Quant research to track user conversions and analyze user journeys.', text:'• Used Google analytics to track journey related metrics\n• Used NPS ratings to understand painpoints in experiences\n• In-page surveys', img:'/car/c2.png', imgRight:false},
  {label:'ANALYSIS AND USER TYPES', subtitle:'Created personas for the product and generated behavioural archetypes', text:'• Broke down the current journeys into broad stages - research, dealer interaction and purchase and represented the touchpoints and painpoints.', img:'/car/c3.png', imgRight:true},
  {label:'PRODUCT DESIGN', subtitle:'Designed new features, changed information architecture and personalized user experiences.', text:"Collaborated with product, FE, content and visual design teams to design and deploy new features.", img:'/car/c4.png', imgRight:false},
  {label:'EVALUATION AND TESTING', subtitle:'Tracked and tested design changes via qualitative and quantitative methods.', text:'Based on the testing results, iterations to the new features were made.', img:'/car/c4.png', imgRight:true},
  {label:'VISUAL DESIGN', subtitle:'Designed and developed a visual style guide and component library.', text:"Collaborated with the FE team to develop a component library for cardekho's subsidiary - Zigwheels.com.", img:'/car/c6.png', imgRight:false},
]

const LEARNINGS = [
  {subtitle:'Collaboration', text:"Working with cross functional teams - engineering, product, analytics and marketing gave me a chance to improve collaboration skills and establish partnerships."},
  {subtitle:'Agile Environments', text:"As several startups operate using agile processes, I learnt to adapt UX processes, timelines to synchronize with product development roadmaps."},
  {subtitle:'Ownership', text:"As a UXer, I practiced representing the voice of the user and taking ownership of my design decisions, and guided product teams with their strategies."},
]

export default function CarDekho() {
  return (
    <div id="app-body" className="placard">
      <Navbar />

      <div id="summary-block" className="row d-flex align-items-center flex-column">
        <div id="header-block" className="container-fluid">
          <div className="main-header row d-flex justify-content-center"><h5>UX @ CARDEKHO.COM</h5></div>
          <div className="sub-header row d-flex justify-content-center">
            <h1 className="col-7" style={{marginBottom:'2rem'}}>Improving the car buying experience</h1>
          </div>
        </div>

        <div id="feature-block" className="row col-12 container-fluid feature-block d-flex justify-content-around">
          <img src="/car/c0.png" alt="project-image" width="100%" />
        </div>

        <div id="car-problem-block" className="row col-7 container-fluid" style={{marginTop:'3rem'}}>
          <div className="sub-header centered row d-flex justify-content-center">
            <h2>As a UXer, I was responsible for understanding car buyers&apos; needs and behaviors and design meaningful solutions to enhance their car buying experience.</h2>
          </div>
        </div>

        <div id="header-block" className="container-fluid">
          <div className="main-header d-flex justify-content-center"><h5>THE GOALS..</h5></div>
          <div className="car-sub-header admob-left-align d-flex justify-content-center">
            <h3 className="col-7">
              To understand user types and experience.<br />
              To improve usability across all product platforms.<br />
              To personalize user journeys to deliver a meaningful experience.
            </h3>
          </div>
        </div>

        <div id="admob-header-block" className="container-fluid">
          <div className="main-header row d-flex justify-content-center"><h5>MY WORK</h5></div>
          <div className="sub-header centered row d-flex justify-content-center">
            <h2 id="car-sub-header" className="col-7">What did I <span style={{color:'#4285f4'}}>do?</span></h2>
          </div>
        </div>

        {WORK_ITEMS.map((item, idx) => (
          <div key={idx} id={idx === 0 ? 'section-x-block-car' : 'section-x-block'} className="row col-8 container d-flex align-items-center justify-content-between">
            {!item.imgRight && (
              <div className="col-5 d-flex justify-content-end">
                <div className="admob-image-landscape">
                  <img src={item.img} alt="project-image" className="process-image-no-text" />
                </div>
              </div>
            )}
            <div className="col-5 text-box-white">
              <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align row d-flex justify-content-center"><h5>{item.label}</h5></div>
                <div className="sub-header admob-left-align row d-flex justify-content-left"><h4>{item.subtitle}</h4></div>
                <p className="intro-description-text">{item.text}</p>
              </div>
            </div>
            {item.imgRight && (
              <div className="col-5 d-flex justify-content-end">
                <div className="admob-image-landscape">
                  <img src={item.img} alt="project-image" className="process-image-no-text" />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Learnings */}
        <div id="admob-header-block-2" className="d-flex align-items-center flex-column container col-9">
          <div className="main-header admob-left-align d-flex justify-content-center"><h5>LEARNING EXPERIENCE</h5></div>
          <div className="sub-header centered d-flex justify-content-center">
            <h2 style={{paddingBottom:'2rem'}}>I <span style={{color:'#4285f4'}}>learnt..</span></h2>
          </div>
        </div>

        <div id="section-x-block" className="row d-flex align-items-start justify-content-center">
          {LEARNINGS.map(l => (
            <div key={l.subtitle} className="col-3 text-box-white">
              <div className="text-box-inner-car d-flex align-items-start flex-column justify-content-between">
                <div className="sub-header admob-left-align row d-flex justify-content-left"><h4>{l.subtitle}</h4></div>
                <p className="intro-description-text">{l.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div id="admob-header-block-3" className="container-fluid">
          <div className="main-header row d-flex justify-content-center"><h5>CONTACT ME</h5></div>
          <div className="sub-header admob-left-align row d-flex justify-content-center">
            <h3 className="col-7">
              Due to legal constraints, I cannot share the details here.{' '}
              <a href="mailto:madhuribhavana15@gmail.com?subject=UXandChai">Contact me</a> to know more about my experience.
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
