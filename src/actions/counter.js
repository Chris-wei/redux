import * as constants from '../constants/counter'

//增加
export const add = ()=>({
	type : constants.ADD
})

//减少
export const minus = ()=>({
	type : constants.MINUS
})
