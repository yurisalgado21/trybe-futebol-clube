const user = {
    id: 1,
    userName: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

const user2 = {
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

const userBody = {
    email: 'user@user.com',
    password: "secret_admin"
}

const invalidBody = {
    email: '',
    password: ''
}

  
const token = {
    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNzA3MDE2ODE4LCJleHAiOjE3MDc2MjE2MTh9.EcZ1a4csDayhRt6VYB1Y7gBEn_3P8YDUTb1RtobfBkI"
  }

export {
    user,
    user2,
    token,
    userBody,
    invalidBody
}