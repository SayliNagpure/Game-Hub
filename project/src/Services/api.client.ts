import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
params:{
    key:'7847ee60e5034a5092ffb2e085181a51'
}
})