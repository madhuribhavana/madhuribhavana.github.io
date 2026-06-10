import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WORK_ITEMS = [
  {id:'ad-formats', label:'AD FORMATS', subtitle:'Helping publishers choose the right ad format', text:'Conducted foundational research to improve the format selection experience', img:'/admob/d2.png', imgRight:true, landscape:true},
  {id:'testing-ads', label:'TESTING ADS', subtitle:'Helping app developers and adops test their ads', text:'Led qualitative research and RITE concept testing to launch mobile ads testing features.', img:'/admob/d3.png', imgRight:false},
  {id:'policy-center', label:'POLICY CENTER', subtitle:'Helping publishers understand and resolve policy violations', text:'Led qualitative research to re-design a cross-product feature.', img:'/admob/d4.png', imgRight:true},
  {id:'spam', label:'SPAM AND VIOLATIONS', subtitle:'Helping publishers and Google reduce spam', text:'Led mixed-methods research', img:'/admob/d5.png', imgRight:false},
  {id:'reporting', label:'REPORTING', subtitle:'Helping app developers to understand the value of ad monetized users', text:'Conducted concept testing and usability evaluation to help launch user based cohort reports.', img:'/admob/d6.png', imgRight:true},
]

const LEARNINGS = [
  {label:'TEAMS', subtitle:'Working with cross-functional teams', text:'As a UXR, I was responsible for working with product, design and engineering teams to understand product goals and resources, to plan research studies and communicate insights and design directions.'},
  {label:'PRODUCT SUITE', subtitle:'Working with cross-product teams', text:'Google ads publisher suite has three huge products that cater to different publisher sizes and often overlapping features require cross-product research.'},
  {label:'INDUSTRY RESEARCH', subtitle:'Research and management skills in an industry setting', text:'Google has provided me the experience of managing research projects and resources in an industry setting.'},
]

export default function AdMob() {
  return (
    <div id="app-body" className="placard">
      <Navbar />

      <div id="summary-block" className="row d-flex align-items-center flex-column">
        <div id="header-block" className="container-fluid">
          <div className="main-header row d-flex justify-content-center"><h5>UX RESEARCH @ GOOGLE</h5></div>
          <div className="sub-header row d-flex justify-content-center">
            <h1 className="col-7">Helping ad publishers and developers monetize their apps</h1>
          </div>
        </div>

        <div id="feature-block" className="row col-12 container-fluid feature-block d-flex justify-content-around">
          <img src="/admob/d0.png" alt="project-image" width="100%" />
        </div>

        <div id="problem-block" className="row col-7 container-fluid">
          <div className="sub-header centered row d-flex justify-content-center">
            <h2>As a UX Researcher, I am responsible for representing ad publishers/developers voice and helping build meaningful features for AdMob.</h2>
          </div>
        </div>

        <div id="admob-header-block" className="container-fluid">
          <div className="main-header row d-flex justify-content-center"><h5>KNOW WHAT I STRIVE FOR</h5></div>
          <div className="sub-header centered row d-flex justify-content-center">
            <h2 id="admob-sub-header" className="col-7">What am I <span style={{color:'#e8aa2c'}}>doing?</span></h2>
          </div>
        </div>

        {WORK_ITEMS.map(item => (
          <div key={item.id} id="section-x-block" className="row col-8 container d-flex align-items-center justify-content-between">
            {!item.imgRight && (
              <div className="col-5">
                <div className={`process ${item.landscape ? 'admob-image-landscape' : 'admob-image'}`}>
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
                <div className={`process ${item.landscape ? 'admob-image-landscape' : 'admob-image'}`}>
                  <img src={item.img} alt="project-image" className="process-image-no-text" />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Learnings */}
        <div id="admob-header-block-2" className="container-fluid">
          <div className="main-header admob-left-align row d-flex justify-content-center"><h5>LEARNING EXPERIENCE</h5></div>
          <div className="sub-header centered row d-flex justify-content-center">
            <h2 className="col-7">I <span style={{color:'#e8aa2c'}}>learnt..</span></h2>
          </div>
        </div>

        <div id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-center">
          {LEARNINGS.map(l => (
            <div key={l.label} className="col-4 text-box-white">
              <div className="text-box-inner-admob d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align row d-flex justify-content-center"><h5>{l.label}</h5></div>
                <div className="sub-header admob-left-align row d-flex justify-content-left"><h4>{l.subtitle}</h4></div>
                <p className="intro-description-text">{l.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* NDA */}
        <div id="admob-header-block-3" className="container-fluid">
          <div className="main-header row d-flex justify-content-center"><h5>NDA</h5></div>
          <div className="sub-header admob-left-align row d-flex justify-content-center">
            <h3 className="col-7">
              Due to legal constraints, I cannot share the exact work I have done.{' '}
              <a href="mailto:madhuribhavana15@gmail.com">Contact me</a> to know more about my experience.
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
