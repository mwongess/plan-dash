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
CREATE PROCEDURE GetProjects
    @projectId VARCHAR(200)
AS
BEGIN
    SELECT * FROM projects WHERE projectId = @projectId;
END;

-- 
CREATE PROCEDURE GetUsers
    @userId VARCHAR(200)
AS
BEGIN 
    SELECT * FROM users WHERE userId = @userId;
END;

-- 
CREATE PROCEDURE GetNotAssigned
AS
BEGIN
    SELECT * FROM users WHERE userId = null;
END;
-- 
