import {
  CLEAR,
  FETCH_CONSTRUCTIONS,
  FETCH_CONSTRUCTIONS_ERROR,
  FETCH_CONSTRUCTION,
  FETCH_CONSTRUCTION_ERROR,
  SET_CONSTRUCTIONS,
  SET_CONSTRUCTION
} from './types';

export const fetchConstruction = () => ({ type: FETCH_CONSTRUCTION });

export const fetchConstructionError = (error) => ({ type: FETCH_CONSTRUCTION_ERROR, error });

export const setConstruction = (construction) => ({ type: SET_CONSTRUCTION, construction });

export const fetchConstructions = () => ({ type: FETCH_CONSTRUCTIONS });

export const fetchConstructionsError = (error) => ({ type: FETCH_CONSTRUCTIONS_ERROR, error });

export const setConstructions = (constructions) => ({ type: SET_CONSTRUCTIONS, constructions });

export const clear = () => ({ type: CLEAR });
