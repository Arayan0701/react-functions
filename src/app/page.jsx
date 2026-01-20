import React from 'react';
import './page.css';

export default function Home() {
return (
<>
<header>
  <h1>Rajkot Samasya Portal</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">Raise Samasya</a>
    <a href="#">Track</a>
    <a href="#">Login</a>
  </nav>
</header>

<section className="hero">
  <div className="hero-text">
    <h2>Aam Aadmi ki Samasya<br /> AAP ke Saath Samadhan</h2>
    <p>
      Rajkot citizens can report local issues directly to
      Aam Aadmi Party booth volunteers for fast resolution.
    </p>
    <div className="hero-buttons">
      <button className="btn-primary">Raise Samasya</button>
      <button className="btn-secondary">Track Status</button>
    </div>
  </div>

  <div className="hero-image">
    <img src="city-illustration.png" alt="Rajkot City" />
  </div>
  
  

</section>
</>
);
}

