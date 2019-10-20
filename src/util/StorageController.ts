const STORAGE_KEY = "todoist-client-app";

export function storeToken(token: string) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ token }));
}

export function getTokenFromStorage() {
  const storage = window.localStorage.getItem(STORAGE_KEY);
  if (storage) {
    const { token } = JSON.parse(storage);
    return token;
  }
  return "";
}

export function flushToken() {
  window.localStorage.removeItem(STORAGE_KEY);
}

export default { storeToken, getTokenFromStorage, flushToken };
