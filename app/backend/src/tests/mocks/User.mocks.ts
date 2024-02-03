const user = {
    id: 1,
    username: 'Admin',
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
    email: 'admin@admin.com',
    password: "secret_admin"
}

const invalidBody = {
    email: '',
    password: ''
}

  
const token = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNzA2OTAxNTU2LCJleHAiOjE3MDc1MDYzNTZ9.ePQ_CmezWM3jpazGi4Xncde_5acdvhDZYlpPcQzYXEY"}

export {
    user,
    user2,
    token,
    userBody,
    invalidBody
}