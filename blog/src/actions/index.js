import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    //const userIds = _.uniq(_.map(getState().posts, 'userId'));
    //userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};

export const fetchPosts = () => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    };
};

export const fetchUser = id => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get('/users/' + id);

        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    };
};

/**
 * accion usando memoize
 */
/*
export const fetchUser = id => {
    return dispatch => {
        _fetchUser(id, dispatch);
    };
};

const _fetchUser = _.memoize(async function(id, dispatch) {
    const response = await jsonPlaceholder.get('/users/' + id);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});
*/
