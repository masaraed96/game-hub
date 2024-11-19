import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"aca704bf9afc40238dc58eb10085d844"
    }
});