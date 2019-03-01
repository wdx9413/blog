import {connect} from 'react-redux';
import { getArticlesByTypeAsync } from '../api';
import { setArticles } from '../store/actions';
import Main from '../components/Back/Main';
import {withRouter} from 'react-router-dom';
const mapDispatchToProps = dispatch => ({
    onChange: async (type) => {
        let data = await getArticlesByTypeAsync(type);
        dispatch(setArticles(data));
    }
})
export default withRouter(connect(null, mapDispatchToProps)(Main));