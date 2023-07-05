
const ACTIONS_USER = {
    LOGIN: "LOGIN_USER",
    LOGOUT: "LOGOUT_USER",
    UPDATE: "UPDATE_USER",
}

export const myReducer = (state, action) => {
  switch (action.type) {
    
    case ACTIONS_USER.LOGIN:
      if (
        action.payload.email === "admin@admin.com" &&
        action.payload.password === "admin"
      ) {
        localStorage.setItem(
          "userLogin",
          JSON.stringify({
            email: "admin@admin.com",
            isLogged: true,
          })
        );
      } else {
        alert("something went wrong");
        return { ...state, isLogged: false };
      }
      return {
        ...state,
        email: action.payload.email,
        isLogged: true,
      };

    case ACTIONS_USER.LOGOUT:
      localStorage.removeItem("userLogin");
      return {
        isLogged: false,
      };

    case ACTIONS_USER.UPDATE:
      return {
        ...state,
        // name: action.payload.name,
        [action.payload.name]: action.payload.value,
      };
    default:
      return { ...state };
  }
};
