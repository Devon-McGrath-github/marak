import { connect } from 'react-redux'
import Auth from '../components/Auth'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}


const mapDispatchToProps = (dispatch) => {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)
