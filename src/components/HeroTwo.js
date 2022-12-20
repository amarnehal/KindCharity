
import React,{useState} from 'react'
import HeroApi from '../Api/HeroApi'

const HeroTwo = () => {
    const [workData,setWorkData] = useState(HeroApi);
  return (
    <>
    <section className="Hero-Two">
        <div className="container HeroTwo-Container">
            <div className="row">
                <h2 className='text-center'>Welcome to kind Heart Charity</h2>
                    {
                        workData.map((userInfo)=>{
                            return(<>
                            <div className="col-12 col-lg-3 text-center Hero-Container-Cards" key={userInfo.id}>
                                <img src={userInfo.logo} className="img-fluid"/>
                                <h4 className='text-center'>{userInfo.title}</h4>
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

export default HeroTwo
