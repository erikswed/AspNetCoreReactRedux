const initialState = {
    booksList: []
}
export const actionCreators = {
    // "applicationUrl": "http://localhost:51374",
    // "sslPort": 44378
    requestBooks: book => async (dispatch, getState) => {
        var queryString = Object.keys(book).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(book[key])
        }).join('&');
        var url;
        // during dev to test db only
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            url = 'api/BooksXml/getbooks/fromall/?' + queryString;
        }
        else {
            url = 'https://unique-yew-244216.appspot.com/api/BooksXml/getbooks/fromall/?' + queryString;
        }
        const response = await fetch(url);
        const booksList = await response.json();
        dispatch({ type: 'FETCH_BOOKS', booksList });
    },
};

export const reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case 'FETCH_BOOKS': {
            return {
                ...state,
                booksList: action.booksList,
            }
        }
        default:
            return state;
    }
};
