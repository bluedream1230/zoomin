import Api from 'services/api';
import {
    API_CAMPAIGN_DATA,
    API_GAME_DATA,
    API_REWARD_DATA,
    API_EVENT_INFO_ITEM,
    API_AUDIENCE_DATA,
    API_USERS_DATA,
    API_GET_CAMPAIGN_DATA,
    API_GET_REWARD_DATA,
    API_SEND_MAIL,
    API_RESETPASSWORD,
    API_UPDATE_USER_INFO,
    API_UPDATE_BILL_INFO,
    API_UPDATE_RESET_PASS,
    API_UPDATE_PASS,
    API_ADD_TRIVIA,
    API_PAYMENT,
    API_ADD_PRIZE_POOL,
    API_REWARD_BYID,
    API_GET_USER_INFO
} from 'store/api';

export const getCampaign = async () => {
    return Api.get(API_GET_CAMPAIGN_DATA);
};

export const getGame = async () => {
    return Api.get(API_GAME_DATA);
};

export const getReward = async () => {
    return Api.get(API_REWARD_DATA);
};

export const getRewardInfo = async () => {
    return Api.get(API_GET_REWARD_DATA);
};

export const getRewardById = async (id) => {
    return Api.get(API_REWARD_BYID, {}, { id });
};

export const createPrize = async (data) => {
    return Api.post(API_REWARD_DATA, data);
};

export const updateReward = async (data, id) => {
    console.log('dataid', data, id);
    return Api.put(API_REWARD_BYID, data, { id });
};

export const createPrizepool = async (data) => {
    return Api.post(API_ADD_PRIZE_POOL, data);
};

export const getPrizepool = async () => {
    return Api.get(API_ADD_PRIZE_POOL);
};

export const createAudience = async (data) => {
    return Api.post(API_AUDIENCE_DATA, data);
};

export const getEventInfo = async (id) => {
    return Api.get(API_EVENT_INFO_ITEM, {}, { id });
};

export const getAudience = async () => {
    return Api.get(API_AUDIENCE_DATA);
};

export const getUsers = async (id) => {
    return Api.get(API_USERS_DATA, {}, { id });
};

export const createEvent = async (data, videourl, rewardIds, gameId, rewardpool, audienceId, files) => {
    return Api.uploadFile(
        API_CAMPAIGN_DATA,
        { data: JSON.stringify(data), rewardIds: JSON.stringify(rewardIds), videourl: videourl },
        { gameId, rewardpool, audienceId },
        files
    );
};

export const payment = async (data) => {
    return Api.post(API_PAYMENT, data);
};

export const sendMail = async (data) => {
    return Api.post(API_SEND_MAIL, data);
};

export const resetPassword = async (data) => {
    return Api.post(API_RESETPASSWORD, data);
};

export const getUserInfo = async () => {
    return Api.get(API_GET_USER_INFO);
};

export const updateUserInfo = async (data) => {
    return Api.put(API_UPDATE_USER_INFO, data);
};

export const updateBillInfo = async (data) => {
    return Api.put(API_UPDATE_BILL_INFO, data);
};

export const updatePass = async (data) => {
    return Api.post(API_UPDATE_PASS, data);
};

export const addTrivia = async (data) => {
    return Api.post(API_ADD_TRIVIA, data);
};
