import { StyleSheet } from "react-native";
import { Size } from "../../constants";
import { Colors, Styles } from "../../styles";

export default StyleSheet.create({
  header: {
    width: "100%",
    height: 26,
  },
  container: {
    width: Size.wWidth,
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: "10%"
  },
  heading: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    marginTop: 20,
    alignSelf: "flex-start"
  },
  inputStyle: {
    width: Size.wWidth / 1.1,
    backgroundColor: "#FFF",
    fontWeight: "400",
    fontSize: 14,
    height: 56,
    paddingLeft: 44,
    marginTop: -2
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  button: {
    width: Size.wWidth / 1.3,
    height: 70,
    ...Styles.centered,
    backgroundColor: "#000"
  },
  alreadyAUser: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000"
  },
  alreadyLogin: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.primary
  },
  socialLogin: {
    width: 76,
    height: 56,
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#E4DFDF",
    backgroundColor: "#fff",
    ...Styles.centered,
    margin: 12
  },
  continueWithEmail: {
    width: Size.wWidth / 1.48,
    height: 56,
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#E4DFDF",
    backgroundColor: "#fff",
    ...Styles.centered,
    margin: 12
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginLeft: 8
  },
  labelText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#747688",
    marginBottom: -4,
    marginTop: 6,
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginLeft: 8
  },
  datePickerContainer: {
    width: Size.wWidth / 1.1,
    borderWidth: 0.8,
    borderColor: "#E4DFDF",
    fontWeight: "500",
    fontSize: 14,
    borderRadius: 8,
    alignSelf: "center",
  },
  mainWrapper: {
    flex: 1,
    width: '100%',
  },
  titleWrapper: {
    marginVertical: Size.vs,
    fontSize: 24,
    color: Colors.gray9,
    fontWeight: '500'
  },
  subtitleWrapper: {
    marginBottom: Size.s
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
  },
  subtitleTextBold: {
    fontWeight: '800'
  },
  codeFieldWrapper: {
    marginVertical: Size.s,
    // alignSelf: 'center',
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 20
  },
  cell: {
    width: 55,
    height: 55,
    lineHeight: Size.vl,
    fontSize: 24,
    borderRadius: Size.s12,
    textAlign: 'center',
    marginHorizontal: Size.s14,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  focusCell: {
    borderColor: Colors.gray9,
  },
  errorMsg: {
    fontSize: Size.s,
    color: Colors.danger,
  },
  resendWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  resendButton: {
    color: Colors.primary,
  },
  buttonWrapper: {
    paddingVertical: Size.m,
    paddingHorizontal: Size.s,
    marginVertical: Size.l,
    borderRadius: Size.s,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    fontSize: Size.m,
    color: Colors.white,
  },
  userSwitchTextWrapper: {
    ...Styles.rowView,
    justifyContent: 'center',
    marginVertical: Size.s
  },
  userSwitchText: {
    color: Colors.primary,
    fontSize: Size.m - 2,
    textTransform: 'capitalize'
  },
  submitButton: {
    width: "100%",
    marginTop: 20
  },
  submitText: {
    fontSize: 14,
  }
})