const express = require ('express');
const vc = require('./controllers/visits_controller');

const app = express();
const port = 5000;

app.use(express.json());

const vet_visit  = '/api/visits';
app.post(vet_visit, vc.create);
app.get(vet_visit, vc.read);
app.put(`${vet_visit}/:id`, vc.update);
app.delete(`${vet_visit}/:id`, vc.delete);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});