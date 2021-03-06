import React, { Component } from "react";
import colors from "../styles/colors";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Alert,
  TouchableHighlight
} from "react-native";
import RoundedButton from "../components/buttons/RoundedButton";
import Icon from "react-native-vector-icons/FontAwesome";

export default class LoggedOut extends Component {
  onFacebookPress() {
    Alert.alert("Facebook button pressed", "눌렀다고");
  }

  onCreateAccountPress() {
    Alert.alert("Create Account button pressed");
  }

  onMoerOptionsPress() {
    Alert.alert("More option button pressed");
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={require("../img/airbnb-logo.png")}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome to Aribnb</Text>
          <RoundedButton
            text="Continue with Facebook"
            textColor={colors.green01}
            background={colors.white}
            icon={
              <Icon
                name="facebook"
                size={20}
                style={styles.facebookButtonIcon}
              />
            }
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Create Account"
            textColor={colors.white}
            handleOnPress={this.onCreateAccountPress}
          />

          <TouchableHighlight
            style={styles.moreOptionButton}
            onPress={this.onMoerOptionsPress}
          >
            <Text style={styles.moreOptionButtonText}>More options</Text>
          </TouchableHighlight>

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue, Create Account or More
            </Text>
            <Text style={styles.termsText}>{" options,"}</Text>
            <Text style={styles.termsText}>{"I agree to Airbnb's "}</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Payments Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Nondiscrimination Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.green01
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: "relative",
    left: 20,
    zIndex: 8
  },
  moreOptionButton: {
    marginTop: 15
  },
  moreOptionButtonText: {
    color: colors.white,
    fontSize: 16
  },
  termsText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "600"
  },
  termsAndConditions: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 30
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  }
});
