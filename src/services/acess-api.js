import request from 'request';

export default function get() {
  const projectOptions = {
    url: 'https://legend-of-github-api.herokuapp.com/repository/format?username=mikemajesty&stars=10&forks=5',
    headers: { }
  };
  return new Promise((resolve, reject) => {
    request(projectOptions, (err, httpResponse, body) => {
      if (err || (httpResponse.statusCode < 200 || httpResponse.statusCode >= 399)) {
        return reject(err || (httpResponse ? httpResponse.statusMessage || httpResponse.body : 'Internal Server Error'));
      }
      body = JSON.parse(body);
      return resolve(body);
    });
  }).catch((error) => Promise.reject(error));
};