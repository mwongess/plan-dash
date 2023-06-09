-- 
CREATE PROCEDURE NewUser 
    @userId VARCHAR(200),
    @name VARCHAR(200),
    @email VARCHAR(200),
    @email VARCHAR(200),
    @password VARCHAR(200),
    @confirmPassword VARCHAR(200)
AS
BEGIN
    INSERT INTO users (userId, name, email, password, confirmPassword)
    VALUES (@userId, @name, @email, @password, @confirmPassword);
END

-- 
CREATE PROCEDURE NewProject
    @projectId VARCHAR(200),
    @title VARCHAR(200),
    @scope VARCHAR(200),
    @description VARCHAR(200),
AS
BEGIN
    INSERT INTO projects (projectId, title, scope, description)
    VALUES (@projectId, @title, @scope, @description);
END;