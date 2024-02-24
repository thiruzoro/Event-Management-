// import React from "react";
// // import "../assets/Css/Services.css";
// import avatar from '../../assets/images/a.jpg'
// const ServiceBox = ({ title, description, image }) => (
//   <div className="service-box">
//     <div className="service-image">
//       <img src={image} alt={title} />
//     </div>
//     <div className="service-content">
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   </div>
// );

// const events = () => {
//   const services = [
//     {
//       title: "Party Planning!",
//       description: "It's all about party!",
//       image:
//         "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1708512254/navimage_yflhrg.jpg",
//     },
//     {
//       title: "Birthday Planning",
//       description: "It's all about party!",
//       image:
//         "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1708581465/birthdayparty_pmmeq8.jpg",
//     },
//     {
//       title: "Seminar Arrangement",
//       description: "It's all about Seminars!",
//       image:
//         "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1708581684/seminars_fhkhbf.jpg",
//     },
//     {
//       title: "Charity Donation",
//       description: "It's all about Donating!",
//       image:
//         "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1708582020/charity_xwqw5r.jpg",
//     },
//     {
//       title: "Award ceremony",
//       description: "It's all about Awards!",
//       image:
//         "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1708584083/awards_clv15d.jpg",
//     },
//     {
//       title: "Workshop Planning",
//       description: "It's all about Attending!",
//       image:
//         "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1708584325/workshops_jviacx.jpg",
//     },
//   ];

//   return (
//     <div style={{ backgroundImage: "url('/src/assets/images/a.jpg')" }}>
//       <p>Our Services</p>
//       <div className="services-heading"></div>
//       <div className="services-container">
//         {services.map((service, index) => (
//           <div style={{width: '200px', height: '200px'}}>

//           <ServiceBox
//             key={index}
//             title={service.title}
//             description={service.description}
//             // image={service.image}

//             />
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default events;

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import '../../assets/css/home.css'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CenteredContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Set height to viewport height for vertical centering
});

const Event = () => {
  const navigate = useNavigate();
  return (
    <CenteredContainer>
      <video className="video-bg" autoPlay loop muted>
        <source src="/src/assets/Videos/home.mp4" type="video/mp4" />
      </video>
      <div style={{ marginBottom: 80 }}>
        <h1>Welcome To Corporate Event Management</h1>
      </div>
      <div >
        <div style={{ display: 'flex' }}>

          <Grid className="grid-container" container rowSpacing={1} columnSpacing={{ xs: 5, sm: 10, md: 6 }}>
            <Grid className='grid1a' item xs={3} style={{ minWidth: '400px' }}>
              <img style={{ height: '100%', width: '100%' }} src="/src/assets/images/b.jpg" alt="Description of the image" />
              <div className='paper' style={{ backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px' }}>
                <h1>Annual Meetings</h1>
                <h3>"Welcome everyone to our Annual General Meeting.</h3>
                <div className='buts' style={{ display: 'flex' }}>

                  <div>
                    <Button varient="contained" onClick={()=> navigate("/user/booking")}>BOOK</Button>

                  </div>
                  <div>
                    <Button varient="contained">Info</Button>

                  </div>
                </div>
              </div>
            </Grid>
            <Grid className='grid2a' item xs={3} style={{ minWidth: '400px' }}>
              <img style={{ height: '100%', width: '100%' }} src="/src/assets/images/tra.jpg" alt="Description of the image" />
              <div className='paper' style={{ backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px' }}>
                <h1>Corporate Training Workshop</h1>
                <h3>Corporate training workshops serve as dynamic platforms.</h3>
                <div className='buts' style={{ display: 'flex' }}>

                  <div>
                    <Button varient="contained" onClick={()=> navigate("/user/booking")}>BOOK</Button>

                  </div>
                  <div>
                    <Button varient="contained">Info</Button>

                  </div>
                </div>
              </div>
            </Grid>
            <Grid className='grid3a' item xs={3} style={{ minWidth: '400px' }}>
              <img style={{ height: '100%', width: '100%' }} src="/src/assets/images/c.jpg" alt="Description of the image" />
              <div className='paper' style={{ backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px' }}>
                <h1>Company Anniversary Celebration</h1>
                <h3>Happy Anniversary to our incredible team.</h3>
                <div className='buts' style={{ display: 'flex' }}>

                  <div>
                    <Button varient="contained" onClick={()=> navigate("/user/booking")}>BOOK</Button>

                  </div>
                  <div>
                    <Button varient="contained">Info</Button>

                  </div>
                </div>            </div>
            </Grid>
            <Grid className='grid3a' item xs={3} style={{ minWidth: '400px' }}>
              <img style={{ height: '100%', width: '100%' }} src="/src/assets/images/brand.jpg" alt="Description of the image" />
              <div className='paper' style={{ backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px' }}>
                <h1>Brand Building</h1>
                <h3>Happy Anniversary to our incredible team.</h3>
                <div className='buts' style={{ display: 'flex' }}>

                  <div>
                    <Button varient="contained" onClick={()=> navigate("/user/booking")}>BOOK</Button>

                  </div>
                  <div>
                    <Button varient="contained">Info</Button>

                  </div>
                </div>            </div>
            </Grid>
            <Grid className='grid3a' item xs={3} style={{ minWidth: '400px' }}>
              <img style={{ height: '100%', width: '100%' }} src="/src/assets/images/emp.jpg" alt="Description of the image" />
              <div className='paper' style={{ backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px' }}>
                <h1>Employee Recognition</h1>
                <h3>Happy Anniversary to our incredible team.</h3>
                <div className='buts' style={{ display: 'flex' }}>

                  <div>
                    <Button varient="contained" onClick={()=> navigate("/user/booking")}>BOOK</Button>

                  </div>
                  <div>
                    <Button varient="contained">Info</Button>

                  </div>
                </div>            </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div style={{ marginTop: '2%' }}>
        <Button variant="contained" color="success">
          Get Started
        </Button>
      </div>
    </CenteredContainer>
  );
}

export default Event;
