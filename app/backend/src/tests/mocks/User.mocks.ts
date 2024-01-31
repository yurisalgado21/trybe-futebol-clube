const user = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

const userBody = {
    email: 'admin@admin.com',
    password: "secret_admin"
}

const invalidBody = {
    email: '',
    password: ''
}

  
const token = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3MDY3MDczMjksImV4cCI6MTcwNzMxMjEyOX0.-rd44JDrlwXOhJJ1pIeTqWtTQwUflFi-cEvYYkhLOIw"
}

export {
    user,
    token,
    userBody,
    invalidBody
}