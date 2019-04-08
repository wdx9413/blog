import {connect} from 'react-redux';
import { getArticlesByTypeAsync, getAllArticlesAsync } from '../../api/Article';
import { setArticles } from '../../store/actions';
import Main from '../../components/back/Main';
import {withRouter} from 'react-router-dom';
const mapDispatchToProps = dispatch => ({
    onChange: async (type) => {
        let data;
        if (type === '0') {
            data = await getAllArticlesAsync();
        } else {
            data = await getArticlesByTypeAsync(type)
        }
        dispatch(setArticles(data));
    }
})
export default withRouter(connect(null, mapDispatchToProps)(Main));