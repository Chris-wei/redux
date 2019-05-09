/*
* redux 核心方法
* */

function createStore (reducer) {
	//状态
	let state ;
	//订阅函数
	let listeners = [];

	//分发action
	let dispatch = (action)=>{
		//判断 action 的 type 值
		if( typeof action !== 'object') throw Error('Expected the action to be a object.');
		if( action.type === undefined ) throw Error('The action.type is not defined');
		//获取新的 state
		state = reducer(state, action);

		//发布
		listeners.length && listeners.forEach(listener => listener())
	}

	//订阅数据更新
	let subscribe = (fn)=> {
		if( typeof fn !== 'function' ) throw  Error('Expected the listener to be a function.')
		listeners.push(fn);
		return ()=>{
			listeners = listeners.filter(listener => fn != listener );
		}
	}

	//初始化state
	dispatch({ type : '@@redux/INIT'});

	//获取store的状态
	let getState = () => state;

	return{
		dispatch ,
		subscribe ,
		getState
	}

}

// 合并reducer
// key是新状态的命名空间 值是reducer，执行后会返回一个新的reducer
function combineReducers (reducers) {
	// 第二次调用reducer ，内部会自动的把第一次的状态传递给reducer
	return (state = {}, action) => {
		// reducer默认要返回一个状态
		let newState = {}
		for (let key in reducers) {
			// 默认reducer俩参数 一个叫state，一个叫action
			let s = reducers[key](state[key], action);
			newState[key] = s;
		}
		return newState;
	}
}

export {
	createStore ,
	combineReducers
}
