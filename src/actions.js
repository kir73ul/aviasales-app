export const tglCheckbox = (key, value) => ({ type: 'TOGGLE_CHECKBOX', key, value });
export const tglAllCheckboxes = (value) => ({ type: 'TOGGLE_ALL_CHECKBOXES', value });
export const tglPriority = (value) => ({ type: 'TOGGLE_PRIORITY', value });

export const itemsHasErrored = (value) => ({ type: 'ITEMS_HAS_ERRORED', value });
export const itemsIsLoading = (value) => ({ type: 'ITEMS_IS_LOADING', value });
export const itemsFetchDataSuccess = (value) => ({ type: 'ITEMS_FETCH_DATA_SUCCESS', value });

export function itemsFetchData() {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(`https://front-test.beta.aviasales.ru/search`)
      .then((response) => response.json())
      .then(({ searchId }) => fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`))
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((res) => {
        dispatch(itemsIsLoading(false));
        dispatch(itemsFetchDataSuccess(res.tickets));
      })
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
