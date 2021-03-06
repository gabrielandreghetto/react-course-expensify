import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc'
    };

    const state = authReducer({}, action);

    expect(state.uid).toBe(action.uid);
});

test('should set uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({ uid: 'abc' }, action);

    expect(state).toEqual({});
});