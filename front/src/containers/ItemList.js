import {connect} from 'react-redux';
import ItemList from '../components/Home/ItemList';
const mapStateToProps = state => ({
    articles: state.articles
})

export default connect(mapStateToProps)(ItemList);