import React,{useState} from 'react'
import OurCausesApi from '../Api/OurCausesApi'

const OurCauses = () => {
    const [apiInfo,setApiInfo] = useState(OurCausesApi);
  return (
    <>
    <section className='mt-2'>
        <div className="container-fluid OurCauses">
            <div className="row">
                <h2 className='text-center mb-2'>Our Causes</h2>
                {
                    apiInfo.map((getInfo)=>{
                        return(<>
                        <div className="col-12 col-lg-4 OurCauses-Cards" key={getInfo.id}>
                            <img src={getInfo.image} alt="Education" className="img-fluid mb-2 card-img" />
                            <h1 className='text-center'>{getInfo.title}</h1>
                            <p>{getInfo.Description}</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-6">
                                    <h3>Raised-{getInfo.Raised}</h3>
                                </div>
                                <div className='col-lg-6 col-md-6 col-6'>
                                    <h3>Goals-{getInfo.Goal}</h3>
                                </div>
                            </div>
                            <button className="cards-btn">{getInfo.text}</button>
                        </div>
                        </>)
                    })
                }
                
            </div>
        </div>
    </section>
    </>
  )
}

export default OurCauses