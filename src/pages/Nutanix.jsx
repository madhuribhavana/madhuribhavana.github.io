import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Nutanix() {
  return (
    <div id="app-body" className="placard">
      <Navbar />

      <div className="summary-block row d-flex align-items-center flex-column space">
        <div id="header-block" className="container-fluid">
          <div className="main-header row d-flex justify-content-center"><h5>NUTANIX, INVISIBLE INFRASTRUCTURE</h5></div>
          <div className="sub-header row d-flex justify-content-center"><h1 className="col-7">Redesigning the virtual machine creation flow</h1></div>
        </div>

        <div id="feature-block" className="row col-12 container-fluid feature-block d-flex justify-content-around">
          <img src="/nutanix/n0.png" alt="project-image" width="100%" />
        </div>

        <div id="background-role-block" className="row col-7 container-fluid d-flex justify-content-start">
          <div id="problem-block-header" className="main-header d-flex justify-content-left">
            <h5>👉&nbsp;&nbsp;THE PROBLEM</h5>
          </div>
          <div className="sub-header d-flex justify-content-center">
            <h2>Nutanix&apos;s current VM Creation flow does not support all user roles, all customizations and is not compatible with on-cloud infrastructure.</h2>
          </div>
          <div id="background-block" className="col-7">
            <div className="intro-headers"><h6><b>📜&nbsp;&nbsp;CONTEXT</b></h6></div>
            <div className="paragraph-description">
              <span className="intro-description-text">
                <a href="https://www.nutanix.com/en">Nutanix</a> is a cloud computing software company that provides hyconverged infrastructure and virtualisation software such as <a href="https://www.nutanix.com/products/prism">Prism</a>, Calm, Xi etc. Prism is Nutanix&apos;s flagship product, enabling end-to-end VM and storage management and global network visualization. The goal of the project is to design a VM creation flow on Prism that addresses its issues. As a side project, I also conceptualized a VM chatbot that can deploy VMs for end-users.
              </span>
            </div>
          </div>
          <div id="role-duration-block" className="col-5">
            <div className="role-block">
              <div className="intro-headers"><h6><b>👩&nbsp;&nbsp;ROLE</b></h6></div>
              <div className="paragraph-description">
                <span className="intro-description-text">
                  Worked with the Product Experience team to conduct user research, competitor audits, build user stories and to design and test the new VM creation flows. <b>Details are omitted due an NDA.</b><br /><br />
                  Manager: <a href="https://www.linkedin.com/in/saguiar/">Mr. Savio Aguiar</a>, Director of Product Experience, Nutanix INC
                </span>
              </div>
              <br />
              <div className="intro-headers"><h6><b>⏱&nbsp;&nbsp;DURATION</b></h6></div>
              <div className="paragraph-description">
                <span className="intro-description-text">May - July 2018</span>
              </div>
            </div>
          </div>
        </div>

        <div id="decorator-block" className="container-fluid">
          <img src="/nutanix/n2.png" alt="project-image" width="80%" className="full-image-center" />
        </div>
      </div>

      {/* Need for redesign */}
      <div className="row summary-block d-flex align-items-center flex-column space">
        <div className="projects-container-header col-9 d-flex justify-content-start">
          <h2>Need for re-design <strong style={{color:'#2838BF',fontSize:'48px'}}>.</strong>
            <p style={{fontSize:'20px',marginBottom:'-30px'}}>3 top reasons for rethinking VM creation</p><br />
          </h2>
        </div>
        <div className="horizontal-bar space col-10"><hr /></div>
        <div id="section-x-block" className="row col-12 container-fluid d-flex justify-content-center">
          <div className="col-9">
            <img src="/nutanix/n4.png" alt="project-image" className="process-image-no-text" />
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="summary-block row d-flex align-items-center flex-column space">
        <div className="projects-container-header col-9 d-flex justify-content-start">
          <h2>Goals <strong style={{color:'#2838BF',fontSize:'48px'}}>.</strong>
            <p style={{fontSize:'20px',marginBottom:'-30px'}}>User Goals, Business Goals and Product Goals</p><br />
          </h2>
        </div>
        <div className="horizontal-bar space col-10"><hr /></div>
        <div id="section-x-block" className="row col-9 container d-flex align-items-start justify-content-around">
          {[
            {title:'USER GOALS', points:['To allow users to choose the right VM','To enable all user types to create VMs efficiently']},
            {title:'BUSINESS GOALS', points:['To increase retention by reducing the number of pain points that users face','To decrease the costs associated with support and maintenance.']},
            {title:'PRODUCT GOALS', points:['To enable the product to cater to all user types','To create a product that handles all VM creation use-cases on both cloud and on-premises infrastructure.']},
          ].map(g => (
            <div key={g.title} className="col-3 text-box">
              <div className="text-box-inner d-flex align-items-center flex-column justify-content-around">
                <div className="intro-headers-ntxgoals"><h5>{g.title}</h5></div>
                <p className="intro-description-text">{g.points.map((p,i) => <span key={i}>• {p}<br /><br /></span>)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research */}
      <div className="summary-block row d-flex align-items-center flex-column space">
        <div className="projects-container-header col-9 d-flex justify-content-start">
          <h2>Research <strong style={{color:'#2838BF',fontSize:'48px'}}>.</strong>
            <p style={{fontSize:'20px',marginBottom:'-30px'}}>Studying users and product gaps</p><br />
          </h2>
        </div>
        <div className="horizontal-bar space col-10"><hr /></div>
        <div className="ntxcontent-sub-header col-7 d-flex justify-content-center">
          <h4>We followed a <span style={{color:'#2F51AD'}}>mixed methods</span> approach to understand product gaps, users needs and behaviours.</h4>
        </div>
        <div id="feature-block" className="row col-9 container-fluid d-flex justify-content-around">
          <img src="/nutanix/n5.png" alt="project-image" width="100%" />
        </div>
        <div className="ntxcontent-sub-header col-7 d-flex justify-content-center">
          <h5>Check out the full <a href="https://docs.google.com/presentation/d/1JBomTFx5MCijXkze662No_lE7eBIPS2VKBvOWnzc7os/edit#slide=id.g3b23b9d36c_1_38">competitor analysis</a> report here.</h5>
        </div>
      </div>

      {/* Top Findings */}
      <div className="row summary-block d-flex align-items-center flex-column space">
        <div className="projects-container-header col-9 d-flex justify-content-start">
          <h2>Top Findings <strong style={{color:'#2838BF',fontSize:'48px'}}>.</strong>
            <p style={{fontSize:'20px',marginBottom:'-30px'}}>What do we know about our users and product?</p><br />
          </h2>
        </div>
        <div className="horizontal-bar space col-10"><hr /></div>
        <div className="ntxcontent-sub-header col-7 d-flex justify-content-center">
          <h4><span style={{color:'#2F51AD'}}>Four user types</span> were identified from user research based on VM creation goals and user tasks.</h4>
        </div>
        <div id="feature-block" className="row col-9 container-fluid d-flex justify-content-around">
          <img src="/nutanix/n3.png" alt="project-image" width="100%" />
        </div>

        {/* Insights row 1 */}
        <div className="row col-10 container d-flex align-items-start justify-content-center">
          {[
            {num:'#1', title:'Varied Goals', text:'Different users have different goals and hence use different number of customizations and have varied access types.'},
            {num:'#2', title:'Inclusivity', text:'The flow is not optimized for those with low technical knowledge'},
            {num:'#3', title:'Lack of contextual help', text:'Lack of contextual help and support affects domain and product learning.'},
          ].map(i => (
            <div key={i.num} className="col-3 text-box-white">
              <div className="text-box-inner-ntx d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align row d-flex justify-content-center"><h5>INSIGHT {i.num}</h5></div>
                <div className="sub-header admob-left-align row d-flex justify-content-left"><h4><span style={{color:'#2F51AD'}}>{i.title}</span></h4></div>
                <p className="intro-description-text">{i.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Insights row 2 */}
        <div className="row col-10 container d-flex align-items-start justify-content-center">
          {[
            {num:'#4', title:'Lack of hierarchy', text:'The flow lacks hierarchy that differentiates primary and secondary features.'},
            {num:'#5', title:'Lack of efficiency', text:'• The form is heavily based on text fields and lacks accelerators.\n• Lack of batch actions: The flow allows users to create only one VM at a time.'},
            {num:'#6', title:'Lack of scalable design', text:'• The current design does not support the addition of new features and customizations while retaining usability\n• The flow lacks a design that allows integration of cost-metrics.'},
          ].map(i => (
            <div key={i.num} className="col-3 text-box-white">
              <div className="text-box-inner-ntx d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align row d-flex justify-content-center"><h5>INSIGHT {i.num}</h5></div>
                <div className="sub-header admob-left-align row d-flex justify-content-left"><h4><span style={{color:'#2F51AD'}}>{i.title}</span></h4></div>
                <p className="intro-description-text">{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="decorator-block-blue" className="container-fluid">
        <img src="/nutanix/n6.png" alt="project-image" width="80%" className="full-image-center" />
      </div>

      {/* Concept and Design */}
      <div className="summary-block row d-flex align-items-center flex-column space">
        <div className="projects-container-header col-9 d-flex justify-content-start">
          <h2>Concept and Design <strong style={{color:'#2838BF',fontSize:'48px'}}>.</strong>
            <p style={{fontSize:'20px',marginBottom:'-30px'}}>Ideation, user flows and design guidelines</p><br />
          </h2>
        </div>
        <div className="horizontal-bar space col-10"><hr /></div>

        <div className="row col-10 container d-flex align-items-start justify-content-between space">
          <div className="col-3 text-box">
            <div className="text-box-inner d-flex align-items-center flex-column justify-content-between">
              <div className="intro-headers"><h5>Concept Generation</h5></div>
              <p>Several concepts were brainstormed and <b>three top concepts</b> were chosen after studying stakeholder feedback. These include the -<br />1) <b>Flat view</b> - where all types of templates are presented together<br />2) <b>Hierarchical View</b> - where templates are divided into verticals, and<br />3) <b>The Wizard</b> - where templates are suggested based on user needs.</p>
            </div>
          </div>
          <div className="col-9 text-box-inside">
            <div className="process">
              <img src="/nutanix/n10.png" alt="project-image" className="process-image-no-text" />
            </div>
          </div>
        </div>

        <div className="row col-10 container d-flex align-items-start justify-content-between">
          <div className="col-3 text-box">
            <div className="text-box-inner d-flex align-items-center flex-column justify-content-between">
              <div className="intro-headers"><h5>Proposed User flows</h5></div>
              <p>Based on concept feedback from stakeholders, we combined the flat view and wizard view into one concept and generated user flows.</p>
            </div>
          </div>
          <div className="col-9 text-box-inside">
            <div className="process">
              <img src="/nutanix/n9.png" alt="project-image" className="process-image-no-text" />
            </div>
          </div>
        </div>
      </div>

      <div id="decorator-block" className="container-fluid">
        <img src="/nutanix/n8.png" alt="project-image" width="80%" className="full-image-center" />
      </div>

      {/* The Solution */}
      <div id="design-block" className="d-flex align-items-center flex-column">
        <div className="projects-container-header col-9 d-flex justify-content-start">
          <h2>The Solution <strong style={{color:'#4080ff',fontSize:'48px'}}>.</strong>
            <p style={{fontSize:'20px',marginBottom:'-30px'}}>Features and Glimpses from Final UI</p><br />
          </h2>
        </div>
        <div className="horizontal-bar space col-10"><hr /></div>
        <div className="ntxcontent-sub-header col-7 d-flex justify-content-center">
          <h4>Users can create and deploy several VMs on both cloud and on-prem infrastructure.<br /><br />VMs can be created in three steps either by choosing templates or by building their VM from scratch.</h4>
        </div>
        <div id="feature-block" className="row col-9 container-fluid d-flex justify-content-around">
          <img src="/nutanix/n13.png" alt="project-image" width="100%" />
        </div>
        <div id="feature-block" className="row col-9 container-fluid d-flex justify-content-around">
          <img src="/nutanix/n14.png" alt="project-image" width="100%" />
        </div>

        {[
          {id:'progress-cost', label:'PROGRESS AND COST', subtitle:'The progress indicator shows cumulative costs in each step.', img:'/nutanix/n15.png'},
          {id:'tshirt-sizes', label:'T-SHIRT SIZES', subtitle:'VMs are categorized and color coded into three tee-shirt sizes.', img:'/nutanix/n16.png'},
          {id:'contextual-help', label:'CONTEXTUAL HELP', subtitle:'Link to related articles', img:'/nutanix/n17.png'},
          {id:'pick-reporting', label:'TOOLTIPS', subtitle:'Tooltips help beginner users understand the right VM fit for their tasks.', img:'/nutanix/n18.png'},
        ].map(s => (
          <div key={s.id} id={s.id} className="row col-9 solution-block container d-flex align-items-center justify-content-between">
            <div className="col-4 text-box-white">
              <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align row d-flex justify-content-center"><h5>{s.label}</h5></div>
                <div className="sub-header admob-left-align row d-flex justify-content-left"><h4>{s.subtitle}</h4></div>
              </div>
            </div>
            <div className="col-8 text-box-inside">
              <div className="solution-block">
                <img src={s.img} alt="project-image" className="process-image-no-text-ntx" />
              </div>
            </div>
          </div>
        ))}

        <div className="row col-9 mobile-image container-fluid d-flex justify-content-around">
          <img src="/nutanix/n19.png" alt="project-image" width="100%" />
        </div>

        {[
          {id:'environment-1', label:'ENVIRONMENT TEMPLATES', subtitle:'Suitable environments are presented as templates.', img:'/nutanix/n20.png'},
        ].map(s => (
          <div key={s.id} id={s.id} className="row col-9 container solution-block d-flex align-items-center justify-content-center">
            <div className="col-4 text-box-white">
              <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align row d-flex justify-content-center"><h5>{s.label}</h5></div>
                <div className="sub-header admob-left-align row d-flex justify-content-left"><h4>{s.subtitle}</h4></div>
              </div>
            </div>
            <div className="col-8 text-box-inside">
              <img src={s.img} alt="project-image" className="process-image-no-text-ntx" />
            </div>
          </div>
        ))}

        <div className="row col-9 solution-block container-fluid d-flex justify-content-around">
          <img src="/nutanix/n22.png" alt="project-image" width="100%" />
        </div>

        {[
          {id:'personalization-1', label:'PRE-FILLED DETAILS', subtitle:"Certain pre-filled fields in personalization save user's time.", img:'/nutanix/n23.png'},
          {id:'personalization-2', label:'NAME, NUMBER AND DESCRIPTION', subtitle:'Batch actions such as batch creation of VMs and naming several VMs at once increases efficiency.', img:'/nutanix/n24.png'},
          {id:'personalization-3', label:'SUMMARY', subtitle:'Users can see a summary of the VMs created and associated costs.', img:'/nutanix/n25.png'},
        ].map(s => (
          <div key={s.id} id={s.id} className="row col-9 container solution-block d-flex align-items-center justify-content-center">
            <div className="col-4 text-box-white">
              <div className="text-box-inner d-flex align-items-start flex-column justify-content-between">
                <div className="main-header admob-left-align row d-flex justify-content-center"><h5>{s.label}</h5></div>
                <div className="sub-header admob-left-align row d-flex justify-content-left"><h4>{s.subtitle}</h4></div>
              </div>
            </div>
            <div className="col-8 text-box-inside">
              <img src={s.img} alt="project-image" className="process-image-no-text-ntx" />
            </div>
          </div>
        ))}
      </div>

      {/* Prototyping */}
      <div className="summary-block row d-flex align-items-center flex-column space">
        <div className="projects-container-header col-9 d-flex justify-content-start">
          <h2>Prototyping <strong style={{color:'#2838BF',fontSize:'48px'}}>.</strong>
            <p style={{fontSize:'20px',marginBottom:'-30px'}}>How did we iterate to design the final solution?</p><br />
          </h2>
        </div>
        <div className="horizontal-bar space col-10"><hr /></div>
        {[
          {title:'Wireframing', desc:'Lo-fi wireframes were made for all user flows.', img:'/nutanix/n11.png'},
          {title:'Prototyping', desc:"Based on Nutanix's style guide, the lo-fi wireframes were converted to mocks.", img:'/nutanix/n12.png'},
        ].map(s => (
          <div key={s.title} className="row col-10 container d-flex align-items-start justify-content-between">
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

      {/* Usability Evaluation */}
      <div className="summary-block row d-flex align-items-center flex-column space">
        <div className="projects-container-header col-9 d-flex justify-content-start">
          <h2>Usability Evaluation <strong style={{color:'#2838BF',fontSize:'48px'}}>.</strong>
            <p style={{fontSize:'20px',marginBottom:'-30px'}}>RITE methodology</p><br />
          </h2>
        </div>
        <div className="horizontal-bar space col-10"><hr /></div>
        <div className="ntxcontent-sub-header col-7 d-flex justify-content-center">
          <h4>The designs were tested and iterated upon using a RITE methodology. We tested the designs in 3 phases:</h4>
        </div>
        <div id="feature-block" className="row col-9 container-fluid d-flex justify-content-around">
          <img src="/nutanix/n29.png" alt="project-image" width="100%" />
        </div>
        <div className="ntxcontent-sub-header col-7 d-flex justify-content-center">
          <h5>Ping me for more details about the process, findings and usability scores.</h5>
        </div>
      </div>

      {/* Results */}
      <div className="summary-block row d-flex align-items-center flex-column space">
        <div className="projects-container-header col-9 d-flex justify-content-start">
          <h2>Results and Learnings <strong style={{color:'#2838BF',fontSize:'48px'}}>.</strong>
            <p style={{fontSize:'20px',marginBottom:'-30px'}}>More about my experience at Nutanix</p><br />
          </h2>
        </div>
        <div className="horizontal-bar space col-10"><hr /></div>
        <div className="row col-12 container d-flex align-items-start justify-content-center">
          <div className="col-12 d-flex justify-content-center text-box-inside">
            <div className="process">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vSz7q4eecm0I_GJ7q1xFdO8XQPKe5QLQVQyqAzQQvHtbaVDsByHN4PRV7gU4crLNY1eJGUNNGRQ3j-n/embed?start=false&loop=true&delayms=2000"
                frameBorder="0"
                width="960"
                height="569"
                allowFullScreen
                title="Nutanix Presentation"
              />
            </div>
          </div>
          <div className="ntxcontent-sub-header col-7 d-flex justify-content-center">
            <h4><br /><br />Glimpses from the internship..</h4>
          </div>
          <div className="col-9 text-box-inside">
            <div className="process">
              <img src="/nutanix/n30.png" alt="project-image" className="process-image-no-text" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
