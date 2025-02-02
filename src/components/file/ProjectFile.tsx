import './ProjectFile.css';

interface ProjectFileProps {
  img: string;
  title: string;
}

const ProjectFile = ({img, title}: ProjectFileProps) => {
  return (
    <div className="project-file-wrap">
      <img src={img} />
      <span>{title}</span>
    </div>
  );
}

export default ProjectFile;