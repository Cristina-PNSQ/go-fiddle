import './Expander.scss';

import * as React from 'react';

interface Props {
  defaultExpanded?: boolean;
  title: string;
}

interface State {
  expanded: boolean;
}

class Expander extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      expanded: props.defaultExpanded || true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  public render() {
    const { expanded } = this.state;
    return (
      <div className="Expander">
        <dt
          className={['title', expanded ? 'expanded' : ''].filter(c => c).join(' ')}
          onClick={this.handleClick}>
          <svg width={14} height={14}>
            <path className="path" stroke="#000" fill="none" strokeWidth={2} d="M5,2 L10,7 L5,12" />
          </svg>

          {this.props.title}
        </dt>
        {
          expanded ?
          <div className="content">{this.props.children}</div> :
          null
        }
      </div>
    );
  }
}

export default Expander;
