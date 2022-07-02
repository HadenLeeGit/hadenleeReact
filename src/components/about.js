export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Me</h2>
              <p>I like coding and Computer Science. My interests are Hollywood movies, delicious food, and E-sports.
                I am a chubby boy, I have a mustache that does not fit my age, I am versatile and polite, I have a long skill that is programming, I would like to express my gratitude for the contributions of my predecessors.
                I try to use our only talent to express our deep feelings, I hope that I can rely on my ability to add something In the course of history, which is my power.
              </p>
              <h3>My Skill</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>

                    <li>Java</li>
                    <li>C</li>
                    <li>HTML/CSS/JS</li>
                    <li>PHP</li>
                    <li>MySQL</li>


                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Photoshop</li>
                    <li>Final Cut Pro</li>
                    <li>React</li>
                    <li>BootStrap</li>
                    <li>Linux</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
