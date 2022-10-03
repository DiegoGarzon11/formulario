const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Query{
  id: String
  apellidos: String
  nombres: String
  emails: String
  emailsVerified : String
  militar : String 
  temporal : String
  documentos : String
  numerosDocuementos : String
  lugaresExpedicion: String
  fechasExpedicion: String
	paises: String
	ciudades: String
	direcciones:String
	telefonos: String
	celulares: String
	namesEmergency: String
	emergencyPhones: String
	timeCreated: String
}
`);
module.exports = schema;
