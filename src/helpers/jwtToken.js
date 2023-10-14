import jwt from "jsonwebtoken";
const createToken = (data) => {
  // tạo ra token
  let token = jwt.sign({ data }, "TRUONG", {
    algorithm: "HS256",
    expiresIn: "90d",
  }); // HS256, ES256

  return token;
};

// kiểm tra token
const checkToken = (token) => {
  try {
    // Thử giải mã token sử dụng khóa bí mật (secret key)
    const decodedToken = jwt.verify(token, "TRUONG");

    // Nếu giải mã thành công, token hợp lệ
    return true;
  } catch (error) {
    // Nếu có lỗi khi giải mã hoặc token không hợp lệ, trả về false
    return false;
  }
};

// giải mã token
const decodeToken = (token) => {
  return jwt.decode(token);
};

export { createToken, checkToken, decodeToken };
