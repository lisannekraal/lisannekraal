import './References.css';

function Reference(props) {

  return (
    <div className="reference-container" style={ props.dimensions.width < 800 ? {width: '60%', height: '300px'} : {}}>
      <div className="portrait"><img src={props.icon} alt="" /></div>
      <div className="reference-name">
        <div>{props.name}</div>
      </div>
      <div>{props.title}</div>
      <div>{props.content}</div>
      
    </div>
  );
}

export default Reference;