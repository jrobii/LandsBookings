module.exports = {
    //Function for setting the server to listen on port 3000.
    listen: function(app, PORT) {
        app.listen(PORT, () => {
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            console.log("Server has been started at port " + PORT + " at " + h + ":" + m);
        });
    }
}