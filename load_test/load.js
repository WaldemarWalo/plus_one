import http from 'k6/http'

export const options = {
    vus: 10,
    iterations: 1000000
}

export default function() {
    http.get("http://localhost:3000/count")
}
