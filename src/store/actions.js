export default {
    updateCategoryAsync(context, categories) {
        context.commit('updateCategory', categories)
    },
    updateArticleAsync(context, article) {
        context.commit('updateArticle', article)
    }
}