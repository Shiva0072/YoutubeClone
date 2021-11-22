import routes from "../routes.js";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join", routes });
};
export const postJoin = (req, res) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join", routes });
  } else {
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "login", routes });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};
export const editProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit Profile", routes });
};
export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail ", routes });
};
export const changePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password", routes });
};
