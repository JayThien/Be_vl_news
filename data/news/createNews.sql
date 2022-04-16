INSERT INTO [dbo].[News]
(
    [createdWhen],
    [createdBy],
    [modifiedWhen],
    [modifiedBy],
    [title],
    [poster],
    [shortDescription]
)
VALUES
(   GETDATE(), -- CreatedWhen - datetime
    0,         -- CreatedBy - int
    GETDATE(), -- ModifiedWhen - datetime
    0,         -- ModifiedBy - int
    @title,       -- Title - nvarchar(200)
    @poster,       -- Poster - nvarchar(max)
    @shortDescription        -- ShortDescription - nvarchar(max)
    )

SELECT SCOPE_IDENTITY() AS id