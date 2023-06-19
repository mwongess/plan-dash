CREATE TABLE users
(
    user_id VARCHAR(200) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE,
    password VARCHAR(200),
    role VARCHAR(50) DEFAULT 'user'
);

CREATE TABLE projects
(
    project_id VARCHAR(200) PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(200),
    platform VARCHAR(200),
    scope VARCHAR(200),
    user_id VARCHAR(200) DEFAULT null,
    status VARCHAR(200) DEFAULT 'new',
    isArchived BIT DEFAULT 0,
    isFav BIT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);