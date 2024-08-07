// about.tsx is the about page of the website
import './App.css'


const About: React.FC = () => {
  return (
    <>
      <div className='main'>
        <div className='py-8'></div>

        <p className='py-24 bg-blue-900 color text-white text-left pl-12 text-5xl'> About DATA</p>

        <div className='py-12'></div>

        <div className='aboutme'>
          <div className='aboutme-heading'>
            <h1 className='text-lg'>Who are we</h1>
          </div>
          <div className='aboutme-content'>
            <p>
              The Michigan Institute for Data and AI in Society (MIDAS) has been awarded a grant by the National Science Foundation’s Industry-University Cooperative Research Centers (NSF IUCRC) program to establish a center for precompetitive research into drug design, repurposing and repositioning, patient phenotyping, treatment monitoring and assessment, and pharmacovigilance using novel machine learning and artificial intelligence techniques. We are seeking additional industry partners whose research efforts align with the Center’s focus and who will be active collaborators in shaping the future paradigm of integrated and cost-effective patient care. The motivation for the Center, its research areas, and your potential role within it are detailed below.
            </p>
          </div>
        </div>

        <div className='py-8'></div>

        <div className='aboutme'>
          <div className='aboutme-heading'>
          <h1 className='text-lg'>Motivation</h1>
          </div>
          <div className='aboutme-content'>
            <p>
              The Center for Data-Driven Drug Development and Treatment Assessment (DATA) intends to establish a center for precompetitive research into drug design, drug treatment assessment, drug repositioning, patient phenotyping and quantitative pharmacovigilance using novel machine learning and artificial intelligence techniques. We will work with our partners from industry and state / professional organizations whose research efforts align with the Center’s focus and who will be active collaborators in shaping the future paradigm of integrated and cost-effective drug design, health monitoring and patient care.
            </p>
            <p>
              Center for Data-Driven Drug Development and Treatment Assessment (DATA) will focus on six main areas with the goal of significantly accelerating overall drug development and assessment of the outcomes associated with these treatments, while reducing national health care expenditures. These research areas represent the general capabilities that the Center will offer, but can be readily extended to meet the needs of participating industry partners:
            </p>
            <ol>
              <li>
                1. Development, testing, and validation of algebraic, machine learning, and artificial intelligence techniques for drug development, treatment monitoring and patient phenotyping with respect to drugs/treatments – State of the art algebraic, machine learning, and artificial intelligence techniques together with advances in treatment monitoring will be brought to bear on discovering new approaches for drug screening, drug repurposing/repositioning, estimation of patient phenotypes related to treatment outcomes/efficacy and exploring drug toxicity/adverse effects; using public, academic, and industry partner-provided patient and drug databases. These include advanced tensor algebraic techniques that were designed to systematically integrate auxiliary information currently ignored or under-utilized by extant methods. Additionally, novel machine learning-based methodologies for mobile/at-home patient monitoring will also be further developed.
              </li>
              <li>
                2. Design and development of advanced artificial intelligence methods for treatment assessment. The Center will focus on the design and implementation of monitoring systems and algorithms that can continuously monitor the health of individuals receiving different types of drugs and treatments.
              </li>
              <li> 
                3. Provide an industry-wide and vendor-agnostic Secure Data Hub with third-party private search capabilities for the development, testing, validation and assessment of drugs and treatments – By applying advanced algebraic and statistical methods, the Center will create large, encrypted, and integrated databases of patient and pharmaceutical data for which the participating companies need only share full encryptions of their proprietary databases. Such databases enable third-party private searches, allowing partners to search securely and anonymously for data related to therapies or patient populations of interest. 
              </li>
              <li>
                4. Enable federated machine learning for drug design, health informatics and pharmacovigilance over encrypted databases – Center investigators have adapted several machine learning algorithms for use over encrypted data. The Center will further integrate these algorithms into a federated learning framework. Such technologies will enable machine learning over databases that cannot be integrated into the Secure Data Hub.
              </li>
              <li>
                5. Enable data driven approaches to developing heath care policies with respect to drugs and treatments – Utilizing the patient phenotypes, health analytics, and comprehensive adverse event/drug interactions data developed and collected by the Center, policy makers, professional organizations, and patient advocacy organizations will be able to better revise standards of care and patient outreach methods to improve patient outcomes in response to drugs and treatments while reducing costs related to unnecessary or ineffective therapies.
              </li>
              <li>
                6. Provide unique lab resources for development and validation of patient phenotypes and new drug discovery – University of Michigan provides unique high throughput in-vitro and in-vivo capabilities, facilitated by multiple labs, centers and cores, which will be made available as resources for developing new drugs informed by discovered patient phenotypes and post-market surveillance data, closing the loop on the pharmaceutical development pipeline.
              </li>
            </ol>
          </div>
        </div>

        <div className='py-8'></div>

        <div className='aboutme'>
          <div className='aboutme-heading'>
            <h1 className='text-lg'>Partnerships & Collaboration</h1>
          </div>
          <div className='aboutme-content'>
            <p>
              The Center will leverage the existing community of data science and domain knowledge experts of MIDAS and the University of Michigan. MIDAS and its affiliated faculty will actively engage with industry partners to construct and implement a computational platform using novel algorithmic approaches to extract, validate, and integrate information from different drug/target datasets in a secure and vendor-agnostic manner.
            </p>
            <p>
              The NSF IUCRC program has been enabling long-term research partnerships between industry, academia, and government for over 40 years. The IUCRC program facilitates the establishment of a thematic center focused on pre-competitive research projects, in which participating members have the ability to solicit and select proposals for development. The NSF funds a single center at the national level for any one research area and has indicated its support for our Center to be the NSF-funded center fulfilling the national need for improved health monitoring and post-market surveillance.
            </p>
            <p>
              Financial commitment letters will be required for all companies who wish to become members of the Center. Membership entails voting rights on the Industry Advisory Board (IAB), with each member receiving a pro-rated number of votes based on their membership status. We have established the following annual membership fee structure: Full Membership at $40,000 for one vote, $60,000 for one and one-half votes, or $80,000 for two votes; and Associate Membership at $20,000 for one-half vote. Members exercise their voting rights through the Center’s IAB, choosing which pre-competitive research projects to fund. The NSF provides a minimum of $150,000 annually in the first 5 years of the Center’s operations, with additional matching funds depending upon industry participation. The NSF IUCRC program stipulates that 90% of all membership and NSF monies directly fund research projects.
            </p>
          </div>
        </div>

        <div className='py-12'></div>

      </div>
    </>
  )
}

export default About
