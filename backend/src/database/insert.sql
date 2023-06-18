-- 
DROP PROCEDURE NewUser

CREATE PROCEDURE NewUser
    @user_id VARCHAR(200),
    @name VARCHAR(200),
    @email VARCHAR(200),
    @password VARCHAR(200)
AS
BEGIN
    INSERT INTO users
        (user_id, name, email, password)
    VALUES
        (@user_id, @name, @email, @password);
END



-- 
DROP PROCEDURE NewProject

CREATE PROCEDURE NewProject
    @project_id VARCHAR(200),
    @title VARCHAR(50),
    @scope VARCHAR(200),
    @description VARCHAR(200)
AS
BEGIN
    INSERT INTO projects
        (project_id, title, scope, description)
    VALUES
        (@project_id, @title, @scope, @description);
END;