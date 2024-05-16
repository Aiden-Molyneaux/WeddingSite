import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import TextField from '../components/TextField.jsx';

export default function RSVP() {
  const attendees = [
    { id: '00', name: '--', plusOne: true },
    { id: '01', name: 'Bryan Molyneaux', plusOne: false },
    { id: '02', name: 'Carl Molyneaux', plusOne: false },
    { id: '03', name: 'Dakotah Molyneaux', plusOne: false },
    { id: '04', name: 'Rebecca Molyneaux', plusOne: false },
  ]

  const [formData, setFormData] = useState({
    name: '--',
    acceptPlusOne: false,
    namePlusOne: '',
    willAttend: 'yes',
    mealChoice: 'Steak',
    mealChoicePlusOne: 'Steak',
    dietaryRestrictions: '',
    streetAddress: '',
    streetAddress2: '',
    country: 'Canada',
    province: 'Ontario',
    city: '',
    postalCode: '',
    additionalNotes: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    
    fetch('https://formsubmit.co/9dd068642eb64094e99fc86586fb1715', {
      method: 'POST',
      body: new FormData(event.target),
    })
    .then(() => {
      window.localStorage.setItem('formSubmitted', JSON.stringify(true));
      setIsLoading(false);
      setFormSubmitted(true);
    })
    .catch(() => {
      setIsLoading(false);
    });
  }

  console.log(formData)

  return (
    <div className='pageContent'>
      <form onSubmit={handleSubmit} className='rvspForm'>
        <h3 className='sectionHeader'>RSVP</h3>

        { formSubmitted 
        ? <h6 className='bottomMargin topMargin'>Your messsage has been sent to Aiden!</h6>
        : <>
          <label className='labelText'>Who are you?</label>
          <select name="name" className='rsvpSelect' value={formData.name} onChange={handleChange}>
            {attendees.map((attendee, index) => (
              <option key={index} value={attendee.name}>
                {attendee.name}
              </option>
            ))}
          </select>

          { attendees.find(attendee => attendee.name === formData.name).plusOne &&
            <>
              <div className='rsvpSection'>
                <label className='labelText'>You have been given a plus one! Accept?</label>
                <input 
                  type="checkbox" 
                  name="acceptPlusOne" 
                  checked={formData.acceptPlusOne}
                  onChange={handleChange} 
                />
              </div>

              <div>
                { formData.acceptPlusOne &&
                  <TextField id='02' label= 'Name of your plus one' name='namePlusOne' type='input' value={formData.namePlusOne} handleChange={handleChange}/>
                }
              </div>
            </>
          }

          <div className='rsvpField'>
            <label className='labelText'>Will you be attending?</label>
            <select className='rsvpSelect' name="willAttend" value={formData.willAttend} onChange={handleChange}>
              <option value='yes'>Happy to be there!</option>
              <option value='no'>So sad to miss it!</option>
            </select>
          </div>
          
          { formData.willAttend === 'yes' && <>
            <div className='rsvpSection'>
              <div className='rsvpField'>
                <label className='labelText'>Your meal choice</label>
                <select className='rsvpSelect' name="mealChoice" value={formData.mealChoice} onChange={handleChange}>
                  <option value='Steak'>Steak</option>
                  <option value='Chicken'>Chicken</option>
                  <option value='Pasta'>Pasta (vegan)</option>
                  <option value='Stuffed Peppers'>Stuffed Peppers (vegan)</option>
                </select>
              </div>

              <div className='rsvpField'>
                <label className='labelText'>Guest meal choice</label>
                <select className='rsvpSelect' name="mealChoice" value={formData.mealChoicePlusOne} onChange={handleChange}>
                  <option value='Steak'>Steak</option>
                  <option value='Chicken'>Chicken</option>
                  <option value='Pasta'>Pasta (vegan)</option>
                  <option value='Stuffed Peppers'>Stuffed Peppers (vegan)</option>
                </select>
              </div>
            </div>


            <TextField id='01' label='Dietary Restrictions' name='dietaryRestrictions' type='textarea' value={formData.dietaryRestrictions} handleChange={handleChange}/>

            <div className='rsvpSection'>
              <TextField id='02' label='Street Address' name='streetAddress' type='input' value={formData.streetAddress} handleChange={handleChange}/>
              <TextField id='03' label='Street Address Line 2' name='streetAddress2' type='input' value={formData.streetAddress2} handleChange={handleChange}/>
            </div>

            <div className='rsvpSection'>
              <TextField id='04' label='Country' name='country' type='input' value={formData.country} handleChange={handleChange}/>
              <TextField id='04' label='Province' name='province' type='input' value={formData.province} handleChange={handleChange}/>
            </div>

            <div className='rsvpSection'>
              <TextField id='04' label='City' name='city' type='input' value={formData.city} handleChange={handleChange}/>
              <TextField id='05' label='Postal Code' name='postalCode' type='input' value={formData.postalCode} handleChange={handleChange}/>
            </div>
            <TextField id='06' label='Do you have any other notes for the Bride and Groom?' name='additionalNotes' type='textarea' value={formData.additionalNotes} handleChange={handleChange}/>
          </>
          }

          <button type='submit' disabled={isLoading} className="rsvpSubmit">{isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Send your RSVP'}</button>
        </> }
        
        <h4>Have any further questions? Email Kyra:</h4>
        <a href='mailto:kyramolyneaux@gmail.com' className='experienceName bottomMargin' id='emailLink' >kyramolyneaux@gmail.com <FontAwesomeIcon icon={faPaperPlane}/></a>
        
        <input type="hidden" name="_captcha" value="false"/>
      </form>
    </div>    
  );
}