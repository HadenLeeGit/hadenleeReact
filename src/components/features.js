import {Link} from "react-router-dom";

export const Features = () => {
  return (
    <div id='features' className='text-center'>
      <div className='container' style={{marginTop:84}}>
        <div className='col section-title'>
          <h2>Homework</h2>
        </div>
        <div className='row'>

            <div className='col'>
              {' '}
              <Link to='/projects/1'>
                  <i className="fa fa-html5"></i>
                  <h3>PROJECT 1</h3>
                  <p>Exploring HTML, CSS and JavaScript
                  </p>
              </Link>
            </div>
            <div className='col' style={{marginTop:80}}>
                {' '}
                <Link to='/projects/2'>
                    <i className="fa fa-facebook"></i>
                    <h3>PROJECT 2</h3>
                    <p>Exploring React Components
                    </p>
                </Link>
            </div>


            <div className='col' style={{marginTop:80}}>
                {' '}
                <a href='./projects/3.html'>
                    <i className="fa fa-magic"></i>
                    <h3>PROJECT 3</h3>
                    <p>Exploring P5</p>
                </a>
            </div>
            <div className='col' style={{marginTop:80}}>
                {' '}
                <a href='/projects/4.html'>
                    <i className="fa fa-line-chart"></i>
                    <h3>PROJECT 4</h3>
                    <p>D3 and Data Visualization</p>
                </a>
            </div>



      </div>
      </div>
    </div>
  )
}
