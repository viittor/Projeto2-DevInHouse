const SERVER = 
window.location.hostname === "localhost" || 
window.location.hostname === "127.0.0.1"
? "https://localhost:3333"
: "https://sgip2dih.herokuapp.com"
export default SERVER;