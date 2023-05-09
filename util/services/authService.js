import axios from "axios";
import {API_KEY} from "@env"

const signinurl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
const signupurl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export const signUp = async (email, password, phone, address, name) => {
  try {
    const response = await axios.post(signupurl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    if (response.data.idToken) {
      const saveUser = await axios.put(
        `https://easybuy-cc55d-default-rtdb.firebaseio.com/users/${response.data.localId}.json`,
        {
          uuid: response.data.localId,
          name: name,
          phone: phone,
          email: email,
          address: address,
        }
      );
      return {
        status: 200,
        idToken: response.data.idToken,
        user: saveUser.data,
      };
    }
  } catch (e) {
    console.log(`signup error ${e.response.data.error.message}`)
    return e;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await axios.post(signinurl, {
      email,
      password,
    });
    if (response.data.idToken) {
      const user = await axios.get(
        `https://easybuy-cc55d-default-rtdb.firebaseio.com/users/${response.data.localId}.json`,
      );
      if (user) {
        return { status: 200, idToken: response.data.idToken, user: user.data };
      }
    }
  } catch (e) {
     return e;
  }
};
