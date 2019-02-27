import {Request} from '../getData/getData'
class getAll extends Request{
    getArticle(markIndex=0,markSub=0) {
        return this.getData({
            url:   `/getIndexArticleList/${markIndex}/${markSub}`
        })
    }
    MarkType(markIndex=0) {
        return this.getData({
            url: `/getMarkTypeList/${markIndex}`
        })
    }
    Recommend(markIndex=0) {
        return this.getData({
            url: `/getRecommendInfo/${markIndex}`
        })
    }
}
export {getAll}