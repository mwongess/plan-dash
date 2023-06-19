CREATE PROCEDURE DeleteProject
    @project_id VARCHAR(200)
AS
BEGIN
    DELETE FROM projects WHERE project_id = @project_id
END