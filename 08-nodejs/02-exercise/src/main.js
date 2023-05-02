import express from "express";
const webServer = express();
const port = 3001;
const ipAddress = "127.0.0.1";

// code down below

webServer.get("/", (req, res) => {
    res.send("This is Root Route")
});

webServer.get("/news", (req, res) => {
    const all = [];
    const news1 = { name: "news 1", detail: "detail 1" };
    const news2 = { name: "news 2", detail: "detail 2" };
    const news3 = { name: "news 3", detail: "detail 3" };

    all.push(news1)
    all.push(news2)
    all.push(news3)

    res.json(all)
});

webServer.get("/users", (req, res) => {
    const users = [
        { userId: "mock-id-1" },
        { name: "mock-id-2" },
        { name: "mock-id-3" },
      ];
    res.json( users)
});

webServer.get("/me", (req, res) => {
    const me = {
        name: "mock-name",
        role: "user",
        picture: "https://shorturl.at/qtFJM"
      };
    res.json(me)
});

webServer.get("/health-check", (req, res) => {
    res.send("Server is fine!")
});


webServer.listen(port, ipAddress, () => {
    console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
    console.log(`Address: http://${ipAddress}:${port}`);
  });