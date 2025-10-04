import http from 'k6/http'

export const options = {
    vus: 10,
    duration: '3s'
}

export default function() {
    http.get("http://localhost:3000/count")
}