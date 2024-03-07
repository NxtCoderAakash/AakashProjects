import './index.css'

const ProjectCard = props => {
  const {data} = props
  const {name, imageUrl} = data
  return (
    <li className="project-card" onClick={props.onClickCard}>
      <img src={imageUrl} alt={name} className="project-img" />
      <p>{name}</p>
    </li>
  )
}

export default ProjectCard
