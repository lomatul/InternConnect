import React, { useEffect, useState }  from 'react'
import {useAuthContext} from "../../context/useAuthcontext";
import axios from "axios";
import Select from 'react-select';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../services/helper';


const Prefernces = () => {
  const { userstudent } = useAuthContext();
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [showdomain, setShowdomain] = useState([]);
  const [firstchoicecompany, setFirstchoicecompany]=useState('')
  const [secondchoicecompany, setSecondchoicecompany]=useState('')
  const [thirdchoicecompany, setThirdchoicecompany]=useState('')
  const [firstchoicedomain, setFirstchoicedomain]=useState('')
  const [secondchoicedomain, setSecondchoicedomain]=useState('')
  const [thirdchoicedomain, setThirdchoicedomain]=useState('')
  const [deadline, setDeadline]=useState('')
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
    axios.get(`${BASE_URL}/InterConnect/company/companies`)
      .then((response) => {
        const allCompanies = response.data;

        if (!allCompanies || allCompanies.length === 0) {
          console.log('No companies found.');
          return;
        }
        const hiringCompanies = allCompanies.filter((company) => company.status === 'Hiring');
        setCompanies(hiringCompanies);
        console.log(companies)

        // const domains = allCompanies.map((company)=> company.requiredDomain.forEach(element => {
        //   return element.domain;
        // }))
        // setShowdomain(domains);

        // console.log(domains)
        var showdomains=[];
        hiringCompanies.map((element) => {
          element.requiredDomain.map(innerElement => showdomains.push(innerElement.domain));
        });

        console.log(showdomains);
        setShowdomain(showdomains)
        // setFilteredCompanies(hiringCompanies); // Initially, both arrays are the same
      })
      .catch((error) => {
        console.error('An error occurred while fetching companies:', error.message);
      });
  }, []);

  useEffect(()=>{
    const date= new Date();
    console.log("Current Date", date);
    try {
        console.log("came here at deadline")
        axios.get('http://localhost:4000/InterConnect/admin/getCvdeadline/').then((response)=>{
          console.log(response)
          
          setDeadline(new Date(response.data.Deadline.time));
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
    }, []
  )
  
  console.log(firstchoicecompany, secondchoicecompany, thirdchoicecompany);
  console.log(firstchoicedomain, secondchoicedomain, thirdchoicedomain)


  const handleSubmit = async(event) => {
    event.preventDefault()

    try {
      await axios.post(`${BASE_URL}/InterConnect/student/setprefer/`+id,{firstchoicecompany, secondchoicecompany, thirdchoicecompany, firstchoicedomain, secondchoicedomain, thirdchoicedomain 
    }).then((response)=>{
        console.log(response)
        toast.success('Your Preferences have been submitted!')

    }).catch((error)=>{
      toast.error("Error occured, please try again")
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

       {new Date()<deadline&&<div className="studentpreference">

               <form onSubmit={handleSubmit}>

             <div className="form-columns">
                      <div className="form-group">
                          <label htmlFor="">Name<span>*</span></label> 
                          <input type="text" placeholder="Give name" />
                      </div>


                    <div className="form-group">
                        <label htmlFor="">Contact Number<span>*</span></label>
                        <input type="number" placeholder="Give Contact Number" min="0"/>
                    </div>

                <div className="form-group">
                      <h2>Give Company Preferences</h2>
                    <label htmlFor="">Choice 1<span>*</span> </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                            <Select className='adselect'  options={companies.map((company)=>({
                                  value:company._id,
                                  label:company.name
                            }))} onChange={(selectedOption) => setFirstchoicecompany(selectedOption.value)} />        
                        </div>
                    <label htmlFor="">Choice 2 </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                            <Select className='adselect'  options={companies.map((company)=>({
                                  value:company._id,
                                  label:company.name
                            }))}onChange={(selectedOption) => setSecondchoicecompany(selectedOption.value)} />
                        </div>                      
                    <label htmlFor="">Choice 3 </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                              <Select className='adselect'  options={companies.map((company)=>({
                                  value:company._id,
                                  label:company.name
                            }))}onChange={(selectedOption) => setThirdchoicecompany(selectedOption.value)}/>              
                        </div>                        
                  </div>


                  <div className="form-group">
                      <h2>Give Domain Preferences</h2>
                    <label htmlFor="">Choice 1<span>*</span> </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                            <Select className='adselect' 
                            //  options={showdomain.filter(el => el!==undefined).map((el)=>({
                            //       value:el,
                            //       label:el
                            // }))}  
                            options={domains}
                            onChange={(selectedOption) => setFirstchoicedomain(selectedOption.value)} />        
                        </div>
                    <label htmlFor="">Choice 2 </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                            <Select className='adselect'   
                            // options={showdomain.filter(el => el!==undefined).map((el)=>({
                            //       value:el,
                            //       label:el
                            // }))}
                            options={domains}
                             onChange={(selectedOption) => setSecondchoicedomain(selectedOption.value)}/>
                        </div>                      
                    <label htmlFor="">Choice 3 </label>
                        <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                              <Select className='adselect' 
                            //     options={showdomain.filter(el => el!==undefined).map((el)=>({
                            //       value:el,
                            //       label:el
                            // }))} 

                            options={domains}
                            
                            onChange={(selectedOption) => setThirdchoicedomain(selectedOption.value)}/>              
                        </div>                        
                  </div>

                  <div className="form-group">
                          <label htmlFor=""> Your Location  </label>
                          <input type="text" placeholder="Give location"/>
                      </div>
            </div>

              <button onClick={handleSubmit}>Send</button>
              
              </form>
              </div>}

          </div>
        
    );
  };
export default Prefernces