const fetch = require('cross-fetch');

const exchangeCodeForToken = async (code) => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.client_secret

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({ client_id, client_secret, code}),
  });
  // TODO: Implement me!
};

const getGithubProfile = async (token) => {
  // TODO: Implement me!
};

module.exports = { exchangeCodeForToken, getGithubProfile };
