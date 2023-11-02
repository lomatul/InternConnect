import React, { useEffect, useState }  from 'react'
import {useAuthContext} from "../../context/useAuthcontext";
import axios from "axios";
import Select from 'react-select';


const Prefernces = () => {
  const { userstudent } = useAuthContext();
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [firstchoicecompany, setFirstchoicecompany]=useState('')
  const [secondchoicecompany, setSecondchoicecompany]=useState('')
  const [thirdchoicecompany, setThirdchoicecompany]=useState('')
  const [firstchoicedomain, setFirstchoicedomain]=useState('')
  const [secondchoicedomain, setSecondchoicedomain]=useState('')
  const [thirdchoicedomain, setThirdchoicedomain]=useState('')
  // const [filteredCompanies, setFilteredCompanies] = useState([]);


  const domains=[
    {value:"Frontend",label:"Frontend Developer"},
    {value:"Backend", label:"Backend Developer"},
    {value:"UI/UX", label:"UI/UX"},
    {value:"Software Engineer", label:"Software Engineer"},
    {value:"DevOps", label:"DevOps"},
    {value:"Project Manager", label:"Project Manager"},
  ]

 




  useEffect(() => {
    if (userstudent) {
      setId(userstudent.student_id);
      setLoading(false); // Set loading to false when data is available
    } 

  }, [userstudent]);

  useEffect(() => {
    axios.get('http://localhost:4000/InterConnect/company/companies')
      .then((response) => {
        const hiringCompanies = response.data.companies.filter((company) => company.status === 'Hiring');
        setCompanies(hiringCompanies);
        console.log(companies)
        // setFilteredCompanies(hiringCompanies); // Initially, both arrays are the same
      })
      .catch((error) => {
        console.error('An error occurred while fetching companies:', error);
      });
  }, []);
  
  console.log(firstchoicecompany, secondchoicecompany, thirdchoicecompany);
  console.log(firstchoicedomain, secondchoicedomain, thirdchoicedomain)

  const handleSubmit = async(event) => {
    event.preventDefault()

    try {
      await axios.post('http://localhost:4000/InterConnect/student/setprefer/'+id,{firstchoicecompany, secondchoicecompany, thirdchoicecompany, firstchoicedomain, secondchoicedomain, thirdchoicedomain 
    }).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        if (error.response) {
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
    });

    } catch (error) {
      console.error('An error occurred:', error);
    }

    setFirstchoicecompany('');
    setSecondchoicecompany('');
    setThirdchoicecompany('');
    setFirstchoicedomain('');
    setSecondchoicedomain('');
    setThirdchoicedomain('')

    
  }
  
    return (
      <div >
          <div className='admincontainer'>
              <div className='studenttext'>
                <h3>Express Your Desires:</h3>
                <h1> Customize Your Preferences For Your Dream Internship</h1>
              
             </div>
          <div className='adminimage'>
               <img src="comform.gif" alt="" />
           </div>
       </div>

          <div className="studentpreference">

               <form onSubmit={handleSubmit}>

             <div className="form-columns">
                      <div className="form-group">
                          <label htmlFor="">Name<span>*</span></label> 
                          <input type="text" placeholder="Give name" />
                      </div>


                   

                    <div className="form-group">
                        <label htmlFor="">Contact Number<span>*</span></label>
                        <input type="number" min="0"/>
                    </div>

                <div className="form-group">
                      <h2>Give Company Preferences</h2>
                    <label htmlFor="">Choice 1<span>*</span> </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                            <Select className='adselect' value={firstchoicecompany} options={companies} onChange={(e) => setFirstchoicecompany(e.target.value)} />        
                        </div>
                    <label htmlFor="">Choice 2 </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                            <Select className='adselect' value={secondchoicecompany} options={domains} onChange={(e) => setSecondchoicecompany(e.target.value)} />
                        </div>                      
                    <label htmlFor="">Choice 3 </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                              <Select className='adselect' value={thirdchoicecompany} options={domains}onChange={(e) => setThirdchoicecompany(e.target.value)}/>              
                        </div>                        
                  </div>


                  <div className="form-group">
                      <h2>Give Domain Preferences</h2>
                    <label htmlFor="">Choice 1<span>*</span> </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                            <Select className='adselect' value={firstchoicecompany} options={domains}  onChange={(e) => setFirstchoicedomain(e.target.value)} />        
                        </div>
                    <label htmlFor="">Choice 2 </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                            <Select className='adselect' value={secondchoicecompany} options={domains} onChange={(e) => setSecondchoicedomain(e.target.value)}/>
                        </div>                      
                    <label htmlFor="">Choice 3 </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                              <Select className='adselect' value={thirdchoicecompany} options={domains}onChange={(e) => setThirdchoicedomain(e.target.value)}/>              
                        </div>                        
                  </div>

                  <div className="form-group">
                          <label htmlFor=""> Your Location  </label>
                          <input type="text" placeholder="Give location"/>
                      </div>
            </div>

              <button onClick={handleSubmit}>Send</button>
              
              </form>
              </div>
              
          </div>
        
    );
  };
export default Prefernces