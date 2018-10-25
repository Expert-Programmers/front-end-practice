import React from 'react';
import PropTypes from 'prop-types';


const List = props => (
    <ul>
        {props.articles.map((article, index) => <li key={index}>{article}</li>)}
    </ul>
)

List.propTypes = {
    articles: PropTypes.array.isRequired
};

export default List;
