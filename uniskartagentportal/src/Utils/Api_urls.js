const baseUrl = process.env.REACT_APP_BASE_URL
// export const URLs= {
//     login:`https://uniskart-agent.onrender.com/api/v1/login`,
//     searchApi:(quary)=>`https://uniskart-agent.onrender.com/api/v1/search-program?${quary}`
// }
export const URLs= {
    login:`http://localhost:8000/api/v1/login`,
    newStudent:`http://localhost:8000/api/v1/register-new-student`,
    searchApi:(quary)=>`http://localhost:8000/api/v1/search-program?${quary}`
}