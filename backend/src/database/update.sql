CREATE PROCEDURE AssignProject
    @user_id VARCHAR(200),
    @project_id VARCHAR(200)
AS
BEGIN
    UPDATE projects
    SET user_id = @user_id
    WHERE project_id = @project_id;
END

-- 
IF OBJECT_ID('UpdateStatus', 'P') IS NOT NULL
  DROP PROCEDURE UpdateStatus;

CREATE PROCEDURE UpdateStatus
    @status VARCHAR(200)
AS
BEGIN 
    UPDATE projects SET status = @status
END