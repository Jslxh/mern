import React from 'react'

const App = () => {
  return (
    <div class="hii">
        <div class="container">
          <h2>Header Logo</h2>
          <nav class="nav">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
          </nav>
          
      </div>
      <section hero ="hero">
          <div class="hero-text">
              <ul class ="list">
                  <h1><b>This website is awesome !</b></h1>
                  <p>This website has some subtext that goes here under the main title. 
                      It’s a smaller font and the color is lower contrast.
                  </p>
                  <button class="btn1">Sign up</button>
              </ul>
              <div class="hero-image">
                  this is a placeholder for an image
              </div> 
          </div>
      </section>
      <section class="info">
          <h2>Some random information</h2>
          <div class="info-cards">
              <div class="card">
                  <div class="box"></div>
                  <p>this is some subtext under an illustration or image</p>
              </div>
              <div class="card">
                  <div class="box"></div>
                  <p>this is some subtext under an illustration or image</p>
              </div>
              <div class="card">
                  <div class="box"></div>
                  <p>this is some subtext under an illustration or image</p>
              </div>
              <div class="card">
                  <div class="box"></div>
                  <p>this is some subtext under an illustration or image</p>
              </div>
          </div>
      </section>

      <div class="quote">
          <p class="quote-text">
              <em>
                  This is an inspiring quote, or a testimonial from a customer.
              Maybe it’s just filling up space, or maybe people will actually
              read it. Who knows? All I know is that it looks nice.
              </em>
          </p>
          <p class="author">- Thor, God of Thunder</p>
      </div>

      <div class="cls">
          <ul class="cta">
              <div class="cta-text">
              <h3>Call to action! It’s time!</h3>
              <p>
                  Sign up for our product by clicking that button right over there!
              </p>
              </div>
              <div>
                  <button class="btn2">Sign up</button>
              </div>
          </ul>
      </div>

    <footer>
        <p>Copyright © The Odin Project 2021</p>
    </footer>

    </div>
  )
}

export default App