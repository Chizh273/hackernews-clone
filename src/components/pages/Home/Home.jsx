import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { loadNews } from '../../../actions'
import NewsItem from '../../shared/News-item/News-item'

class Home extends Component {
  static propTypes = {
    news: PropTypes.array.isRequired
  }

  componentWillMount () {
    this.props.loadNews()
  }

  render () {
    console.log(this.props.news)
    return (
      <div className="Home" >
        <NewsItem />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  news: state.news ? state.news.idsArray : []
})

const mapDispatchToProps = {
  loadNews
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
