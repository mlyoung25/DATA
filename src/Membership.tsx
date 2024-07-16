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


      </div>
    </>
  )
}

export default Membership
