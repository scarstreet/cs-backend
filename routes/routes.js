import express from 'express'

import {
  req_addComment,
  req_addPost,
  req_addUser,
  req_deletePost,
  req_getComments,
  req_getPage,
  req_getPageCnt,
  req_getPost,
  req_getUserData,
  req_getUserPosts,
  req_getUsers,
  req_login,
  req_getSearch,
  req_getSearchCount,
  req_updatePost,
} from "../controllers/controller.js";

const router = express.Router();

router.get('/posts/:id', req_getPost)
router.post('/posts', req_addPost)
router.put("/posts/:id", req_updatePost);
router.delete('/posts/:id', req_deletePost)

router.get('/posts/p/:page', req_getPage)
router.get('/posts/search/:toSearch/:page', req_getSearch);
router.get("/posts/totalpost/s/:toSearch", req_getSearchCount);
router.get('/posts/totalpost/t', req_getPageCnt)
router.get('/posts/user/:id', req_getUserPosts)

router.post('/comments', req_addComment)
router.get('/comments/:id', req_getComments)

router.get('/users/login/:username', req_login)
router.post('/users', req_addUser)
router.get('/users', req_getUsers)
router.get('/users/:id', req_getUserData)


export default router