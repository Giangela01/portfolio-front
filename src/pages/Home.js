function Home(props) {
    return (
      <>
      <h1 className="home-wel">Welcome to my portfolio!</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="https://i.imgur.com/qb8i5Mv.jpg" alt="ProfilePicture" className="profile-img"/>
            </div>
            <div className="home-text col">
              <h1>Hello! I am Gianelle Tianco,</h1>
              <h1>A Web Developer</h1>
              <p>I’m a software engineer with experience primarily with front-end application; interest in full-stack development and a background in office management.</p>
              <p>I have proven ability to efficiently plan and manage multiple assignments to meet tight deadlines. I’m most passionate about the technical and professional challenges that help me further develop my career.</p>
            </div>
          </div>
        </div>
      <div>
        <h1 className="home-wel">TECH SKILLS</h1>
        <div class="container">
          <div class="row">
            <div class="col">
              <h5>Languages and Frameworks:</h5>
              <p>HTML5 | CSS | Bootstrap | JavaScript | JQuery | EJS | NodeJS | JSON | React | Ruby  | PHP | Laravel</p>
            </div>
            <div class="col">
            <h5>Data:</h5>
              <p>SQL | PostgreSQL | MongoDB</p>
            </div>
            <div class="col">
            <h5>Tech Platform:</h5>
              <p>GitHub | Slack | Postman | VSCode | Heroku | Netlify</p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Home;