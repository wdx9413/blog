import React, { Component } from 'react';
import ItemListConfig from '../../../config/ItemListConfig';
import CustomButton from '../../../containers/CustomButton';
import '../../../styles/Category.scss'
import { Link } from "react-router-dom";
class Catergory extends Component {
    state = {
        type: 1
    }
    componentWillMount() {
        this.props.setArticleListByTypeAsync(1);
    }
    render() {
        return (
            <div className='category'>
                <ul className='category-list'>
                    {
                        ItemListConfig.map(({ type, name }, index) => {
                            return (
                                <li key={index} className={'category-list-unit' + (type === this.state.type ? ' selected' : '')} onClick={this.changeType.bind(this, type)}>
                                    <CustomButton type={type}>{name}</CustomButton>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className='category-content'>
                    <span className='content-title'>分类</span>
                    <ul className='item-list'>
                        {
                            this.props.articles.map((article, index) =>
                                <li className='item' key={index}>
                                    <Link className='item-title' to={`/article/${article.id}`}>{article.title}</Link>
                                    <span className='item-date'>{article.date.substring(0,10)}</span>
                                </li>
                            )
                        }
                    </ul>
                    <div className='sum'>{this.props.articles && this.props.articles.length > 0 ? `共${this.props.articles.length}篇文章` : '无'}</div>
                </div>
            </div>
        );
    }

    changeType(type) {
        this.setState(Object.assign({}, this.state, { type }));
    }
}

export default Catergory;
