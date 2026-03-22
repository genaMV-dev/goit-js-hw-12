import axios from "axios"

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
    key: `55067704-3401c91e7f521ffd7d90d5720`,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
    per_page: 15,
}



export const getImagesByQuery = async (query, page) =>{
    const res = await axios.get("", {
        params: {
            q: query,
            page,
        },
    });
    return res.data;
}

