import { connect } from 'react-redux'
import Landing from '../components/Landing'

const mapStateToProps = (state) => {
  return {
    testerino: state.testerino
  }
}

export default connect(mapStateToProps)(Landing)
