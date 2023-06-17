-- 
CREATE PROCEDURE AssignProject
    @user_id VARCHAR(200),
    @project_id VARCHAR(200),
AS
BEGIN
    UPDATE projects
    SET user_id = @user_id
    WHERE project_id = @project_id;
END