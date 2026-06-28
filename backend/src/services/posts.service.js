const pool = require('../config/database');

const getAllPosts = async () => {
  const result = await pool.query(`
    SELECT
      p.id,
      p.title,
      p.content,
      p.published,
      p.created_at,
      a.id AS author_id,
      a.name,
      a.email
    FROM posts p
    INNER JOIN authors a ON p.author_id = a.id
    ORDER BY p.id
  `);
  
  return result.rows;
};

const getPostById = async (id) => {
  const result = await pool.query(`
    SELECT
      p.*,
      a.name,
      a.email
    FROM posts p
    JOIN authors a ON p.author_id = a.id
    WHERE p.id = $1
  `, [id]);
  
  return result.rows[0];
};

const getPostsByAuthor = async (authorId) => {
  const result = await pool.query(`
    SELECT *
    FROM posts
    WHERE author_id = $1
    ORDER BY id
  `, [authorId]);
  
  return result.rows;
};

const createPost = async (title, content, author_id, published) => {
  const result = await pool.query(`
    INSERT INTO posts (
      title,
      content,
      author_id,
      published
    )
    VALUES (
      $1,
      $2,
      $3,
      $4
    )
    RETURNING *
  `, [title, content, author_id, published]);
  
  return result.rows[0];
};

const updatePost = async (id, title, content, author_id, published) => {
  const result = await pool.query(`
    UPDATE posts
    SET
      title = $1,
      content = $2,
      author_id = $3,
      published = $4
    WHERE id = $5
    RETURNING *
  `, [title, content, author_id, published, id]);
  
  return result.rows[0];
};

const deletePost = async (id) => {
  const result = await pool.query(`
    DELETE FROM posts
    WHERE id = $1
    RETURNING *
  `, [id]);
  
  return result.rows[0];
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost
};