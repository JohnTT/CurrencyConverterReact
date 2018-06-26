import { CHANGE_PRIMARY_COLOR } from '../actions/theme';
import styles from '../screens/Themes';

const initialState = {
  primaryColor: styles.$primaryBlue,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color,
      };
    default:
      return state;
  };
};
