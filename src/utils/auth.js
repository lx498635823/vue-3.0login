import Cookies from "js-cookie";

const TokenKey = "long_steel_token";
const UserKey = "long_steel_user";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getUser() {
  return Cookies.get(UserKey);
}

export function setUser(user) {
  return Cookies.set(UserKey, user);
}

export function removeUser() {
  return Cookies.remove(UserKey);
}

// export function getToken(username) {
//   return Cookies.get(username);
// }

// export function setToken(username, token) {
//   return Cookies.set(username, token);
// }

// export function removeToken(username) {
//   return Cookies.remove(username);
// }

const ActionsKey = "long_steel_actions";

export function getActions() {
  return Cookies.get(ActionsKey);
}

export function setActions(actions) {
  return Cookies.set(ActionsKey, actions);
}

export function removeActions() {
  return Cookies.remove(ActionsKey);
}
