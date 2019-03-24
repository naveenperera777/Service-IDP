const express = require('express');
const router = express.Router();
// var list = new Array();

let Access_Token = eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJLLW5Nd0d5YS1OTTYzYzhqQ213b0l1enBrQ1Z5SXNzd1dHaEZlbWZnMFZzIn0.eyJqdGkiOiI4M2NhMTQ3MS1mMGE3LTQ0ZGUtOWI3Ni02OGI2OWU4M2VhNWUiLCJleHAiOjE1NTM0NDM5NjQsIm5iZiI6MCwiaWF0IjoxNTUzNDA5MzE0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvaXNhbSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI3ZWNhZTRmMS01MGY2LTRjZjgtODk4OS1mZTY5NTk0NTlmY2IiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJyZWFsbS1tYW5hZ2VtZW50IiwiYXV0aF90aW1lIjoxNTUzNDA3OTY0LCJzZXNzaW9uX3N0YXRlIjoiZjBkZDE4OWItZWI0YS00ZjNhLWIwMjYtMDA2OTZiOGE5YzBiIiwiYWNyIjoiMCIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsInZpZXctcmVhbG0iLCJtYW5hZ2UtaWRlbnRpdHktcHJvdmlkZXJzIiwiaW1wZXJzb25hdGlvbiIsInJlYWxtLWFkbWluIiwiY3JlYXRlLWNsaWVudCIsIm1hbmFnZS11c2VycyIsInF1ZXJ5LXJlYWxtcyIsInZpZXctYXV0aG9yaXphdGlvbiIsInF1ZXJ5LWNsaWVudHMiLCJxdWVyeS11c2VycyIsIm1hbmFnZS1ldmVudHMiLCJtYW5hZ2UtcmVhbG0iLCJ2aWV3LWV2ZW50cyIsInZpZXctdXNlcnMiLCJ2aWV3LWNsaWVudHMiLCJtYW5hZ2UtYXV0aG9yaXphdGlvbiIsIm1hbmFnZS1jbGllbnRzIiwicXVlcnktZ3JvdXBzIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIG9mZmxpbmVfYWNjZXNzIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJpc2FtMSBvbmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJpc2FtMSIsImdpdmVuX25hbWUiOiJpc2FtMSIsImZhbWlseV9uYW1lIjoib25lIiwiZW1haWwiOiJpc2FtMUBuZGIubGsifQ.MifFZBHTwKEsYzdDcSJfOP1nwXPRZwpbxe3XxwPB39Dpf9qLXM_zWsVwfZjNQ61cHyk1nA1lPy87UpocpLvGFowgsRdfL8XE6B1ESCGsLBHV9qGlCfRkKBedC9qwj4rer18NYibYVs0wlfmCFJrszkvrPOVQG4ZUpdXUuKRihaSajeP7Vodc4L9fjqM925vsxI8gSiE3BPj9MbAkb7swduigIFKNrbC-X-GJ9xQgYOEXZ6_nsJGdg2lJtm7AwiN4iSQ0rDUP2gw8uZlizpphy23Z0RWQueQdMF-CW2xt0RwPJsiXzJWXVIK0nU3jfope2m0VisHPoEL0o34r4Sd_XQ;


router.get("/users", function(req, res ,next){
    console.log(list)
    res.send({
        type: 'GET'
    });

});

router.get("/users",function(req,res,next){
    axios.get("http://localhost:8080/auth/admin/realms/isam/users",{
        headers: {"Authorization" : `Bearer `}
    })
})









router.post("/users", function(req, res, next){
    list.push(req.body.name);
    console.log(list);
    res.send({
        list
    });
    });

router.put("/users/:id", function(req, res){
    res.send({
        type: 'PUT'
    });

});

router.delete("/users/:id", function(req, res){
    res.send({
        type: 'DELETE'
    });

});

module.exports = router;
