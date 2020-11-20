import './Projects.css';

function Project (props) {

  const widthBoundary = 1100;

  const projectContainerDesktop = {
    minWidth: '300px'
  }

  const projectContainerMobile = {
    minWidth: '100px',
    flexDirection: 'column'
  }

  const projectTitleDesktop = {
    width: '25%',
    height: '300px'
  }

  const projectTitleMobile = {
    height: '30vh'
  }

  const projectImageDesktop = {
    width: '28%'
  }

  const projectContentDesktop = {
    width: '47%'
  }


  return (
    <div className="project-container" style={props.dimensions.width > widthBoundary ? projectContainerDesktop : projectContainerMobile}>

      <div className="project-title" style={props.dimensions.width > widthBoundary ? projectTitleDesktop : projectTitleMobile}>
        <div>{props.title}</div>
        <div className="project-links">
          <div>
            <a href={props.github} target="_blank" rel="noreferrer nofollow">
              <i className="fab fa-github"></i>
            </a>
          </div>
            { props.website && 
              <div>
                <a href={props.website} target="_blank" rel="noreferrer nofollow">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            }
            { props.loom && 
              <div>
                <a href={props.loom} target="_blank" rel="noreferrer nofollow">
                  <i class="fas fa-video"></i>
                </a>
              </div>
            }
        </div>
      </div>

      <div className="project-image" style={props.dimensions.width > widthBoundary ? projectImageDesktop : {}}>
        <div className="project-image-container">
          <img src={props.image} alt="" />
        </div>
      </div>

      <div className="project-content" style={props.dimensions.width > widthBoundary ? projectContentDesktop : {}}>
        <div>{props.content}</div>
        <div>{props.stack}</div>
      </div>

    </div>
  )
}



export default Project;