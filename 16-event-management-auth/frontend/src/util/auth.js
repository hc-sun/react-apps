import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpireDate = localStorage.getItem("expires");
  const expiresDate = new Date(storedExpireDate);
  const now = new Date();
  const duration = expiresDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  // if there is no token, no need to check the expiration
  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration <= 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
}
