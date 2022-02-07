

function ContactMe(props) {
  return (
    <>
      <div className="container contact-bg">
        <div className="row">
          <div className="col-sm-4">      
            <h1 className="home-contact">Contact Me</h1>
          </div>
          <div className="col-sm-8 contact">
            <table>
              <tr>Email: gianelle.tianco@gmail.com</tr>
              <tr><a href="https://www.linkedin.com/in/g-tianco"><button type="button" class="btn btn-secondary btn-lg btn-lnk">
              LinkedIn</button></a></tr>
              <tr><a href="https://github.com/Giangela01"><button type="button" class="btn btn-secondary btn-lg btn-lnk">GitHub</button></a></tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe;