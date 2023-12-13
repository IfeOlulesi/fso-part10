import { Pressable, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import theme from "../theme";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";

const initial_values = {
  username: "",
  password: "",
};

const validation_schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
});

const styles = StyleSheet.create({
  viewContainer: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 15,
    borderRadius: 4,
  },
  signInButton: {
    backgroundColor: theme.colors.royalBlue,
    padding: 20,
    marginBottom: 20,
    borderRadius: 4,
  },
  buttonText: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

function handleSubmit(values) {
  console.log(values);
  // Alert.alert(values);
}

const SignIn = () => {
  return (
    <Formik
      validationSchema={validation_schema}
      initialValues={initial_values}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View style={styles.viewContainer}>
          <FormikTextInput
            style={styles.textInput}
            name={"username"}
            placeholder="Username"
          />
          <FormikTextInput
            style={styles.textInput}
            name={"password"}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Pressable style={styles.signInButton} onPress={handleSubmit}>
            <View style={styles.buttonText}>
              <Text color={"white"} fontWeight={"bold"} fontSize={"subheading"}>
                Sign In
              </Text>
            </View>
          </Pressable>
        </View>
      )}
    </Formik> 
  );
};

export default SignIn;
