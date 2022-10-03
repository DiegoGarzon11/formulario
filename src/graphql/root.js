const datos = require('../data/data.json');

const root = {
	id: (req, res) => {
		return datos.map((e) => e.id).toString()
	},
	apellidos: () => {
		return datos.map((e) => e.apellido).toString();
	},
	nombres: () => {
		return datos.map((e) => e.nombre).toString();
	},
	emails: () => {
		return datos.map((e) => e.email).toString();
	},
	emailsVerified: () => {
		return datos.map((e) => e.emailVerified).toString();
	},
	militar: () => {
		return datos.map((e) => e.militar).toString();
	},
	temporal: () => {
		return datos.map((e) => e.temporal).toString();
	},
	documentos: () => {
		return datos.map((e) => e.documento).toString();
	},
	numerorosDocuementos: () => {
		return datos.map((e) => e.numeroDocumento).toString();
	},
	lugaresExpedicion: () => {
		return datos.map((e) => e.lugarExpedicion).toString();
	},
	fechasExpedicion: () => {
		return datos.map((e) => e.fechaExpedicion).toString();
	},
	paises: () => {
		return datos.map((e) => e.pais).toString();
	},
	ciudades: () => {
		return datos.map((e) => e.ciudad).toString();
	},
	direcciones: () => {
		return datos.map((e) => e.direccion).toString();
	},
	telefonos: () => {
		return datos.map((e) => e.telefono).toString();
	},
	celulares: () => {
		return datos.map((e) => e.celular).toString();
	},
	namesEmergency: () => {
		return datos.map((e) => e.nameEmergency).toString();
	},
	emergencyPhones: () => {
		return datos.map((e) => e.emergencyPhon).toString();
	},
	timeCreated: () => {
		return datos.map((e) => e.timeCreated).toString();
	},
};
module.exports = root;
