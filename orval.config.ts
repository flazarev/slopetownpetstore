module.exports = {
    'petstore-file': {
      mode: 'split',
      input: './swagger.yaml',
      output: {
        target: 'src/api/petstore.ts',
        schemas: 'src/api/model',
        client: 'react-query',
        mock: true,
      }
    },
  };