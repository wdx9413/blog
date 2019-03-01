import {connect} from 'react-redux';
import {getArticlesByTypeAsync} from '../api';
import { setArticles } from '../store/actions';
import CustomButton from '../components/Home/CustomButton';
import {withRouter} from 'react-router-dom'
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: async () => {
        let articles = await getArticlesByTypeAsync(ownProps.type);
        dispatch(setArticles(articles));
    }
})

export default withRouter(connect(null, mapDispatchToProps)(CustomButton));