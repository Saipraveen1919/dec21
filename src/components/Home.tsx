import React from 'react'
import NavBar from './NavBar'


export default function Home() {
  return (
    <div>
<NavBar/>

<section id="hero" className="hero section dark-background">

      

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2>Welcome to Our Website</h2>
            <p  >We are team of talented designers making websites with Bootstrap</p>
          </div>
          <div className="col-lg-5" >
            <form action="forms/newsletter.php" method="post" className="php-email-form">
              <div className="sign-up-form">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" /></div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your subscription request has been sent. Thank you!</div>
            </form>
          </div>
        </div>
      </div>

    </section>





    </div>
  )
}
