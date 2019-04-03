import {connect} from 'react-redux';
import {getArticlesByTypeAsync} from '../api/Article';
import { setArticles } from '../store/actions';
import {withRouter} from 'react-router-dom'
import CustomButton from '../components/main/CustomButton';
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: async () => {
        let articles = await getArticlesByTypeAsync(ownProps.type);
        dispatch(setArticles(articles));
    }
})

export default withRouter(connect(null, mapDispatchToProps)(CustomButton));