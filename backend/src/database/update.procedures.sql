-- 
CREATE PROCEDURE AssignProject
    @userId VARCHAR(200),
    @projectId VARCHAR(200),
AS
BEGIN
    UPDATE projects
    SET userId = @userId,status = 'pending'
    WHERE projectId = @projectId;
END