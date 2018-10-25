import React from 'react';
import PropTypes from 'prop-types';


class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.article.value);
        this.props.addArticle(event.target.article.value);
        event.target.article.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={'article'}>Article Title</label>
                    <input id={'article'} type={'text'} />
                    <button type={'submit'}>submit</button>
                </form>
            </div>
        )
    }
}

Form.propTypes = {
    addArticle: PropTypes.func.isRequired
};

export default Form;
