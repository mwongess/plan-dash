CREATE PROCEDURE GetUsers
AS
BEGIN
    SELECT * FROM users;
END;

-- 
CREATE PROCEDURE GetProjects
AS
BEGIN
    SELECT * FROM projects;
END;

-- 
CREATE PROCEDURE GetProject
    @project_id VARCHAR(200)
AS
BEGIN
    SELECT * FROM projects WHERE project_id = @project_id;
END;

-- 
CREATE PROCEDURE GetUser
    @email VARCHAR(200)
AS
BEGIN 
    SELECT * FROM users WHERE email = @email;
END;

-- 
CREATE PROCEDURE GetNotAssigned
AS
BEGIN
    SELECT * FROM users WHERE user_id = null;
END;
-- 
