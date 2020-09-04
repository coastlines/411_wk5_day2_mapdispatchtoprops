import { connect } from 'react-redux'
import  AddCar from '../components/AddCar'
import { addCar } from '../redux/actions'

// mapDispatchToProps
// takes one argument called "dispatch"
// returns an object who's keys are the props you want to pass. 

const mapDispatchToProps = (dispatch) => {
  return {
      addCar: (car) => dispatch(addCar(car))
  }
}

export default connect(null, mapDispatchToProps)(AddCar)