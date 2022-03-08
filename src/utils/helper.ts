const dns = require("dns").promises;

export const hasInternet = async () => {
  try {
    await dns.lookup("google.com");
    return true;
  } catch (e) {
    return false;
  }
};
