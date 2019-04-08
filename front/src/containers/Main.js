import {connect} from 'react-redux';
import { setArticles } from '../store/actions';
import { getAllArticlesAsync } from '../api/Article';
import Main from '../components/main';
const mapDispatchToProps = dispatch => ({
    setDefaultArticles: async () => {
        let articles = await getAllArticlesAsync;
        dispatch(setArticles(articles));
    }
})
export default connect(null, mapDispatchToProps)(Main);