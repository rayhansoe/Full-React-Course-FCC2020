// reducer function.
export const reducer = (state, action) => {
	switch (action.type) {
		case "FIRST_RENDER":
			// const newUsers = [...state.users, ...action.payload.users]
			return {
				...state,
				users: [...state.users, ...action.payload.users],
			}

		case "ERROR_FETCHING":
			return {
				...state,
				isError: action.payload.isError,
			}

		case "FETCH_STATUS":
			return {
				...state,
				isFetchLoading: action.payload.isFetchLoading,
			}

		case "LOADING_FINISHED":
			return {
				...state,
				isPageLoading: action.payload.isPageLoading,
			}

		case "ADD_URL":
			return {
				...state,
				url: action.payload.url,
			}

		case "REMOVE_USER":
			const newUsers = state.users.filter(user => user.id !== action.payload.id)
			return {
				...state,
				users: newUsers,
			}

		case "RE-FETCH":
			return {
				...state,
				users: [...action.payload.users],
			}

		default:
			throw new Error("no matching action type")
	}
}
