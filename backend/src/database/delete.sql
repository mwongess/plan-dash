CREATE PROCEDURE DeleteProject
    @user_id VARCHAR(200),
    @project_id VARCHAR(200)
AS
BEGIN
    DELETE FROM projects WHERE project_id = @project_id AND user_id = @user_id
END