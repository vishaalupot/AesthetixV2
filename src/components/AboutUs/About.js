import './About.css';
import every from '../../assets/every.mp4';
import First from '../../assets/FIRST.mp4';
import Second from '../../assets/SECOND.mp4';

const About = () => {
  return (
    <div className='flex justify-center equal-padding'>
      <div className='Abtus'>
      <div className='AbtusText'>
      <div className='heading'>
            About Us
        </div>
        <div className='AboutText'> 
        Aesthetix AV is America’s leading audiovisual solutions integrator.  With over 50 years of experience, we are the complete technology provider for the nation’s top enterprise brands for design, installation, and service of professional sound systems, AV systems, video conferencing systems, networks, and security surveillance systems.
        </div>
        <button type="submit" class="learn-btn">Learn More</button>
      </div>
      <div className='AbtusImage'>
      <video width="90%" height="auto" controls autoPlay muted>
        <source src={every} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
      </div>
      <div className='ConfImage'>
      <div class="overlay">
        <div className='confText'>
          <div className='confHead'>
          Solutions for Modern Collaboration
          </div>
          <div className='confPara'>
          Today’s modern workplace runs on Microsoft Teams, Zoom, Cisco Webex, and Google Meet. Join online meetings from the conference room with one touch! Aesthetix AV is a trusted partner of leading software and hardware solutions for the meeting room.
          </div>
          <button type="submit" class="talk-btn">Talk To An Expert</button>
        </div>
      </div>
      </div>
      
      <div className='VideoDesc'>
        
        <div className='Card1'>
          <div className='mainVideo'>
          <video width="100%" height="400px" controls autoPlay muted>
        <source src={First} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
          </div>
          <div className='mainText'>
            <div className='videoHeading'>
            FAM | First Americans Museum
            </div>
            <div className='videoText'>
            Court Myers, of Waystone LLC, shares how he worked with Aesthetix AV to accomplish AV challenges for the First Americans Museum (FAM) which features Native American stories told from their own perspective.
            </div>
            <button type="submit" class="learn-btn">Learn More</button>
          </div>
          
        </div>
        <div className='Card1'>
          <div className='mainVideo'>
          <video width="100%" height="400px" controls autoPlay muted>
        <source src={Second} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
          </div>
          <div className='mainText'>
            <div className='videoHeading'>
            Indeed
            </div>
            <div className='videoText'>
            With over 13,000 global employees working in over forty-five countries, Indeed uses extensive AV technology to facilitate the workplace community.
            </div>
            <button type="submit" class="learn-btn">Learn More</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
