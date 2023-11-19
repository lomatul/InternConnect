import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Evaluation = () => {
    return (     
    <div >
       <p>This portion contains questions to evaluate an intern.</p>
        <div className="assesment-form">
        <form>

          
            <div className="form-group">
              <label htmlFor="">Intern's Joining Date  (e.g., January 7, 2023)<span>*</span></label>
              <input type="text" value={""} />
            </div>
                
       

          
            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Interest towards learning<span>*</span></label>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel style={{
    color:"red",
    borderWidth: "1px",borderStyle:'solid', borderColor:"red",
    borderRadius: "1px",
    padding: "10px",
    flex: "1 1 0%",
    marginBottom: "0px",
    marginRight: "8px"}}  value="Very enthusiastic" control={<Radio />} label=" Very enthusiastic" />
                    <FormControlLabel style={{ marginLeft:"100px"}}  value="Interested" control={<Radio />} label=" Interested" /> 
                    <FormControlLabel style={{ marginRight:"100px"}} value="Shows occasional disinterest" control={<Radio />} label=" Shows occasional disinterest" />
                    <FormControlLabel style={{ marginLeft:"10px"}} value="Not interested at all" control={<Radio />} label=" Not interested at all" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="I could not assess this" control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>


            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Interest towards learning<span>*</span></label>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                    <FormControlLabel value="iub" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />

                </RadioGroup>
                
            </FormControl>
            </div>



            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Interest towards learning<span>*</span></label>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                    <FormControlLabel value="iub" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />

                </RadioGroup>
                
            </FormControl>
            </div>


            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Interest towards learning<span>*</span></label>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                    <FormControlLabel value="iub" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />

                </RadioGroup>
                
            </FormControl>
            </div>



            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Interest towards learning<span>*</span></label>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                    <FormControlLabel value="iub" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />

                </RadioGroup>
                
            </FormControl>
            </div>



            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Interest towards learning<span>*</span></label>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                    <FormControlLabel value="iub" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />

                </RadioGroup>
                
            </FormControl>
            </div>


            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Interest towards learning<span>*</span></label>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                    <FormControlLabel value="iub" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />

                </RadioGroup>
                
            </FormControl>
            </div>


            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Interest towards learning<span>*</span></label>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                    <FormControlLabel value="iub" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />

                </RadioGroup>
                
            </FormControl>
            </div>

            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Interest towards learning<span>*</span></label>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                    <FormControlLabel value="iub" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />

                </RadioGroup>
                
            </FormControl>
            </div>
        </form>
        
      </div>

  
</div>
  )
}
export default Evaluation