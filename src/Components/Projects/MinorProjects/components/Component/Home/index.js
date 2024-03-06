import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import ProjectCard from '../ProjectCard'
import NotFound from '../NotFound'
import getMinorProjectsList from '../../Assets/constants'
import { withRouter } from 'react-router'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

class Home extends Component {
  state = {projectList: [], isLoading: 'success', category: 'REACT'}

  componentDidMount() {
    this.getData()
  }

  getCamelData = snakeData => {
    const camelData = snakeData.map(item => ({
      id: item.id,
      name: item.name,
      imageUrl: item.image_url,
      link:item.localLink
    }))
    return camelData
  }

  getData = async () => {
    this.setState({isLoading: 'loading'})
    const {category} = this.state

    const response = await getMinorProjectsList()

    if (response) {
      // const jsonData = await response.json()

      const formattedData = this.getCamelData(response.projects)
      console.log(formattedData)
      this.setState({projectList: formattedData, isLoading: 'success'})
    } else {
      this.setState({isLoading: 'failure'})
    }
  }

  onChangeCategory = event => {
    this.setState({category: event.target.value}, this.getData)
  }

  handleClickIcon=(value)=>{
    const {history}=this.props
    history.push(value)
  }


  renderLoading = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderFailure = () => <NotFound getData={this.getData} />

  renderSuccess = () => {
    const {projectList} = this.state
    return (
      <ul className="project-container">
        {projectList.map(item => (
          <ProjectCard onClickCard={()=>this.handleClickIcon(item.link)} key={item.id} data={item} />
        ))}
      </ul>
    )
  }

  checkRender = () => {
    const {isLoading} = this.state
    switch (isLoading) {
      case 'loading':
        return this.renderLoading()
      case 'success':
        return this.renderSuccess()
      case 'failure':
        return this.renderFailure()

      default:
        return this.renderFailure()
    }
  }

  render() {
    return (
      <div className="bg-container-home">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <div className="home-card">
          <select value={this.state.category} onChange={this.onChangeCategory}>
            {categoriesList.map(item => (
              <option id={item.id} value={item.id}>
                {item.displayText}
              </option>
            ))}
          </select>
          {this.checkRender()}
        </div>
      </div>
    )
  }
}

export default (Home)
