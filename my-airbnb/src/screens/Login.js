import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { PropTypes } from "prop-types";
import colors from "../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import InputField from "../components/form/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";

export default class Login extends Component {
  handleNextButton() {
    alert("Next Button Pressed");
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.scollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton handleNextButton={this.handleNextButton} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.green01
  },
  scollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    flex: 1
  },
  loginHeader: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  nextButton: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  }
});
