import React from "react";
import { connect } from "react-redux";

import Switch from "../components/Switch";
import { switchOn, switchOff, hitGiphy } from "../actions";

const mapStateToProps = state => {
  return {
    buttonText: state.buttonText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchOn: () => {
      dispatch(switchOn());
    },
    switchOff: () => {
      dispatch(switchOff());
    },
    hitGiphy: () => {
      dispatch(hitGiphy());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switch);
