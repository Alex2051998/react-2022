import {axiosService} from "./axios.service";
import {urls} from "../config/urls";


export const userService = {
    getAll:() => axiosService.get(urls.users).then(value => value.data),
    getById:(id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getByAlbum:(id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getByFoto:(id) => axiosService.get(`${urls.photos}?albumId=${id}`).then(value => value.data)
    // https://jsonplaceholder.typicode.com/photos?albumId=${id}

}