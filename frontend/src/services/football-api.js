import axios from "axios";

const footballApiBaseUrl = import.meta.env.VITE_JS_FOOTBALL_API_BASE_URL;
const footballApiKey = import.meta.env.VITE_JS_FOOTBALL_API_KEY;
const headers = {
    headers: {
        'x-apisports-key': footballApiKey
    }
}

export const getNextGames = async (next ) => {
    const resp = await axios.get(footballApiBaseUrl + 'fixtures?league=61&season=2022&next=' + next, headers)
    return resp.data
};
