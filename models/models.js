import db from "../config/database.js"

// create user
export const addUser = (data, result) => {
  console.log(data);
  db.query(`INSERT INTO users (username,password,is_admin) VALUES ("${data.username}","${data.password}",FALSE);`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results)
    }
  })
}

// create post
export const addPost = (data, result) => {
  db.query(`INSERT INTO posts (user_id,time,title,content) VALUES (${data.u_id},CURRENT_TIMESTAMP(),"${data.title}","${data.content}");`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results)
    }
  })
}

// create comment
export const addComment = (data,result) => {
  db.query(`INSERT INTO comments (user_id,post_id,time,content) VALUES (${data.u_id},${data.p_id},CURRENT_TIMESTAMP(),"${data.content}");`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results)
    }
  })
}

export const getUsers = (result) => {
  db.query(`SELECT * FROM users;`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results)
    }
  })
}

// number of pages
export const getPageCnt = (result) => {
  db.query(`SELECT COUNT(*) FROM posts;`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results[0])
    }
  })
}

// get page
export const getPage = (page, result) => {
  var idx = (page-1)*10
  db.query(
    `SELECT * FROM posts_info ORDER BY id DESC LIMIT ${idx},10;`,
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
}

// get comments
export const getComments = (p_id,result) => {
  db.query(`SELECT * FROM comments WHERE comments.post_id=${p_id};`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results)
    }
  })
}

// get post
export const getPost = (p_id,result) => {
  db.query(`SELECT * FROM posts_info WHERE posts_info.id=${p_id};`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results[0])
    }
  })
}

// get user data
export const getUserData = (u_id, result) => {
  db.query(`SELECT * FROM users WHERE users.id=${u_id};`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results[0])
    }
  })
}

// get user posts
export const getUserPosts = (u_id,result) => {
  db.query(`SELECT * FROM posts_info WHERE posts_info.user_id=${u_id};`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results)
    }
  })
}

export const getSearchCount = (toSearch, result) => {
  db.query(
    `SELECT COUNT(*) FROM posts_info WHERE posts_info.title LIKE '%${toSearch}%' OR posts_info.content LIKE '%${toSearch}%';`,
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// get search query
export const getSearch = (page, toSearch, result) => {
  var idx = (page - 1) * 10;
  db.query(
    `SELECT * FROM posts_info WHERE posts_info.title LIKE '%${toSearch}%' OR posts_info.content LIKE '%${toSearch}%' ORDER BY id DESC LIMIT ${idx},10;`,
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
}

// update post
export const updatePost = (id, data, result) => {
  db.query(
    `UPDATE posts SET title="${data.title}",content="${data.content}" WHERE id=${id}`,
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
}

// delete post
export const deletePost = (p_id,result) => {
  db.query(`DELETE FROM posts WHERE posts.id=${p_id};`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results)
    }
  })
}

// login
export const login = (username,result) => {
  db.query(`SELECT * FROM users WHERE users.username="${username}";`, (err, results) => {
    if (err) {
      console.log(err);
      result(err,null)
    } else {
      result(null, results[0])
    }
  })
}