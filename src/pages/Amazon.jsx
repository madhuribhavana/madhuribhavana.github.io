import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Amazon() {
  return (
    <div id="app-body" className="placard">
      <Navbar />

      <div id="summary-block" className="d-flex align-items-center flex-column">
        <div id="header-block" className="container-fluid">
          <div className="main-header d-flex justify-content-center"><h5>AMAZON, NEXT BILLION USERS</h5></div>
          <div className="sub-header d-flex justify-content-center">
            <h1 className="col-7">Designing a fully assistive e-shopping experience for emerging markets</h1>
          </div>
        </div>

        <div id="introduction-image" className="container-fluid feature-block d-flex justify-content-around">
          <img src="/amazon/a0.png" alt="project-image" width="100%" />
        </div>

        <div id="background-role-block" className="row col-7 container-fluid d-flex justify-content-start">
          <div id="problem-block-header" className="main-header d-flex justify-content-left">
            <h5>👉&nbsp;&nbsp;THE PROBLEM</h5>
          </div>
          <div className="sub-header d-flex justify-content-center">
            <h2>Consumers in emerging markets like India are not able to shop online due to transaction barriers.</h2>
          </div>
          <div id="background-block" className="col-7">
            <div className="intro-headers"><h6><b>📜&nbsp;&nbsp;CONTEXT</b></h6></div>
            <div className="paragraph-description">
              <span className="intro-description-text">
                India is a mobile first nation where people access internet mostly through prepaid data and where there is only 1 hotspot per 3,900 people. Hundreds of millions of users face <b>transaction barriers</b> due to flaky internet, payment methods and other reasons such as trust, language, lack of access and education.
              </span>
            </div>
          </div>
          <div id="role-duration-block" className="col-5">
            <div className="role-block">
              <div className="intro-headers"><h6><b>👩&nbsp;&nbsp;ROLE</b></h6></div>
              <div className="paragraph-description">
                <span className="intro-description-text">Worked with the New Initiatives Team (marketing + tech team) at <b>Amazon India</b> for designing an e-commerce shopping experience for Rural India.</span>
              </div>
              <br />
              <div className="intro-headers"><h6><b>⏱&nbsp;&nbsp;DURATION</b></h6></div>
              <div className="paragraph-description">
                <span className="intro-description-text">May - July 2015</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div id="header-block" className="container-fluid">
          <div className="main-header d-flex justify-content-center"><h5>THE MISSION</h5></div>
          <div className="mission-sub-header centered d-flex justify-content-center">
            <h2 className="col-7">The mission is to enable everybody in India shop online which led to the creation of Amazon Easy.</h2>
          </div>
          <div className="main-header d-flex justify-content-center"><h5>WHAT IS AMAZON EASY?</h5></div>
          <div id="amz-sub-header" className="sub-header centered d-flex justify-content-center">
            <h3 className="col-7">Amazon Easy is a service that will place tablet devices loaded with the Amazon Easy app at the brick and mortar stores/points in tier 3+ towns in India. Amazon Easy relies on a fully assisted shopping model.</h3>
          </div>
          <img src="/amazon/a2.png" alt="project-image" className="full-image-center col-7" style={{marginBottom:'4rem'}} />
        </div>

        <div id="amazon-image" className="container-fluid">
          <img src="/amazon/a1.png" alt="project-image" width="80%" className="full-image-center" />
        </div>

        {/* User Research */}
        <div id="research-block" className="d-flex align-items-center flex-column">
          <div className="projects-container-header col-9 d-flex justify-content-start">
            <h2>User Research <strong style={{color:'#F5A623',fontSize:'48px'}}>.</strong>
              <p style={{fontSize:'20px',marginBottom:'-30px'}}>Understanding user needs, behaviors and the domain</p><br />
            </h2>
          </div>
          <div className="horizontal-bar space col-10"><hr /></div>

          <div className="row col-9 container d-flex align-items-start justify-content-between" id="competitor-analysis">
            <div className="col-3 text-box">
              <div className="text-box-inner d-flex align-items-center flex-column justify-content-between">
                <div className="intro-headers"><h5>Competitor Analysis</h5></div>
                <p className="intro-description-text">We conducted competitor analysis across all the major e-commerce sites in India that were extending efforts to deliver products in rural parts of India.</p>
              </div>
            </div>
            <div className="col-9 text-box-inside">
              <div className="process">
                <img src="/amazon/a3.png" alt="project-image" className="process-image-no-text" />
              </div>
            </div>
          </div>

          <div className="row col-9 container d-flex align-items-center justify-content-between" id="contextual-inquiry">
            <div className="col-3 text-box">
              <div className="text-box-inner d-flex align-items-center flex-column justify-content-between">
                <div className="intro-headers"><h5>On-Field Research</h5></div>
                <p className="intro-description-text">Users were recruited on the field through a set of screening criteria and the places of study were chosen based on the matrix in the illustration.</p>
              </div>
            </div>
            <div className="col-9 text-box-inside">
              <img src="/amazon/a4_0.png" alt="project-image" className="process-image-no-text" />
            </div>
          </div>

          <div className="amzcontent-sub-header col-7 d-flex justify-content-center">
            <h4>The study consisted of both <span style={{color:'#F5A623'}}>foundational</span> and <span style={{color:'#F5A623'}}>evaluative</span> approaches to understand product gaps, users needs and behaviours.</h4>
          </div>
          <div id="feature-block" className="row col-9 container-fluid d-flex justify-content-around">
            <img src="/amazon/a4.png" alt="project-image" width="100%" />
          </div>
        </div>

        {/* Analysis */}
        <div id="analysis-block" className="d-flex align-items-center flex-column">
          <div className="projects-container-header col-9 d-flex justify-content-start">
            <h2>Finding + Analysis <strong style={{color:'#F5A623',fontSize:'48px'}}>.</strong>
              <p style={{fontSize:'20px',marginBottom:'-30px'}}>Top insights about users needs and behaviours</p><br />
            </h2>
          </div>
          <div className="horizontal-bar space col-10"><hr /></div>
          <div className="amzcontent-sub-header col-7 d-flex justify-content-center">
            <h4>Five themes emerged after conducting an <span style={{color:'#F5A623'}}>affinity analysis</span> of the research data.</h4>
          </div>
          <div id="feature-block" className="row col-9 container-fluid d-flex justify-content-around">
            <img src="/amazon/a5_0.png" alt="project-image" width="100%" />
          </div>
          <div className="ntxcontent-sub-header col-7 d-flex justify-content-center">
            <h5>Key insights about consumers in emerging markets.<br />Check out the theme cards below:</h5>
          </div>
          <div id="feature-block" className="row col-9 container-fluid d-flex justify-content-around">
            <img src="/amazon/a5_1.png" alt="project-image" width="100%" />
          </div>

          <div id="experience-mapping" className="row col-9 container d-flex align-items-start justify-content-between">
            <div className="col-3 text-box">
              <div className="text-box-inner d-flex align-items-center flex-column justify-content-between">
                <div className="intro-headers"><h5>Experience Mapping</h5></div>
                <p className="intro-description-text">We identified the major concerns and pain points users in rural India had around online shopping and generated an experience map highlighting these.</p>
              </div>
            </div>
            <div className="col-9 text-box-inside">
              <div className="process">
                <img src="/amazon/a7.webp" alt="project-image" className="process-image-no-text" />
              </div>
            </div>
          </div>

          <div id="personas-block" className="row col-9 container d-flex align-items-start justify-content-between">
            <div className="col-3 text-box">
              <div className="text-box-inner d-flex align-items-center flex-column justify-content-between">
                <div className="intro-headers"><h5>Personas</h5></div>
                <p className="intro-description-text">Distinct personas of the customer (primary) and shop owner (secondary) were created highlighting their capabilities, concerns and wants.</p>
              </div>
            </div>
            <div className="col-9 text-box-inside">
              <div className="process">
                <img src="/amazon/a6.png" alt="project-image" className="process-image-no-text" />
              </div>
            </div>
          </div>
        </div>

        {/* Concepts and Features */}
        <div id="concept-block" className="d-flex align-items-center flex-column">
          <div className="projects-container-header col-9 d-flex justify-content-start">
            <h2>Concepts and Features <strong style={{color:'#F5A623',fontSize:'48px'}}>.</strong>
              <p style={{fontSize:'20px',marginBottom:'-30px'}}>How did we turn research insights into product features?</p><br />
            </h2>
          </div>
          <div className="horizontal-bar space col-10"><hr /></div>
          <div id="decorator-block-light-grey" className="container-fluid col-9">
            <img src="/amazon/a9.png" alt="project-image" className="full-image-center" style={{margin:'0rem 0'}} />
          </div>

          {/* Design and Prototype */}
          <div id="design-block" className="d-flex align-items-center flex-column">
            <div className="projects-container-header col-9 d-flex justify-content-start">
              <h2>Design and Prototype <strong style={{color:'#F5A623',fontSize:'48px'}}>.</strong>
                <p style={{fontSize:'20px',marginBottom:'-30px'}}>The Amazon Easy App</p><br />
              </h2>
            </div>
            <div className="horizontal-bar space col-10"><hr /></div>
            <div className="row col-9 container-fluid d-flex justify-content-around" style={{marginBottom:'6rem'}}>
              <img src="/amazon/a8.png" alt="project-image" width="100%" />
            </div>

            {[
              {id:'entry-point', label:'THE ENTRY POINT', subtitle:'Prominent search bar, locally relevant verticals in home page allow easy search.', text:'• Return and support features in the nav bar create awareness and build trust in users.\n\n• Locally relevant analogies are used such as Bag for Cart.', img:'/amazon/a12.png'},
              {id:'pick-reporting', label:'PRODUCT DISCOVERY', subtitle:'The sub-category page is brand driven and quick filters help in quicker navigation.', text:'• Brand driven filters and brand based sub-category verticals are built to suit the mental categorization of users.', img:'/amazon/a13.png'},
              {id:'issue-reporting', label:'PRODUCT DETAIL PAGE', subtitle:'Details on demand, visual representations and localized reviews help in product evaluation.', text:'• Prioritization of product details and locally relevant details helps in efficiency.\n\n• Local reviews help users to relate more and evaluate products better.', img:'/amazon/a14.png'},
            ].map(s => (
              <div key={s.id} id={s.id} className="row col-9 container d-flex align-items-start amz-margin-bottom justify-content-center">
                <div className="col-4 text-box-white">
                  <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                    <div className="main-header admob-left-align row d-flex justify-content-center"><h5>{s.label}</h5></div>
                    <div className="sub-header admob-left-align row d-flex justify-content-left"><h4>{s.subtitle}</h4></div>
                    <p className="intro-description-text"><b>Problems solved:</b><br />{s.text}</p>
                  </div>
                </div>
                <div className="col-8 text-box-inside">
                  <div className="process">
                    <img src={s.img} alt="project-image" className="process-image-no-text-glass" />
                  </div>
                </div>
              </div>
            ))}

            <div id="mobile-image" className="row col-9 container-fluid d-flex justify-content-around amz-margin-bottom">
              <img src="/amazon/a15.png" alt="project-image" width="100%" />
            </div>

            <div id="issue-logging" className="row col-9 container d-flex align-items-start justify-content-center">
              <div className="col-4 text-box-white">
                <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                  <div className="main-header admob-left-align row d-flex justify-content-center"><h5>CHECKOUT</h5></div>
                  <div className="sub-header admob-left-align row d-flex justify-content-left"><h4>Users can edit products in bag and can checkout using OTP.</h4></div>
                  <p className="intro-description-text">Problems solved:<br />• Mobile OTP based login and checkout eliminates the need for email ids.<br /><br />• SMS based updates and feedback makes the process smoother for a mobile-first market.</p>
                </div>
              </div>
              <div className="col-8 text-box-inside">
                <div className="process">
                  <img src="/amazon/a16.png" alt="project-image" className="process-image-no-text-glass" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Journeys */}
        <div id="prototype-block" className="d-flex align-items-center flex-column">
          <div className="projects-container-header col-9 d-flex justify-content-start">
            <h2>User Journeys and Architecture <strong style={{color:'#F5A623',fontSize:'48px'}}>.</strong>
              <p style={{fontSize:'20px',marginBottom:'-30px'}}>Proposed design structures</p><br />
            </h2>
          </div>
          <div className="horizontal-bar space col-10"><hr /></div>

          {[
            {id:'proposed-journey', title:'Proposed User Journey', desc:'A user journey for the assisted shopping model was proposed where the consumer orders from an in-store tablet with the assistance of the shop owner and waits to pick-up from the same store where the order will be delivered.', img:'/amazon/a10.png'},
            {id:'architecture-block', title:'Architecture', desc:'Based on the several concepts generated, we narrowed down to the final concept and generated information architecture for the tablet app.', img:'/amazon/a11.png'},
          ].map(s => (
            <div key={s.id} id={s.id} className="row col-9 container d-flex align-items-start justify-content-between">
              <div className="col-3 text-box">
                <div className="text-box-inner d-flex align-items-center flex-column justify-content-between">
                  <div className="intro-headers"><h5>{s.title}</h5></div>
                  <p>{s.desc}</p>
                </div>
              </div>
              <div className="col-9 text-box-inside">
                <div className="process">
                  <img src={s.img} alt="project-image" className="process-image-no-text" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reflections */}
        <div className="summary-block row d-flex align-items-center flex-column space">
          <div className="projects-container-header col-9 d-flex justify-content-start">
            <h2>Reflections <strong style={{color:'#F5A623',fontSize:'48px'}}>.</strong>
              <p style={{fontSize:'20px',marginBottom:'-30px'}}>My top learnings at Amazon</p><br />
            </h2>
          </div>
          <div className="horizontal-bar space col-10"><hr /></div>
          <div id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-center">
            {[
              {label:'OWNERSHIP', subtitle:'Own your decisions', text:"As a UXer, I took the responsibility of communicating the value of user research horizontally and convinced the team to do more foundational research, which in turn helped me take data-driven decisions and influence product strategy."},
              {label:'ITERATE', subtitle:'Gather Feedback', text:"The internship taught me the value of connecting with cross-functional teams and gathering feedback. Their feedback helped me iterate on my designs and on a higher level, it helped me grow more as a T-shaped designer."},
              {label:'STORYTELLING', subtitle:'Stories vs Presentations', text:"People remember stories more. My first industry experience helped me hone my storytelling skills both as a researcher and designer."},
            ].map(r => (
              <div key={r.label} className="col-4 text-box-white">
                <div className="text-box-inner-admob d-flex align-items-start flex-column justify-content-between">
                  <div className="main-header admob-left-align row d-flex justify-content-center"><h5>{r.label}</h5></div>
                  <div className="sub-header admob-left-align row d-flex justify-content-left"><h4>{r.subtitle}</h4></div>
                  <p className="intro-description-text">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
