import axios from "axios";

const statisticApi = import.meta.env.VITE_JS_STATS_API_BASE_URL;


export const getGameStatistic = async () => {
    const resp = await axios.get(statisticApi + '/statistics')
    return resp.data
};
