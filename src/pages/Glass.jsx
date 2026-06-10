import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DESIGN_SECTIONS = [
  {id:'pick-paths', label:'PICK PATHS AND NAVIGATION', subtitle:'Pick paths are generated and navigation are automatic.', text:'Time taken to complete a task and number of errors were measured for tasks completed by AR vs paper.', img:'/glass/g13.png'},
  {id:'pick-reporting', label:'PICK REPORTING', subtitle:'Pickers can scan and log the picked item.', text:'Time taken to complete a task and number of errors were measured for tasks completed by AR vs paper.', img:'/glass/g14.png'},
  {id:'issue-reporting', label:'ISSUE REPORTING', subtitle:'Issues with products currently being picked can be reported.', text:'Time taken to complete a task and number of errors were measured for tasks completed by AR vs paper.', img:'/glass/g15.png'},
  {id:'issue-logging', label:'ISSUE LOGGING', subtitle:'Pickers can log a variety of issues by scanning products.', text:'Time taken to complete a task and number of errors were measured for tasks completed by AR vs paper.', img:'/glass/g16.png'},
]

export default function Glass() {
  return (
    <div id="app-body" className="placard">
      <Navbar />

      <div id="summary-block" className="d-flex align-items-center flex-column">
        <div id="header-block" className="container-fluid">
          <div className="main-header d-flex justify-content-center"><h5>AR, HEAD MOUNTED DISPLAYS</h5></div>
          <div className="sub-header d-flex justify-content-center">
            <h1 className="col-7">Augmented reality for order picking in warehouses</h1>
          </div>
        </div>

        <div id="feature-block" className="container-fluid feature-block d-flex justify-content-around">
          <img src="/glass/g0.png" alt="project-image" width="100%" />
        </div>

        <div id="background-role-block" className="row col-7 container-fluid d-flex justify-content-start">
          <div id="problem-block-header" className="main-header d-flex justify-content-left">
            <h5>👉&nbsp;&nbsp;THE PROBLEM</h5>
          </div>
          <div className="sub-header d-flex justify-content-center">
            <h2>Order pickers currently use static maps and paper based maps to pick multiple orders, that accounts for 60% of operational costs in the warehouse.</h2>
          </div>
          <div id="background-block" className="col-7">
            <div className="intro-headers"><h6><b>📜&nbsp;&nbsp;CONTEXT</b></h6></div>
            <div className="paragraph-description">
              <span className="intro-description-text">
                Order Picking is the process of finding and picking items inside a warehouse and 50% of the warehouse labour resources are typically involved in picking, packing and shipping outbound orders. Less efficient paper-based systems are still the most widely used method for order picking in warehouses today. Optimizing the pick path and the time associated with navigation can provide quantifiable savings in operational costs.
              </span>
            </div>
          </div>
          <div id="role-duration-block" className="col-5">
            <div className="role-block">
              <div className="intro-headers"><h6><b>👩&nbsp;&nbsp;ROLE</b></h6></div>
              <div className="paragraph-description">
                <span className="intro-description-text">HCI Researcher in a team of four developers.</span>
              </div>
              <br />
              <div className="intro-headers"><h6><b>⏱&nbsp;&nbsp;DURATION</b></h6></div>
              <div className="paragraph-description">
                <span className="intro-description-text">Feb - Mar 2018</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lit Review */}
        <div id="summary-block" className="row d-flex align-items-center flex-column">
          <div className="projects-container-header col-9 d-flex justify-content-start">
            <h2>Lit review findings <strong style={{color:'#E8AA2C',fontSize:'48px'}}>.</strong>
              <p style={{fontSize:'20px',marginBottom:'-30px'}}>Current methods and associated constraints</p><br />
            </h2>
          </div>
          <div className="horizontal-bar space col-10"><hr /></div>
          <div id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-center">
            <div className="col-4 text-box-white">
              <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align d-flex justify-content-center"><h5>CURRENT METHODS</h5></div>
                <div className="sub-header admob-left-align d-flex justify-content-left"><h4>Paper based methods come with several constraints and painpoints..</h4></div>
                <p className="intro-description-text">The paper provides location of items using aisle and shelf numbers, which is not intuitive and requires the picker to refer back and forth to the paper.</p>
              </div>
            </div>
            <div className="col-8 text-box-inside">
              <div className="process">
                <img src="/glass/g2.png" alt="project-image" className="process-image-no-text-glass" />
              </div>
            </div>
          </div>
        </div>

        {/* Need of the hour */}
        <div id="header-block" className="container-fluid">
          <div className="main-header d-flex justify-content-center"><h5>NEED OF THE HOUR</h5></div>
          <div className="sub-header centered d-flex justify-content-center">
            <h2 className="col-7">A more <span style={{color:'#e8aa2c'}}>time efficient and accurate</span> order picking process is the need of the hour due to the impact that operational costs have on businesses. Such an intervention shall also decrease the fatigue of workers and hence prevent man-made errors.</h2>
          </div>
        </div>

        <div id="header-block" className="container-fluid">
          <div className="main-header d-flex justify-content-center"><h5>PAST RESEARCH SUGGESTS..</h5></div>
          <div className="sub-header admob-left-align d-flex justify-content-center">
            <h3 className="col-7">HMDs can increase the speed of order picking by 37% compared to a paper based method. Hence, we proposed an augmented reality (AR) based solution.</h3>
          </div>
        </div>

        <div id="decorator-block" className="container-fluid">
          <img src="/glass/g1.png" alt="project-image" width="80%" className="full-image-center" />
        </div>

        {/* Ideation */}
        <div id="summary-block" className="row d-flex align-items-center flex-column">
          <div className="projects-container-header col-9 d-flex justify-content-start">
            <h2>Ideation and Concept Testing <strong style={{color:'#E8AA2C',fontSize:'48px'}}>.</strong>
              <p style={{fontSize:'20px',marginBottom:'-30px'}}>User journeys, Idea generation and Concept Testing</p><br />
            </h2>
          </div>
          <div className="horizontal-bar space col-10"><hr /></div>

          <div id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-center">
            <div className="col-4 text-box-white">
              <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align d-flex justify-content-start"><h5>STEPS INVOLVED</h5></div>
                <div className="sub-header admob-left-align d-flex justify-content-left"><h4>Navigation to the pick location is the primary step.</h4></div>
                <p className="intro-description-text">The information needs associated with each step are listed beside:</p>
              </div>
            </div>
            <div className="col-8 text-box-inside">
              <div className="process">
                <img src="/glass/g3.png" alt="project-image" className="process-image-no-text-glass" />
              </div>
            </div>
          </div>

          <div id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-center">
            <div className="col-4 text-box-white">
              <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align d-flex justify-content-center"><h5>GESTURES CHOSEN</h5></div>
                <div className="sub-header admob-left-align d-flex justify-content-left"><h4>3 gestures supported by Google glass were chosen.</h4></div>
              </div>
            </div>
            <div className="col-8 text-box-inside">
              <div className="process">
                <img src="/glass/g5.png" alt="project-image" className="process-image-no-text-glass" />
              </div>
            </div>
          </div>
        </div>

        <div id="decorator-block" className="container-fluid">
          <div className="sub-header glass-design-heading d-flex justify-content-center">
            <h4>Design 1 was easier for users to comprehend.</h4>
          </div>
          <img src="/glass/g4.png" alt="project-image" width="80%" className="full-image-center" />
        </div>

        {/* Design and Prototype */}
        <div id="summary-block" className="row d-flex align-items-center flex-column">
          <div className="projects-container-header col-9 d-flex justify-content-start">
            <h2>Design and Prototype <strong style={{color:'#E8AA2C',fontSize:'48px'}}>.</strong>
              <p style={{fontSize:'20px',marginBottom:'-30px'}}>Google glass app UI</p><br />
            </h2>
          </div>
          <div className="horizontal-bar space col-10"><hr /></div>

          <div id="feature-block" className="row col-9 container-fluid feature-block d-flex justify-content-around">
            <img src="/glass/g6.png" alt="project-image" width="100%" />
          </div>

          {DESIGN_SECTIONS.map(s => (
            <div key={s.id} id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-center">
              <div className="col-4 text-box-white">
                <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                  <div className="main-header admob-left-align d-flex justify-content-center"><h5>{s.label}</h5></div>
                  <div className="sub-header admob-left-align d-flex justify-content-left"><h4>{s.subtitle}</h4></div>
                  <p className="intro-description-text">{s.text}</p>
                </div>
              </div>
              <div className="col-8 text-box-inside">
                <div className="process">
                  <img src={s.img} alt="project-image" className="process-image-no-text-glass" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Usability Evaluation */}
        <div className="row d-flex align-items-center flex-column">
          <div className="projects-container-header col-9 d-flex justify-content-start">
            <h2>Usability Evaluation <strong style={{color:'#E8AA2C',fontSize:'48px'}}>.</strong>
              <p style={{fontSize:'20px',marginBottom:'-30px'}}>AR based order picking vs paper based order picking</p><br />
            </h2>
          </div>
          <div className="horizontal-bar space col-10"><hr /></div>

          <div id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-center">
            <div className="col-4 text-box-white">
              <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align d-flex justify-content-center"><h5>WHAT DID WE MEASURE?</h5></div>
                <div className="sub-header admob-left-align d-flex justify-content-left"><h4>Accuracy and Efficiency were calculated.</h4></div>
                <p className="intro-description-text">Time taken to complete a task and number of errors were measured for tasks completed by AR vs paper.</p>
              </div>
            </div>
            <div className="col-8 text-box-inside">
              <div className="process">
                <img src="/glass/g10.png" alt="project-image" className="process-image-no-text-glass" />
              </div>
            </div>
          </div>

          {/* GIFs comparison */}
          <div id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-content">
            <div className="col-6 text-box-inside">
              <div className="process">
                <img src="/glass/PickbyPaper.gif" alt="Pick by Paper" className="process-image-no-text-glass" />
                <div className="d-flex justify-content-center">
                  <p className="intro-description-text">Pick by Paper</p>
                </div>
              </div>
            </div>
            <div className="col-6 text-box-inside">
              <div className="process">
                <img src="/glass/PickbyAR.gif" alt="Pick by AR" className="process-image-no-text-glass" />
                <div className="d-flex justify-content-center">
                  <p className="intro-description-text">Pick by AR</p>
                </div>
              </div>
            </div>
          </div>

          <div id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-content">
            <div className="col-4 text-box-white">
              <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align d-flex justify-content-center"><h5>WHAT DID WE FIND?</h5></div>
                <div className="sub-header admob-left-align d-flex justify-content-left"><h4>AR provided better navigation cues and feedback, and caused less confusion.</h4></div>
              </div>
            </div>
            <div className="col-8 text-box-inside">
              <div className="process">
                <img src="/glass/g11.png" alt="project-image" className="process-image-no-text-glass" />
              </div>
            </div>
          </div>

          <div id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-center">
            <div className="col-4 text-box-white">
              <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align d-flex justify-content-center"><h5>HOW DID WE TEST?</h5></div>
                <div className="sub-header admob-left-align d-flex justify-content-left"><h4>Comparative studies were conducted in a simulated warehouse environment.</h4></div>
                <p className="intro-description-text">Learn more about the simulation and testing process</p>
              </div>
            </div>
            <div className="col-8 text-box-inside">
              <div className="process">
                <img src="/glass/g12.png" alt="project-image" className="process-image-no-text-glass" />
              </div>
            </div>
          </div>
        </div>

        {/* Conclusions */}
        <div id="summary-block" className="row d-flex align-items-center flex-column">
          <div className="projects-container-header col-9 d-flex justify-content-start">
            <h2>Conclusions and Learnings <strong style={{color:'#E8AA2C',fontSize:'48px'}}>.</strong>
              <p style={{fontSize:'20px',marginBottom:'-30px'}}>Accuracy and Efficiency</p><br />
            </h2>
          </div>
          <div className="horizontal-bar space col-10"><hr /></div>
          <div id="section-x-block" className="row col-7 container d-flex align-items-start justify-content-content">
            <div className="sub-header d-flex justify-content-center">
              <h4 style={{paddingBottom:'6rem'}}>By calculating the shortest path as a travelling salesman problem on the server, rearranging the items in a pick list contextually and validating if the item picked is right, we allow the picker to improve efficiency and accuracy. Hence, it is plausible for warehouses to adopt such system to save operating costs.</h4>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
