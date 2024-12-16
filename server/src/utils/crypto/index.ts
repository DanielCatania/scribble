import crypto from "crypto";

function generateSalt() {
  const salt = new Uint8Array(16);
  crypto.getRandomValues(salt);
  return btoa(String.fromCharCode(...salt));
}

function createHash(mainInfo: string, salt: string = "") {
  const hash = crypto
    .createHash("sha256")
    .update(mainInfo)
    .update(salt)
    .digest("hex");

  return hash;
}

export { createHash, generateSalt };
