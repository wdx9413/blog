import {connect} from 'react-redux';
import { setArticles } from '../store/actions';
import { getArticlesByTypeAsync } from '../api/Article';
import Main from '../components/main';
const mapDispatchToProps = dispatch => ({
    setDefaultArticles: async () => {
        let articles = await getArticlesByTypeAsync(0);
        dispatch(setArticles(articles));
    }
})
export default connect(null, mapDispatchToProps)(Main);