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

		case "LOADING_FINISHED":
			return {
				...state,
				isLoading: action.payload.isLoading,
			}

		default:
			throw new Error("no matching action type")
	}
}
