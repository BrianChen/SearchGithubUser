import React from 'react';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div className='search-form'>
        <input className='search-form__input' onChange={this.onChange} value={this.state.value} />
        <button className='search-form__button' onClick={() => this.props.onSubmit(this.state.input)} >Find</button>
      </div>
    );
  }
}

export default SearchForm;
