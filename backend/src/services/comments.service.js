const pool = require('../config/database');

const getComments = async () => {
  const result = await pool.query(`
    SELECT
      c.id,
      c.content,
      c.created_at,
      a.id AS author_id,
      a.name AS author_name,
      p.id AS post_id,
      p.title
    FROM comments c
    JOIN authors a ON c.author_id = a.id
    JOIN posts p ON c.post_id = p.id
    ORDER BY c.id
  `);
  
  return result.rows;
};

const getCommentsPost = async (postId) => {
  const result = await pool.query(`
    SELECT *
    FROM comments
    WHERE post_id = $1
    ORDER BY id
  `, [postId]);
  
  return result.rows;
};

const createComment = async (content, author_id, post_id) => {
  const result = await pool.query(`
    INSERT INTO comments (
      content,
      author_id,
      post_id
    )
    VALUES (
      $1,
      $2,
      $3
    )
    RETURNING *
  `, [content, author_id, post_id]);
  
  return result.rows[0];
};

const deleteComment = async (id) => {
  const result = await pool.query(`
    DELETE FROM comments
    WHERE id = $1
    RETURNING *
  `, [id]);
  
  return result.rows[0];
};

module.exports = {
  getComments,
  getCommentsPost,
  createComment,
  deleteComment
};