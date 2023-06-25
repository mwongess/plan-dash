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
    @user_id VARCHAR(200),
    @project_id VARCHAR(200),
    @title VARCHAR(50),
    @platform VARCHAR(200),
    @scope VARCHAR(200),
    @description VARCHAR(200)
AS
BEGIN
    INSERT INTO projects
        (project_id, title,platform, scope, description,user_id)
    VALUES
        (@project_id, @title,@platform, @scope, @description, @user_id);
END;