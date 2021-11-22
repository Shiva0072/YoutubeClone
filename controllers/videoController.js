import routes from "../routes.js";
import { videos } from "../db.js";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", routes, videos });
};

export const search = (req, res) => {
  // console.log(req.query);
  const {
    query: { term: val },
  } = req;
  res.render("search", { pageTitle: "Search", val, routes, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload", routes });
export const postUpload = (req, res) => {
  const {
    body: { description, file, title },
  } = req;
  //TOFO Uplaod and save the video
  res.redirect(routes.videoDetail(5657));
};

export const editVideo = (req, res) =>
  res.render("Edit Video", { pageTitle: "EditVideo", routes });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "VideoDetails", routes });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "DeleteVideo", routes });
