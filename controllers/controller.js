import {
  addUser,
  addPost,
  addComment,
  getUsers,
  getPageCnt,
  getPage,
  getComments,
  getPost,
  getUserData,
  getUserPosts,
  getSearch,
  getSearchCount,
  updatePost,
  deletePost,
  login,
} from "../models/models.js";

export const req_addUser = (req, res) => {
  const data = req.body;
  addUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_addPost = (req, res) => {
  const data = req.body;
  addPost(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_addComment = (req, res) => {
  const data = req.body;
  addComment(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_getUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_getPageCnt = (req, res) => {
  getPageCnt((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_getPage = (req, res) => {
  const page = req.params.page;
  getPage(page, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_getComments = (req, res) => {
  const id = req.params.id;
  getComments(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_getPost = (req, res) => {
  const id = req.params.id;
  getPost(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_getUserData = (req, res) => {
  const id = req.params.id;
  getUserData(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_getUserPosts = (req, res) => {
  const id = req.params.id;
  getUserPosts(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_getSearchCount = (req, res) => {
  const toSearch = req.params.toSearch;
  getSearchCount(toSearch, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_getSearch = (req, res) => {
  const page = req.params.page;
  const toSearch = req.params.toSearch;
  getSearch(page, toSearch, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_updatePost = (req, res) => {
  const data = req.body
  const id = req.params.id;
  updatePost(id, data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_deletePost = (req, res) => {
  const id = req.params.id;
  deletePost(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const req_login = (req, res) => {
  const username = req.params.username;
  login(username, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
