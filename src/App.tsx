import './App.css'

import AAA from './assets/front.png';
import AAB from './assets/basic.jpg';


const App: React.FC = () => {
  return (
    <>
      <div className='main'>
        <img className="object-fill h-1/3" src={AAA} alt="uhh"/>
        <div className='py-12'></div>

        {/* In the News section */}
        <div className='news-section'>
          <div className='news-heading'>
            <h1>In the News</h1>
          </div>
          <div className='news-content'>
            <img src={AAB} alt="News" className="aboutme" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>


        <div className='py-12'></div>

        <div className='aboutme'>
          <div className='aboutme-heading'>
            <h1>About us</h1>
          </div>
          <div className='aboutme-content'>
            <p>
              Pharmaceutical development has a large impact on the nation’s economy and public health. Despite substantial annual outlays for pharmaceutical development, many drugs fail in clinical trial, while the majority of those making it to market fail to yield a profit. These costs and low returns hinder additional development. The Center for Data-Driven Drug Development and Treatment Assessment (DATA), through the pursuit of its research thrusts, has the potential to greatly enhance the national research infrastructure by increasing the capacity of the engineering/scientific workforce. In particular, DATA will produce new methodologies and infrastructure for industry-wide collaborative drug discovery, yielding new medicines at reduced cost.
            </p>
            <p>
              The Center will focus on three main areas of unmet/underserved research needs within the (bio)pharmaceutical sector, with the goal of significantly accelerating the pace of drug discovery while reducing research costs: 1) the development, testing, and validation of machine learning methods for drug discovery and repurposing; 2) providing an industry-wide and vendor-agnostic Secure Data Hub for pharmaceutical and patient data with third-party private search capabilities; and 3) enable federated machine learning for drug repositioning over encrypted databases. Enabling these research thrusts are new developments in efficient fully homomorphic encryption and applications of coupled tensor-matrix and tensor-tensor completion methods to drug discovery and repurposing.
            </p>
            <p>
              This project brings together data scientists, mathematicians, biomedical researchers, and healthcare providers to produce reproducible methodologies that will make a broad impact on drug discovery and biomedical applications of data science. DATA will build a world-class data science community that is inclusive and promotes diversity at all stages of the academic pipeline. The Center will support programs to educate the next generation of data science workforce members, research leaders, and citizens. By forming collaborations with industry, government, and community partners, the project will enable the dissemination and translation of research into impactful products and services for the betterment of society.
            </p>
          </div>
        </div>

        <div className='py-12'></div>

      </div>
    </>
  )
}

export default App
