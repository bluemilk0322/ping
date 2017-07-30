var p = new Ping();
    p.ping("http://google.com", function(err, data) {
    // Also display error if err is returned.
    if (err) {
    console.log("error loading resource")
    data = data + " " + err;
    }
    document.getElementById("ping-google").innerHTML = data;
    });