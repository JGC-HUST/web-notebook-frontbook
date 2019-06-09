export default {
    getUserInfo(state) {
        return state.userInfo;
    },
    getCategories(state) {
        return state.categories;
    },
    getArticle(state) {
        return state.article
    },
    getCurrentCate(state) {
        return state.currentCate
    },
    getCurrentArticle(state) {
        return state.currentArticle
    }
}