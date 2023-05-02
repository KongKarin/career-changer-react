import express from "express";
const webServer = express();
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

// code here.
const company = [{
  companyID: "comp-1", 
  name: "mock user 1", 
  tax: "Tax-000", 
  employees: []
  },
];

webServer.get('/', (request, response) => {
  response.send("Hello World!");
});

webServer.get('/company', (request, response) => {
  response.json(company);
});

webServer.post('/company', (request, response) => {
  const companyID = `comp-${company.length + 1}`;
  const name = request.body.name;
  const taxId = request.body.taxId;
  const employees = [];
  const newUser = { companyID: companyID, name: name, taxId: taxId, employees: employees };
  company.push(newUser);

  response.send("Created Company Success");
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});





