import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import './App.css';
import AAB from './assets/basic.jpg';
import Logo from './assets/tagline.png';
import tag from './assets/Screenshot 2024-08-06 at 1.33.10 PM.png';
import yeah from './assets/Add a heading.png';
import companies from './assets/1142-385e858d652aeadec0cbdc370b7387baf3065f369e64f41d4fb5da3049eac712.jpg';
import Icon1 from './assets/icon1.jpg';
import Icon2 from './assets/icon2.jpg';
import Icon3 from './assets/icon3.jpg';

const App: React.FC = () => {
  const [open, setOpen] = useState(Array(4).fill(false));

  const toggleAccordion = (index) => {
    setOpen(open.map((val, i) => (i === index ? !val : val)));
  };

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
    <div>
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

        {/* Membership Benefits section */}
        <div className="py-8"></div>
        <p className="py-1 bg-blue-900 color text-white text-left text-sm"></p>

        <div className="py-12"></div>

        <p id='membership' className="pt-6 bg-white color text-black text-lg"> Proud Partners of</p>
        <img className="object-fill h-1/3" src={companies} alt="uhh" />

        <div className="py-8"></div>

        <div className="display">
          <div className="display-heading">
            <h1 className="text-lg">Benefits</h1>
          </div>
          <div className="display-content">
            {[
              {
                title: "Define Problems/Projects",
                content: (
                  <ol>
                    <li>
                      Note that the IDC rate for the projects defined within IUCRC is 10%, as opposed to 56% for direct projects with U-M.
                    </li>
                    <li>
                      The process of agreeing/signing contracts with U-M (or any other university) is often very long and time-consuming, while the projects defined within IUCRC are processed and funded very quickly.
                    </li>
                  </ol>
                ),
              },
              {
                title: "Access to Highly Skilled Talent",
                content: (
                  <ol>
                    <li>
                      Ability to observe potential future employees throughout the course of one or more projects and assess their capabilities.
                    </li>
                    <li>
                      We will have regular workshops through which students/postdocs can have direct discussions regarding their career plans and options.
                    </li>
                  </ol>
                ),
              },
              {
                title: "Access to Additional Funding",
                content: (
                  <ol>
                    <li>
                      NSF provides grants to industry partners through programs such as INTERN and REU.
                    </li>
                    <li>
                      Students/interns learn the job before getting hired by a company while getting paid by the NSF.
                    </li>
                  </ol>
                ),
              },
              {
                title: "Interact with Other Industry Partners",
                content: (
                  <ol>
                    <li>
                      At least some parts of the ideas/solutions to data/algorithmic challenges may come from other industry partners.
                    </li>
                    <li>
                      Larger companies have the opportunity to learn about the capabilities of smaller companies participating in the Center.
                    </li>
                    <li>
                      Smaller companies have the opportunity to show their capabilities to larger entities.
                    </li>
                  </ol>
                ),
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`accordion-item ${open[index] ? "open" : ""}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2>{benefit.title}</h2>
                  <span>{open[index] ? "-" : "+"}</span>
                </div>
                {open[index] && <div className="accordion-body">{benefit.content}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="py-8"></div>

        <div className="display">
          <div className="py-8"></div>

          <div className="display-heading">
            <h1 className="text-lg">Membership Process</h1>
          </div>
          <div className="display-content">
            <p>
              Financial commitment letters will be required for all companies who
              wish to become members of the Center. Membership entails voting
              rights on the Industry Advisory Board (IAB), with each member
              receiving a pro-rated number of votes based on their membership
              status. We have established the following annual membership fee
              structure: Full Membership at $40,000 for one vote, $60,000 for one
              and one-half votes, or $80,000 for two votes; and Associate
              Membership at $20,000 for one-half vote. Members exercise their
              voting rights through the Center’s IAB, choosing which
              pre-competitive research projects to fund. The NSF provides a
              minimum of $150,000 annually in the first 5 years of the Center’s
              operations, with additional matching funds depending upon industry
              participation. The NSF IUCRC program stipulates that 90% of all
              membership and NSF monies directly fund research projects.
            </p>
          </div>
        </div>

        <div className="py-8"></div>

        <img className="object-fill h-1/3" src={yeah} alt="uhh" />

        <div className="py-8"></div>
      </div>
    </div>
  );
};

export default App;