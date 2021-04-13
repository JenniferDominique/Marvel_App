import React from 'react';
import md5 from 'md5';

class MarvelDataCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Configuração de conexao com as chaves e link de acesso (link ainda estatico)
  componentDidMount() {
    let baseUrl = 'https://gateway.marvel.com/v1/public/characters';
    const publicKey = '9f23d1a8ed83a6a8f819ce9cfe38da1a';
    const privateKey = '3ecd0330ead9e97da5e25276ad6c7feff584caff';
    const ts = 1;
    const stringToHash = ts + privateKey + publicKey;
    const hash = md5(stringToHash);
    const url = baseUrl + '&ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;

    fetch(url).then((response) => {
      console.log(response);
    });
  }
  render() {

    // testando retorno da api
  }
}
