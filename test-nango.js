import dotenv from 'dotenv'; // Carregando variáveis de ambiente
import fetch from 'node-fetch'; // Importando biblioteca para chamadas HTTP
dotenv.config() // Inicializando dotenv
dotenv.config({ path: './.env' })

console.log('NANGO_API_URL:', process.env.NANGO_API_URL)
console.log('NANGO_SECRET_KEY:', process.env.NANGO_SECRET_KEY)

const testNango = async () => {
  const NANGO_API_URL = process.env.NANGO_API_URL || 'https://api.nango.dev/connection/status';
  const NANGO_SECRET_KEY = process.env.NANGO_SECRET_KEY;

  try {
    console.log('Testando conexão com o Nango...');
    console.log('URL:', NANGO_API_URL);
    console.log('Chave:', NANGO_SECRET_KEY);

    const response = await fetch(NANGO_API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${NANGO_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('Conexão com o Nango bem-sucedida!', data);
  } catch (error) {
    console.error('Erro ao testar a conexão:', error);
  }
};

testNango();
