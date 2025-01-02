export const setToken = (token: string) => {
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 9); 

  document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/; Secure`;
};
