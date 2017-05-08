import React from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

class Message extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      display: true
    };

    this.handleDisplay = this.handleDisplay.bind(this);
  }

  componentDidMount () {
    this.setState({
      display: this.props.display
    });
  }

  handleDisplay () {
    this.setState({
      display: !this.state.display
    });
  }

  render () {
    const { display } = this.state;
    const { type = 'warning', text } = this.props;

    return (
      <span>
        { display && (
          <div>
            <div className={`alert alert-${type}`}>
              { type === 'warning' && <FontAwesome className='alert-info' name='info-circle' /> }
              <FontAwesome onClick={this.handleDisplay} className='alert-remove' name='times' />
              <p>{text}</p>
            </div>
          </div>
        )}
      </span>
    );
  }
}

export default Message;
