import React, { useState } from 'react';
import PropTypes from 'prop-types';
import img2019 from '../assets/2019.jpg';
import img2020 from '../assets/2020.jpg';
import img2021 from '../assets/2021.jpg';
import img2022 from '../assets/2022.jpg';
import img2023 from '../assets/2023.jpg';
import img2024 from '../assets/2024.jpg';

export default function OurStoryEntry({ date }) {
  OurStoryEntry.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  };

  const data = {
    '2019': {
      img: img2019,
      altText: 'A memorable event from 2019', 
      details: <p>In 2019, fate brought us together when we started University and Kyra discovered that she hadn&apos;t yet met Aiden, the Computer Science student from the dorm two doors down. <br/><br/>Before they knew each other&apos;s last names, Kyra and Aiden were dancing the night away. Aiden was new to dancing. If you know Kyra, you know she was not.</p>
    },
    '2020': {
      img: img2020,
      altText: 'A memorable event from 2020', 
      details: <p>When COVID-19 swept us out of the dorm early, living 4 hours apart from Perth to Toronto, our love never drifted. One month later we were reunited and began our search for our first apartment.<br/><br/>We landed in Ottawa and adopted our first kitten, Tubbin. He was a catalyst that brought us even closer.</p>
    },
    '2021': {
      img: img2021,
      altText: 'A memorable event from 2021', 
      details: <p>2021 was a year of growth and new beginnings. During this time, we expanded our little family by welcoming our second kitten, Timber, who quickly became a beloved companion.<br/><br/>To celebrate our two-year anniversary, we went on a charming Tikki tour in Ottawa, enjoying the sights of the city from the water. These moments strengthened our bond and created lasting memories.</p>
    },
    '2022': {
      img: img2022,
      altText: 'A memorable event from 2022', 
      details: <p>In August of 2022, Aiden proposed to Kyra at Lansdowne Park, the location where we had our first date three years earlier. <br/><br/>Our families united and celebrated our love at our Engagement Party. The love demonstrated at this event was truly beautiful.</p>
    },
    '2023': {
      img: img2023,
      altText: 'A memorable event from 2023', 
      details: <p>2023 was a year full of exciting milestones and adventures. Kyra reached a significant milestone by graduating from Carleton University, a moment of pride and joy for both of us.<br/><br/>Our adventures continued as we explored Toronto and enjoyed the CNE. The year concluded with a dream vacation to Mexico, creating unforgettable memories under the sun.</p>
    },
    '2024': {
      img: img2024,
      altText: 'A memorable event from 2024', 
      details: <p>Now age 23, the last five years of extraordinary effort saw Kyra and Aiden finally finished their degrees together and now engaged with a wedding to plan.<br/><br/>This is where you come in! Kyra and Aiden spent many hours developing their wedding plan, beginning to put pieces in place.</p>
    }
  };

  return (
    <div className='ourStoryEntry'>
      <img src={data[date].img} alt={data[date].altText} className='ourStoryImg'/>
      <p className='detail'>{data[date].details}</p>
    </div> 
  );
}