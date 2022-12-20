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
    API_ADD_TRIVIA
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

export const createPrize = async (data) => {
    return Api.post(API_REWARD_DATA, data);
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

export const createEvent = async (data, videourl, rewardIds, gameId, audienceId, files) => {
    return Api.uploadFile(
        API_CAMPAIGN_DATA,
        { data: JSON.stringify(data), rewardIds: JSON.stringify(rewardIds), videourl: JSON.stringify(videourl) },
        { gameId, audienceId },
        files
    );
};

export const sendMail = async (data) => {
    return Api.post(API_SEND_MAIL, data);
};

export const resetPassword = async (data) => {
    return Api.post(API_RESETPASSWORD, data);
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

export const addTrivia = async () => {
    return Api.post(API_ADD_TRIVIA);
};
