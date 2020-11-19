function Project ( props ) {

  return (
    <div className="project-container">

      <div className="project-title">
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

      <div className="project-image">
        <div className="project-image-container">
          <img src={props.image} alt="" />
        </div>
      </div>

      <div className="project-content">
        <div>{props.content}</div>
        <div>{props.stack}</div>
      </div>

    </div>
  )
}



export default Project;