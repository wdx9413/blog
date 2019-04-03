import {connect} from 'react-redux';
import ItemList from '../../components/back/Main/ItemList';
const mapStateToProps = state => ({
    articles: state.articles
})

export default connect(mapStateToProps)(ItemList);