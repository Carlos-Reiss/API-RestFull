const { Router } = require('express');
const data = require('../data.json');

const routes = new Router;

routes.get('/clientes', (req, res) => {
    res.json(data);
});
routes.get('/clientes/:id', (req, res) => {
    const { id } = req.params;

    const cliente = data.find((cliente) => {
        if (cliente.id == id) {
            return cliente;
        }
    });
    if (cliente == null) {
        res.status(204).json();
    } else {
        res.json(cliente);
    }
});

routes.post('/clientes', (req, res) => {
    const { name, username, email, address, company, phone, website } = req.body;
    let id = data.length + 1;
    data.push({
        id: id++,
        name,
        username,
        email,
        address,
        phone,
        website,
        company,
    });
    res.json({ name, username, email });
});

routes.put('/clientes/:id', (req, res) => {
    const { id } = req.params;

    const cliente = data.find((cliente) => {
        if (cliente.id == id) {
            return cliente;
        }
    });

    if (cliente == null) {
        res.status(204).json();
    } else {
        const { name } = req.body;
        cliente.name = name;
        res.json(cliente);
    }
});

routes.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;

    const clienteFilter = data.filter((cliente) => {
        if (cliente.id != id) {
            return cliente;
        }
    });
    res.json(clienteFilter);
});

module.exports = routes;