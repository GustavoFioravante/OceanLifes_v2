import React from "react";
import { Button, Alert } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { makeRedirectUri } from "expo-auth-session"; 
import { auth } from "./firebaseConfig"; 
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";

export const GoogleLoginButton = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "SEU_CLIENT_ID.apps.googleusercontent.com",
    redirectUri: makeRedirectUri({
      scheme: "your-app-scheme", 
    }),
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          const user = userCredential.user;
          Alert.alert("Login bem-sucedido", `Bem-vindo, ${user.displayName}!`);
        })
        .catch((error) => {
          Alert.alert("Erro ao logar", error.message);
        });
    }
  }, [response]);

  return (
    <Button
      title="Logar com Google"
      onPress={() => promptAsync()}
      disabled={!request}
    />
  );
};

