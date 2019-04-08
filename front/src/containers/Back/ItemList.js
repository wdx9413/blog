import {connect} from 'react-redux';
import ItemList from '../../components/back/Main/ItemList';
import { getAllArticlesAsync } from '../../api/Article';
import { setArticles } from '../../store/actions';
const mapStateToProps = state => ({
    articles: state.articles
})

const mapDispatchToProps = dispatch => ({
    setDefaultArticleList: async () => {
        let articleList = await getAllArticlesAsync();
        dispatch(setArticles(articleList));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);