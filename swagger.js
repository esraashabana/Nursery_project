const options = {
        definition: {
          openapi: '3.0.0',
          info: {
            title: 'Your API Name',
            description: 'Description of your API',
            version: '1.0.0',
          },
        },
        apis: ['./Routes/*.js'], // Specify the path to your route files
      };
      const specs = swaggerJsdoc(options);
      