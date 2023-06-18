DROP PROCEDURE GetUsers;
CREATE PROCEDURE GetUsers
AS
BEGIN
    SELECT *
    FROM users;
END;

-- 
DROP PROCEDURE GetProjects;

CREATE PROCEDURE GetProjects
AS
BEGIN
    SELECT *
    FROM projects;
END;

-- 
DROP PROCEDURE GetProject;

CREATE PROCEDURE GetProject
    @project_id VARCHAR(200)
AS
BEGIN
    SELECT *
    FROM projects
    WHERE project_id = @project_id;
END;

-- 
DROP PROCEDURE GetUser;

CREATE PROCEDURE GetUser
    @email VARCHAR(200)
AS
BEGIN
    SELECT *
    FROM users
    WHERE email = @email;
END;

-- 
IF OBJECT_ID('GetNotAssigned', 'P') IS NOT NULL
  DROP PROCEDURE GetNotAssigned;

CREATE PROCEDURE GetNotAssigned
AS
BEGIN
    SELECT *
    FROM users
    WHERE user_id = null;
END;
-- 
