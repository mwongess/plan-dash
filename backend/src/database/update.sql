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
    @status VARCHAR(200),
    @project_id VARCHAR(200),
    @user_id VARCHAR(200)
AS
BEGIN 
    UPDATE projects SET status = @status WHERE project_id = @project_id AND user_id = @user_id
END

-- 
CREATE PROCEDURE ArchiveProject
    @project_id VARCHAR(200)
AS
BEGIN 
    UPDATE projects SET isArchived = 1 WHERE project_id = @project_id
END

-- 
CREATE PROCEDURE UnArchiveProject
    @project_id VARCHAR(200)
AS
BEGIN
     UPDATE projects SET isArchived = 0 WHERE project_id = @project_id
END
