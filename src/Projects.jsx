import { useFetchProjects } from './fetchProjects.jsx'
const Projects = () => {
  const { loading, projects } = useFetchProjects()
  console.log(loading, projects)
  if (loading) {
    return (
      <section className="projects">
        <div className="projects-center">
          <div className="loading title-center"></div>
        </div>
      </section>
    )
  }
  return (
    <section className="projects">
      <div className="projects-center">
        {projects.map((project) => {
          const { productTitle, url, id, img } = project
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              rel="norefferer"
              className="project"
            >
              <img className="img" src={img} alt={productTitle}></img>
              <h5>{productTitle}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
