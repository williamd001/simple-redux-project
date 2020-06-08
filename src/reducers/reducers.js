const initialState = {
    notes: [
        {
            title: 'An Example Note',
            body: 'Some content',
        },
    ],
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        title: action.title,
                        body: action.body,
                    }
                ]
            };

        default:
            return state;
    }
};