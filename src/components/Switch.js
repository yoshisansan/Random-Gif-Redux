import React from "react";

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonText } = this.props;
    return (
      <div>
        <button onClick={this.getButton(buttonText)}>{buttonText}</button>
      </div>
    );
  }

  getButton = buttonText => {
    const { switchOn, switchOff, hitGiphy } = this.props;

    switch (buttonText) {
      case "ボタン":
        return hitGiphy;

      case "スロット開始":
        return switchOff;

      case "スロット停止":
        return switchOn;
    }
  };
}
