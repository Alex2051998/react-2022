import {axiosService} from "./axios.service";
import {urls} from "../config/urls";


export const postService = {
    getAll:() => axiosService.get(urls.posts).then(value => value.data),
    getById:(id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getUserIdPost:(userId) => axiosService.get(`${urls.users}/${userId}/posts`).then(value => value.data),
    getPostComent:(id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)

}