import React from 'react'

class FavThing extends React.Component {
  constructor() {
    super();
    this.state = {
      favorite: '',
    };
  }

  handleChange = e => {
    this.setState({ favorite: e.target.value })
  }

  render() {
    const { thing } = this.props;
    const { favorite } = this.state;
    return (
      <div className="input">
        <input placeholder={`Enter Fav ${thing}`} onChange={this.handleChange} />
        <h1>Fav {thing}: {favorite}</h1>
      </div>
    )
  }
}

export default FavThing;