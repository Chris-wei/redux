import * as constants from '../constants/counter'

const defaultState = {
	count: 0
}

export default (state = defaultState, action) => {
	switch ( action.type ) {
		case constants.ADD :
			return {
				...state ,
				count : state.count + 1
			}
		case constants.MINUS :
			return {
				...state ,
				count : state.count - 1
			}
		default :
			return  state;
	}
}
