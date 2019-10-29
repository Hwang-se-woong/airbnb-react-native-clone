import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { PropTypes } from "prop-types";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

export default class InputField extends Component {
  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle
    } = this.props;
    const fontSize = labelTextSize || 14;
    const color = labelColor || colors.white;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || "transparent";
    return (
      <View style={[styles.wrapper, customStyle]}>
        <Text style={[styles.label, { fontSize }, { color }]}>{labelText}</Text>
        <TextInput
          style={[
            styles.inputField,
            { color: inputColor, borderBottomColor: borderBottom }
          ]}
          autoCorrect={false}
          secureTextEntry={inputType === "password" ? true : false}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string,
  textColor: PropTypes.string,
  borderBottomColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  customStyle: PropTypes.object
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  label: {
    fontWeight: "700",
    marginBottom: 10
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  }
});
