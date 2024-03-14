import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {key : "378c2f8e44cf4c8388d1f6e292b04015"}
})
