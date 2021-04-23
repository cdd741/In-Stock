export const API_URL = (endpoint, endpointMOD) => {
    return `http://localhost:8080/${endpoint}${endpointMOD ? `/${endpointMOD}` : ''};`
}