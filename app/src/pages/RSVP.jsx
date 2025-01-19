import React, { useState, memo } from 'react';
import useIsMobile from '../utils/useIsMobile.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import TextField from '../components/TextField.jsx';
import { attendees } from './attendees.js';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '--',
    acceptPlusOne: false,
    namePlusOne: '',
    willAttend: 'yes',
    mealChoice: 'Steak',
    mealChoicePlusOne: 'Steak',
    dietaryRestrictions: '',
    additionalNotes: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isMobile = useIsMobile();

  function handleChange(event) {
    console.log(event.target.type);
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }

  async function submitForm(event) {
    event.preventDefault();
    setIsLoading(true);
    
    const emailData = {
      name: formData.name,
      acceptPlusOne: formData.acceptPlusOne,
      namePlusOne: formData.namePlusOne,
      willAttend: formData.willAttend,
      mealChoice: formData.mealChoice,
      mealChoicePlusOne: formData.mealChoicePlusOne,
      dietaryRestrictions: formData.dietaryRestrictions,
      additionalNotes: formData.additionalNotes,
    };
    
    const requestBody = {
      body: JSON.stringify(emailData)
    };
    
    try {
      const response = await fetch('https://1hrir9ubdg.execute-api.us-east-1.amazonaws.com/staging/emailRSVP', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      window.localStorage.setItem('formSubmitted', JSON.stringify(true));
      setIsLoading(false);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
    }
  }

  function findAttendee() {
    return attendees.find(attendee => attendee.name === formData.name);
  }

  const NameForm = () => (
    <>
      <div className='rsvpField'>
        <label htmlFor='name'>Who are you?</label>
        <select name="name" className='rsvpSelect' value={formData.name} onChange={handleChange}>
          {attendees.map((attendee, index) => (
            <option key={index} value={attendee.name}>
              {attendee.name}
            </option>
          ))}
        </select>
      </div>

      <div className='rsvpField'>
        <h6>Will you be attending?</h6>
        <select className='rsvpSelect' name="willAttend" value={formData.willAttend} onChange={handleChange}>
          <option value='yes'>Happy to be there! 😊</option>
          <option value='no'>So sad to miss it! 😥</option>
        </select>
      </div>
    </>
  );

  function DietaryRestrictions() {
    return (
      <TextField 
        id='01' 
        label='Dietary Restrictions' 
        name='dietaryRestrictions' 
        type='textarea' 
        value={formData.dietaryRestrictions}
        required={false}
        handleChange={handleChange}
      />
    );
  }

  return (
    <div className='pageContent'>
      <form onSubmit={submitForm} className='rvspForm'>
        <h3 className='sectionHeader'>RSVP</h3>

        { formSubmitted 
          ? <div>
            <h6 className='bottomMargin topMargin'>You have successfully RSVP'd to Kyra and Aiden's wedding!</h6>
            <h6 className='bottomMargin topMargin'>Thank you so much!</h6> 
          </div>
          : <>
            { isMobile 
              ? <NameForm/>
              : <div className='rsvpSection'><NameForm/></div>
            }

            { formData.willAttend === 'yes' && findAttendee().plusOne &&
            <>
              <div className='rsvpSection'>
                <label>{ isMobile ? '★ You have a plus one! Accept?' : '★ You have been given a plus one! Accept?'}</label>
                <input 
                  type="checkbox" 
                  name="acceptPlusOne" 
                  checked={formData.acceptPlusOne}
                  onChange={handleChange} 
                />
              </div>

              <div className={isMobile ? 'rsvpSection' : ''}>
                { formData.acceptPlusOne &&
                  <TextField id='02' label= 'Name of your plus one:' name='namePlusOne' type='input' value={formData.namePlusOne} handleChange={handleChange}/>
                }
              </div>
            </>
            }
          
            { formData.willAttend === 'yes' && <>
              <div className='topMargin rsvpSection column topBorder'>
                <div className='rsvpField'>
                  <label>Your meal choice</label>
                  <select className='rsvpSelect' name="mealChoice" value={formData.mealChoice} onChange={handleChange}>
                    <option value='Steak'>Steak</option>
                    <option value='Chicken'>Chicken</option>
                    <option value='Pasta'>Pasta (vegan)</option>
                    <option value='Stuffed Peppers'>Stuffed Peppers (vegan)</option>
                  </select>
                </div>

                { (formData.acceptPlusOne || findAttendee().twoRSVP) && 
                <div className='rsvpField'>
                  <label>Guest meal choice</label>
                  <select className='rsvpSelect' name="mealChoicePlusOne" value={formData.mealChoicePlusOne} onChange={handleChange}>
                    <option value='Steak'>Steak</option>
                    <option value='Chicken'>Chicken</option>
                    <option value='Pasta'>Pasta (vegan)</option>
                    <option value='Stuffed Peppers'>Stuffed Peppers (vegan)</option>
                  </select>
                </div>
                }

                { isMobile && DietaryRestrictions()}
              </div>

              { !isMobile && DietaryRestrictions() }

            </> }

            <div className='topMargin topBorder rsvpSection'>
              <TextField 
                id='06' 
                label='Do you have any other notes for the Bride and Groom?' 
                name='additionalNotes'
                type='textarea' 
                value={formData.additionalNotes}
                required={false}
                handleChange={handleChange}
              />
            </div>

            <button type='submit' disabled={isLoading || formData.name === '--'} className="rsvpSubmit">
              {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Send your RSVP'}
            </button>
          </> }
        
        <div className='emailDetails'>
          <h4>Have any further questions? Email Kyra:</h4>
          <a href='mailto:kyramolyneaux@gmail.com' className='experienceName bottomMargin' id='emailLink' >kyramolyneaux@gmail.com <FontAwesomeIcon icon={faPaperPlane}/></a>
        </div>
        
        <input type="hidden" name="_captcha" value="false"/>
      </form>
    </div>    
  );
}