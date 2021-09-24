import {
  CLEAR,
  FETCH_CONSTRUCTIONS,
  FETCH_CONSTRUCTIONS_ERROR,
  FETCH_CONSTRUCTION,
  FETCH_CONSTRUCTION_ERROR,
  SET_CONSTRUCTIONS,
  SET_CONSTRUCTION
} from './types';
import CLEAR_ALL from '../helpers/types';

const initialState = {
  construction: null,
  fetchingConstruction: false,
  errorFetchingConstruction: null,
  constructions: [],
  fetchingConstructions: false,
  errorFetchingConstructions: null,
};

export const constructionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONSTRUCTION: {
      return {
        ...state,
        fetchingConstruction: true,
        errorFetchingConstruction: null
      };
    }
    case FETCH_CONSTRUCTION_ERROR: {
      return {
        ...state,
        fetchingConstruction: false,
        errorFetchingConstruction: action.error
      };
    }
    case SET_CONSTRUCTION: {
      return {
        ...state,
        fetchingConstruction: false,
        errorFetchingConstruction: null,
        construction: action.construction
      };
    }
    case FETCH_CONSTRUCTIONS: {
      return {
        ...state,
        fetchingConstructions: true,
        errorFetchingConstructions: null
      };
    }
    case FETCH_CONSTRUCTIONS_ERROR: {
      return {
        ...state,
        fetchingConstructions: false,
        errorFetchingConstructions: action.error
      };
    }
    case SET_CONSTRUCTIONS: {
      return {
        ...state,
        fetchingConstructions: false,
        errorFetchingConstructions: null,
        constructions: action.constructions
      };
    }
    case CLEAR: {
      return initialState;
    }
    case CLEAR_ALL: {
      return initialState;
    }
    default:
      return state;
  }
};

export default constructionsReducer;
