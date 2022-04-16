INSERT INTO [dbo].[Users]
(
    [CreatedWhen],
    [CreatedBy],
    [ModifiedWhen],
    [ModifiedBy],
    [Name],
    [UserName],
    [PasswordHash]
)
VALUES
(   GETDATE(), -- CreatedWhen - datetime
    0,         -- CreatedBy - int
    GETDATE(), -- ModifiedWhen - datetime
    0,         -- ModifiedBy - int
    @name,       -- Name - nvarchar(200)
    @userName,       -- UserName - nvarchar(30)
    @passwordHash       -- PasswordHash - nvarchar(max)
    )

SELECT SCOPE_IDENTITY() AS userId