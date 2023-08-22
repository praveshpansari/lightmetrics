# lightmetrics-task

Comment Structure:

```
{
  id:Number,
  name:String,
  comment:String,
  parentId:Number,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

API Endpoints:

- `GET /api/comment` - Get all comments
- `POST /api/comment` - Create a comment with Payload : `{name:String,comment:String,parent?:Number}`
- `GET /api/comment/id` - Get the comment and its replies with id
- `PUT /api/comment/id` - Update the comment with id with the Payload : `{name?:String, comment?:String, parent?:Number}`
- `DELETE /api/comment/id` - Delete the comment with id and all child comments  

<br>

> Postgres is used for DB.
> 
> Deployed using Docker.
> 
> Sequelize ORM is used.
> 
> Comments have a parentId, meaning a comment can have multiple replies. When a parent comment is deleted all its child are deleted too.
