import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

const company = [{
  companyID: "comp-0",
  name: "mock name",
  taxId: "taxId",
  employees: [],
},];

webServer.get("/", (request, response) => {
  response.send("Hello World");
});

// code down below.

webServer.get('/company', (request, response) => {
  response.json(company);
});

webServer.post('/company', (request, response) => {
  const companyID = `comp-${company.length + 1}`;
  const name = request.body.name;
  const taxId = request.body.taxId;
  const employees = [];
  const newCompany = { companyID: companyID, name: name, taxId: taxId, employees: employees };
  company.push(newCompany);

  response.send("Created Company Success");
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});






