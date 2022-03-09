import { get } from "../api.config"

const url = "/posts"

const getQueryParrilla = (par = { per_page: 2, page: 1 }) => {
    const { per_page, page } = par;
    const params = {
        categories: 6,
        per_page,
        page
    };

    return get(url, { params })
}


export const portafolio = {
    getQueryParrilla
}