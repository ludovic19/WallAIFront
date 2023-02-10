import axios from "axios";
// import newUser from "../pages/Register"

export const login = (user) => {
  return axios
    .post("http://localhost:8080/auth/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data[0]); // crée une clé usertoken dans le localstorage
      localStorage.setItem("details", JSON.stringify(res.data[1]));
      return res.data;
    })
    .catch((err) => console.error(err));
};
