import './folderContents.css';
import './Project.css';

const Project = (props: any) => {
  return (
    <div className={`project-display ${props.flexbox ? 'is-flex' : ''}`} data-name={"display project"}>
      {/* <p style={{textAlign: "center"}}>{props.name}</p> */}
      {props.component}
    </div>
  )
}

export default Project;