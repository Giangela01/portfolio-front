
function Projects(props) {
  return (
    <>
    <div>
      <h1 className="home-wel">PROJECTS</h1>
    </div>
    <div class="card">
      <img src="https://imgur.com/WR7B3fo.png" class="card-img-top" alt="dictionary" />
    <div class="card-body">
      <h3 class="card-title">Dictionary + Log</h3>
      <p class="card-text">A website built primarily with EJS and Express that allows users to search for words they might not know of the meaning and also a reading accompaniment.</p>
      <a href="https://dictionary-logs.herokuapp.com/" class="btn btn-primary">Live Site</a>
    </div>
    </div>
    <div class="card">
      <img src="https://i.imgur.com/iYFAoKF.png" class="card-img-top" alt="wedding" />
    <div class="card-body">
      <h3 class="card-title">Don and Marge Wedding</h3>
      <p class="card-text">A mock website built primarily with Ruby on Rails and React Frontend that allows user and guest user to update RSVP and view wedding announcements posted by the couple users.</p>
      <a href="https://don-n-marge.netlify.app/" class="btn btn-primary">Live Site</a>
    </div>
    </div>
    <div class="card">
      <img src="https://i.imgur.com/NaK41Dw.png" class="card-img-top" alt="allStaff" />
    <div class="card-body">
      <h3 class="card-title">Company Document Generator</h3>
      <p class="card-text">A mock website built primarily with Laravel and React Frontend that allows users (ideally administrative employees) to maintain an employee database and generate PDF Documents.</p>
      <a href="https://gt-documentgenerator.netlify.app/" class="btn btn-primary">Live Site</a>
    </div>
    </div>
    </>
    );
}

export default Projects;