import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';

import AAB from './assets/basic.jpg';
import Logo from './assets/tagline.png';
import tag from './assets/Screenshot 2024-08-06 at 1.33.10 PM.png';
import Icon1 from './assets/icon1.jpg'; 
import Icon2 from './assets/icon2.jpg'; 
import Icon3 from './assets/icon3.jpg'; 

const App: React.FC = () => {

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div className="main">
        <img className="object-fill h-1/3" src={Logo} alt="uhh" />
        <div className="py-12"></div>

        {/* In the News section */}
        <div id="news" className="news-section">
          <div className="news-heading">
            <h1 className="text-lg">In the News</h1>
          </div>
          <div className="news-content">
            <img src={AAB} alt="News" className="aboutme" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div className="py-12"></div>

        <img className="object-fill h-1/3" src={tag} alt="uhh" />

        <div className="py-12"></div>

        {/* About Us section */}
        <div id="about" className="aboutme">
          <div className="aboutme-heading">
            <h1 className="text-lg">About us</h1>
          </div>
          <div className="aboutme-content">
            <div className="aboutme-column">
              <img className="aboutme-icon" src={Icon1} alt="Idea 1" />
              <p>
                DATA, through the pursuit of its research thrusts, wants to greatly enhance the national research infrastructure by increasing the capacity of the engineering/scientific workforce. In particular, DATA will produce new methodologies and infrastructure for industry-wide collaborative drug discovery, yielding new medicines at reduced cost.
              </p>
            </div>
            <div className="aboutme-column">
              <img className="aboutme-icon" src={Icon2} alt="Idea 2" />
              <p>
                The Center will focus on three main areas of unmet/underserved research needs within the (bio)pharmaceutical sector, with the goal of significantly accelerating the pace of drug discovery while reducing research costs: 1) the development, testing, and validation of machine learning methods for drug discovery and repurposing; 2) providing an industry-wide and vendor-agnostic Secure Data Hub for pharmaceutical and patient data with third-party private search capabilities; and 3) enable federated machine learning for drug repositioning over encrypted databases.
              </p>
            </div>
            <div className="aboutme-column">
              <img className="aboutme-icon" src={Icon3} alt="Idea 3" />
              <p>
                DATA will build a world-class data science community with brings together data scientists, mathematicians, biomedical researchers, and healthcare providers. By forming collaborations with industry, government, and community partners, the project will enable the dissemination and translation of research into impactful products and services for the betterment of society.
              </p>
            </div>
          </div>
        </div>


        {/* About DATA section from About.tsx */}
        <div className='py-8'></div>
        <p className='py-1 bg-blue-900 color text-white text-left text-sm'> </p>

        <div className='py-8'></div>

        <div className='display'>
            <div className='display-heading'>
                <h1 className='text-lg'>Goals</h1>
            </div>
            <div className='display-content'>
            <p>
              The Center for Data-Driven Drug Development and Treatment Assessment (DATA) will focus on six main areas with the goal of significantly accelerating overall drug development and assessment of the outcomes associated with these treatments, while reducing national health care expenditures. These research areas represent the general capabilities that the Center will offer, but can be readily extended to meet the needs of participating industry partners:
            </p>
            <ol>
              <li>
                1. <b>Development, testing, and validation</b> of AI techniques for drug development, repositing and repurposing
              </li>
              <li>
                2. <b>Sharing unique laboratory resources for development </b> and validation  of patient phenotypes and new drug discovery
              </li>
              <li> 
                3. <b>Design, testing, and validation </b> of AI techniques for health
              </li>
              <li>
                4. <b>Development of secure data hubs and lab resources </b> for the design, testing, validation and assessment of drugs and treatments
              </li>
              <li>
                5. <b>Development of privacy-preserving machine</b> learning for drug design, health informatic and pharmacovigilance, and optimization of drug-based treatment over encrypted databases
              </li>
            </ol>
          </div>
        </div>

        <div className='py-8'></div>

        <div className='display'>
            <div className='display-heading'>
                <h1 className='text-lg'>Partnerships & Collaboration</h1>
            </div>
            <div className='display-content'>
            <p>
              MIDAS and its affiliated faculty will actively engage with industry partners to construct and implement a computational platform using novel algorithmic approaches to extract, validate, and integrate information from different drug/target datasets in a secure and vendor-agnostic manner.
            </p>
            <p>
              The NSF IUCRC program has been enabling long-term research partnerships between industry, academia, and government for over 40 years. The IUCRC program facilitates the establishment of a thematic center focused on pre-competitive research projects, in which participating members have the ability to solicit and select proposals for development. The NSF funds a single center at the national level for any one research area and has indicated its support for our Center to be the NSF-funded center fulfilling the national need for improved health monitoring and post-market surveillance.
            </p>

          </div>
        </div>


        {/* Membership Benefits section */}
        <div className='py-8'></div>
        <p className='py-1 bg-blue-900 color text-white text-left text-sm'> </p>

        <div className='py-12'></div>

        <div className='display'>
            <div className='display-heading'>
                <h1 className='text-lg'>Benefits</h1>
            </div>
            <div className='display-content'>
            <p>
              1. Define problems/projects, have a team of U-M/industry members work on the project, and have access to all resulting solutions at precompetitive level
            </p>
            <ol>
              <li>
                a. Note that the IDC rate for the projects defined within IUCRC is 10%, as opposed to 56% for direct projects with U-M.
              </li>
              <li>
                b. The process of agreeing/signing contracts with U-M (or any other university) is often very long and time-consuming, while the projects defined within IUCRC are processed and funded very quickly.
              </li>
            </ol>
            <p>
              2. Access to highly skilled talent (students, postdocs, etc.) for future hiring
            </p>
            <ol>
              <li>
                a. Ability to observe potential future employees throughout the course of one or more projects and assess their capabilities.
              </li>
              <li>
                b. We will have regular workshops through which students/postdocs can have direct discussions regarding their career plans and options.
              </li>
            </ol>
            <p>
              3. Access to additional funding directly from NSF
            </p>
            <ol>
              <li>
                a. NSF provides grants to industry partners through programs such as INTERN and REU.
              </li>
              <li>
                b. Students/interns learn the job before getting hired by a company while getting paid by the NSF.
              </li>
            </ol>
            <p>
              4. Ability to interact with other industry partners in a precompetitive setting and learn from each other’s interests, needs, and capabilities
            </p>
            <ol>
              <li>
                a. At least some parts of the ideas/solutions to data/algorithmic challenges may come from other industry partners.
              </li>
              <li>
                b. Larger companies have the opportunity to learn about the capabilities of smaller companies participating in the Center.
              </li>
              <li>
                c. Smaller companies have the opportunity to show their capabilities to larger entities.
              </li>
            </ol>
          </div>

        </div>

        <div className='py-8'></div>


        <div className='display'>
          <div className='py-8'></div >

          <div className='display-heading'>
            <h1 className='text-lg'>Membership Process</h1>
          </div>
            <p>
              Financial commitment letters will be required for all companies who wish to become members of the Center. Membership entails voting rights on the Industry Advisory Board (IAB), with each member receiving a pro-rated number of votes based on their membership status. We have established the following annual membership fee structure: Full Membership at $40,000 for one vote, $60,000 for one and one-half votes, or $80,000 for two votes; and Associate Membership at $20,000 for one-half vote. Members exercise their voting rights through the Center’s IAB, choosing which pre-competitive research projects to fund. The NSF provides a minimum of $150,000 annually in the first 5 years of the Center’s operations, with additional matching funds depending upon industry participation. The NSF IUCRC program stipulates that 90% of all membership and NSF monies directly fund research projects.
            </p>
        </div>

          <div className='py-8'></div>

      </div>
    </>
  )
}

export default App;