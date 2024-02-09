const baseUrl = process.env.REACT_APP_BASE_URL
export const URLs= {
    login:`https://uniskart-agent.onrender.com/api/v1/login`,
    searchApi:(quary)=>`https://uniskart-agent.onrender.com/api/v1/search-program?${quary}`,
    newStudent:`https://uniskart-agent.onrender.com/api/v1/register-new-student`,
    searchApi:(quary)=>`https://uniskart-agent.onrender.com/api/v1/search-program?${quary}`,
    getAllStudent:`https://uniskart-agent.onrender.com/api/v1/students`,
    getState: (countryName) => `https://uniskart-agent.onrender.com/api/v1/getstates/${encodeURIComponent(countryName)}`,
    saveStudentInfo: `http://localhost:8000/api/v1/student-info`,
    getStudentInfobyId: (id)=>`https://uniskart-agent.onrender.com/api/v1/get-student-info-by-id/${id}`,
    updateStudentinfo: (id)=>`https://uniskart-agent.onrender.com/api/v1/student-info-update/${id}`
}
// export const URLs= {
//     login:`http://localhost:8000/api/v1/login`,
//     newStudent:`http://localhost:8000/api/v1/register-new-student`,
//     searchApi:(quary)=>`http://localhost:8000/api/v1/search-program?${quary}`,
//     getAllStudent:`http://localhost:8000/api/v1/students`,
//     getState: (countryName) => `http://localhost:8000/api/v1/getstates/${encodeURIComponent(countryName)}`,
//     saveStudentInfo: `http://localhost:8000/api/v1/student-info`,
//     getStudentInfobyId: (id)=>`http://localhost:8000/api/v1/get-student-info-by-id/${id}`,
//     updateStudentinfo: (id)=>`http://localhost:8000/api/v1/student-info-update/${id}`
// }