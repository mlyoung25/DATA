import './App.css'


const Membership: React.FC = () => {
  return (
    <>
      <div className='main'>
        <div className='py-8'></div>

        <p className='py-24 bg-blue-900 color text-white text-right pr-12 text-5xl'> Become A Member</p>

        <div className='py-12'></div>

        <div className='aboutme'>
          <div className='aboutme-heading'>
            <h1 className='text-lg'>Benefits</h1>
          </div>
          <div className='aboutme-content'>
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

        <div className='aboutme'>
          <div className='aboutme-heading'>
            <h1 className='text-lg'>Solutions & IP</h1>
          </div>
          <div className='aboutme-content'>
            <p>
              NSF emphasizes that centers must target common problems and pains by focusing on precompetitive partnerships. All solutions (data, algorithms, etc.) can be used by all participants but only within the framework of the Center. All companies can use the resulting solutions for the applications defined/funded by the Center but not as a product that they market. The Center focuses mainly on deployment of IP via a public, shared resource mechanism such as open source, open access (Creative Commons), or public domain. However, it is very possible that the work conducted under the Center will result in new IP. The ownership of the technology will be governed by the Center’s bylaws. U-M will work with the companies for technology transfer.
            </p>
          </div>
        </div>

        <div className='py-8'></div>

        <div className='aboutme'>
          <div className='aboutme-heading'>
            <h1 className='text-lg'>UMICH Resources</h1>
          </div>
          <div className='aboutme-content'>
            <p> Through joining DATA. The University of Michigan provides the following resources available for all members: </p>
            <ul className='list-disc'>
              <li>
                Data and lab resources related to health informatics and pharmacovigilance
              </li>
              <li>
                Expertise in data science and algorithms for health informatics. Samples of the algorithms and computational resources provided by the Center include:
                <ul className='list-circle'>
                  <li>
                    Computational drug toxicity screening and drug interaction modeling using fully homomorphic encryption and coupled tensor methods (CMMC/CTMC)
                  </li>
                  <li>
                    Efficient and effective models for mobile/outpatient monitoring and prediction of adverse events using physiological signals
                  </li>
                  <li>
                    Patient phenotyping using transparent artificial intelligence (AI), which enable interpretation of the recommendations/predictions created by computational methods. These include tensor-based machine learning methods for fusion of multimodal patient data for diagnostic and prognostic modeling
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              U-M has already established successful research cores, labs, and resources that will be instrumental to the success of DATA, such as:
            </p>
            <ul className='list-disc'>
              <li>
                <a href='https://pharmacy.umich.edu/cpl'>Clinical Pharmacogenomics Laboratory</a>
              </li>
              <li>
                <a href='https://ihpi.umich.edu/'>Institute for Healthcare Policy and Innovation</a>
              </li>
              <li>
                <a href='https://drugdiscovery.umich.edu/'>Michigan Drug Discovery</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='py-12'></div>

      </div>
    </>
  )
}

export default Membership
