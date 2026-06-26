-- =====================================
-- LIMPIEZA
-- =====================================



-- =====================================
-- AUTHORS
-- =====================================

CREATE TABLE authors (


id SERIAL PRIMARY KEY,

name VARCHAR(100)
NOT NULL
CHECK (
    LENGTH(TRIM(name)) > 0
),

email VARCHAR(150)
NOT NULL
UNIQUE,

bio TEXT,

created_at TIMESTAMPTZ
DEFAULT NOW()


);

-- =====================================
-- POSTS
-- =====================================

CREATE TABLE posts (


id SERIAL PRIMARY KEY,

title VARCHAR(200)
NOT NULL
CHECK (
    LENGTH(TRIM(title)) > 0
),

content TEXT
NOT NULL
CHECK (
    LENGTH(TRIM(content)) > 0
),

author_id INTEGER
NOT NULL,

published BOOLEAN
DEFAULT FALSE,

created_at TIMESTAMPTZ
DEFAULT NOW(),

CONSTRAINT fk_posts_author
FOREIGN KEY (author_id)
REFERENCES authors(id)
ON DELETE CASCADE


);

-- =====================================
-- COMMENTS (EXTRA)
-- =====================================

CREATE TABLE comments (


id SERIAL PRIMARY KEY,

content TEXT
NOT NULL
CHECK (
    LENGTH(TRIM(content)) > 0
),

author_id INTEGER
NOT NULL,

post_id INTEGER
NOT NULL,

created_at TIMESTAMPTZ
DEFAULT NOW(),

CONSTRAINT fk_comments_author
FOREIGN KEY (author_id)
REFERENCES authors(id)
ON DELETE CASCADE,

CONSTRAINT fk_comments_post
FOREIGN KEY (post_id)
REFERENCES posts(id)
ON DELETE CASCADE


);

-- =====================================
-- INDEXES
-- =====================================

CREATE INDEX idx_authors_email
ON authors(email);

CREATE INDEX idx_posts_author
ON posts(author_id);

CREATE INDEX idx_comments_author
ON comments(author_id);

CREATE INDEX idx_comments_post
ON comments(post_id);
