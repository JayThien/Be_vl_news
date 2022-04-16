UPDATE [dbo].[News]
SET [title]=@title,
    [poster]=@poster,
    [shortDescription]=@shortDescription,
    [modifiedWhen]=GETDATE()
WHERE [id]=@newsId

SELECT *
  FROM [dbo].[News]
  WHERE [id]=@newsId