
import {connect} from 'react-redux';
import { getArticlesByTypeAsync } from '../../api/Article';
import { setArticles } from '../../store/actions';
import Catergory from '../../components/main/category';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
    articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
    setArticleListByTypeAsync: async (type) => {
        let articleList = await getArticlesByTypeAsync(type);
        dispatch(setArticles(articleList))
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Catergory));