import React,{useState} from 'react'

const JoinUs = () => {
    const [userInfo,setInfo] = useState({
        Name:"",
        email:"",
        Phone:"",
        Subject:"",
        Message:"",
    })
        let name,value;
        const PostUserInfo =(e)=>{
            name = e.target.name;
            value = e.target.value;

            setInfo({...userInfo,[name]:value})
    }

    const SubmitInfo=async(e)=>{
        e.preventDefault();
      const {Name,email,Phone,Subject,Message} = userInfo;  
      if(Name&& email && Phone && Subject && Message){
      const response = fetch("https://kcharity-15ed9-default-rtdb.firebaseio.com/Charity.json",{
      method:"POST",
      headers:{"Content-Type":"application/json",
      },
      body:JSON.stringify({Name,email,Phone,Subject,Message})
    }
      );
      if(response){
        setInfo({
            Name:"",
            email:"",
            Phone:"",
            Subject:"",
            Message:"",
        })
        alert("Enquiry has been sent")
      }
      else{
        alert("Please Fill all the Fields")
      }
    }
    }
  return (
   <>
       <section className='Volunteer'>
            <div className="container-fluid Volunteer-Container">
                {/* <h5 className='text-center mb-4'>Volunteer</h5> */}
               <div className="container Volunteer-Container-leftSide">
                <div className="row">
                    <div className="col-12 col-lg-10">
                        <form method='POST'>
                            <h2 className='mb-2 mt-4 text-center'>Become a Volunteer</h2>
                            <div className="row Volunteer-Form">
                                <div className="col-lg-6 col-12 mb-4">
                                    <input 
                                        type="text" 
                                        placeholder='Name'
                                         name='Name'
                                         value={userInfo.Name}
                                         onChange={PostUserInfo}
                                         className='form-control'
                                         >
                                     </input>
                                </div>
                                <div className="col-lg-6 col-12 mb-4">
                                    <input 
                                        type="email" 
                                        placeholder='Email'
                                         name='email'
                                         className='form-control'
                                         value={userInfo.email}
                                         onChange={PostUserInfo}
                                         >
                                     </input>
                                </div>
                                <div className="col-lg-6 col-12 mb-4">
                                    <input 
                                        type="text" 
                                        placeholder='Subject'
                                         name='Subject'
                                         className='form-control'
                                         value={userInfo.Subject}
                                         onChange={PostUserInfo}
                                         >
                                     </input>
                                </div>
                                <div className="col-lg-6 col-12 mb-4">
                                    <input 
                                        type="phone" 
                                        placeholder='Phone-Number'
                                         name='Phone'
                                         className='form-control'
                                         value={userInfo.Phone}
                                         onChange={PostUserInfo}
                                         >
                                     </input>
                                </div>
                                <div className="col-12 col-lg-12 mb-4">
                                <div class="form-floating">   
                                <textarea class="form-control" placeholder="Comment here" id="floatingTextarea"
                                        name='Message'
                                        value={userInfo.Message}
                                        onChange={PostUserInfo}
                                ></textarea>
                                </div>
                                </div>
                                <button type='submit' className='Secondary-btn w-100'onClick={SubmitInfo}>Submit</button>
                            </div>
                        </form>
                    </div>
                        </div>
                    </div>
                    <div className="container Volunteer-Container-rightSide">
                    <div className="row">
                    <div className="col-12 col-lg-4">
                        <img src='Images/Form/smiling.jpg' alt='Smiling' className='mb-4'/>
                    </div>
                    <h5>About Volunteering</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, dignissimos?</span>
                    <div className='div8'></div>
                    </div>
                    </div>
               </div>

    <div className="container-fluid Volunteer-Banner">
        <div className="row">
            <div className="col-12 col-lg-12">

            </div>
        </div>
    </div>
        </section>
   </>
  )
}

export default JoinUs
 