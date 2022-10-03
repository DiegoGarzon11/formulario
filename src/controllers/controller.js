const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');

const datos = path.resolve(__dirname, '../data/data.json');
const datosJson = JSON.parse(fs.readFileSync(datos, 'utf-8'));
const generarId = () => {
	let id = datosJson.length;
	id++;
	return id;
};
const controller = {
	home: (req, res) => {
		return res.sendFile(path.join(__dirname, '../views/home.html'));
	},
	add: (req, res) => {
		const d = req.body;

		for (let i of datosJson) {
			if (i.email === d.email) {
				return res.status(400).send(`<h1>por seguridad de nuestros usuarios debe volver a completar el formulario</h1>`);
			}
		}

		const fecha = new Date();
		const addUser = {
			id: generarId(),
			apellido: d.apellido,
			nombre: d.nombre,
			contraseña: bcryptjs.hashSync(d.contraseña, 10),
			email: d.email,
			emailVerified: d.emailVerified,
			militar: d.militar,
			temporal: !d.temporal ? 'no es militar' : d.temporal,
			documento: d.tipoDocumento,
			numeroDocumento: d.numeroDocumento,
			lugarExpedicion: d.lugarExpedicion,
			fechaExpedicion: d.fechaExpedicion,
			pais: d.pais,
			ciudad: d.ciudad,
			direccion: d.direccion,
			telefono: d.telefono,
			celular: d.celular,
			nameEmergency: d.emergencyName,
			emergencyPhone: d.emergencyPhone,
			timeCreated: `${fecha.getFullYear()}, ${fecha.getMonth() + 1}, ${fecha.getDate()}`,
		};
		datosJson.push(addUser);
		fs.writeFileSync(datos, JSON.stringify(datosJson, null, ' '));
		res.redirect('/');
	},
	api: (req, res) => {
		if (datosJson.length === 0) {
			res.send('no existen usuarios en nuestra base de datos');
		}
		let sin = datosJson.filter((e) => {
			return delete e.contraseña;
		});
		res.json(sin);
	},
	porId: (req, res) => {
		for (let i of datosJson) {
			if (i.id == req.params.id) {
				return res.json(i);
			} else if (req.params.id != i.id) {
				return res.sendStatus(404);
			}
		}
	},
};
module.exports = controller;
