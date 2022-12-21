// project imports
import config from 'config';
import { getCampaign } from 'services/apis/server';
import { boolean } from 'yup';

// action - state management
import * as actionTypes from './actions';

export const campaignState = {
    events: [],
    rewards: [],
    rewardsInfo: [],
    games: [],
    eventInfo: [],
    audiences: [],
    prizepool: [],
    users: []
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const campaignReducer = (state = campaignState, action) => {
    switch (action.type) {
        case actionTypes.GET_EVENTS:
            return {
                ...state,
                events: action.events
            };
        case actionTypes.GET_GAMES:
            return {
                ...state,
                games: action.games
            };
        case actionTypes.GET_REWARDS:
            return {
                ...state,
                rewards: action.rewards
            };
        case actionTypes.GET_EVENT_INFO_ITEM:
            return {
                ...state,
                eventInfo: action.eventInfo
            };
        case actionTypes.GET_AUDIENCES:
            return {
                ...state,
                audiences: action.audiences
            };
        case actionTypes.GET_USERS:
            return {
                ...state,
                users: action.users
            };
        case actionTypes.GET_REWARDS_INFO:
            return {
                ...state,
                rewardsInfo: action.rewardsInfo
            };
        case actionTypes.LOG_OUT:
            return {
                ...campaignState
            };
        case actionTypes.GET_PRIZEPOOL:
            return {
                ...state,
                prizepool: action.prizepool
            };
        default:
            return state;
    }
};

export default campaignReducer;
