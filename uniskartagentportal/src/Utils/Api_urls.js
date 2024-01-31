const baseUrl = process.env.REACT_APP_BASE_URL
export const URLs= {
    login:`https://uniskart-agent.onrender.com/api/v1/auth/login`,
    searchApi:(quary)=>`https://uniskart-agent.onrender.com/api/v1/auth/search-program?${quary}`
}