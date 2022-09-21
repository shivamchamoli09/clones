interface IUserData {}

export const setRootUser = (userData: any) => {
  return {
    type: "SET_USER",
    payload: userData,
  };
};
