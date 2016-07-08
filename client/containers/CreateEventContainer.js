import { connect } from 'react-redux'
import CreateEvent from '../components/CreateEvent'

const mapStateToProps = (state) => {
  return {
    testerino: state.testerino
  }
}

export default connect(mapStateToProps)(CreateEvent)
