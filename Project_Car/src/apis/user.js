import baseAPI from "./fetcher";

// Đăng KÝ ACCOUNT USER
export async function signupAPI(credentials) {
  try {
    const resp = await baseAPI.post("/post-signUp", credentials);
    return resp.data.content;
  } catch (error) {
    if (error.response) {
      throw error.response.data?.content;
    }
    throw error.message;
  }
}

// ĐĂNG NHẬP ACCOUNT USER
export async function signInAPI(credentials) {
  try {
    const resp = await baseAPI.post("/post-signIn", credentials);
    const userString = JSON.stringify(resp.data);
    localStorage.setItem("User", userString);

    return resp.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data?.content;
    }
    throw error.message;
  }
}
