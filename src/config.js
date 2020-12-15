module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
    DB_URL: process.env.DB_URL || 'postgresql://postgres@localhost/bookmarksdb',
    HOST: process.env.HOST || 'localhost',
    USER: process.env.USER || 'postgres',
    PASSWORD: process.env.PASSWORD || 'password',
    DATABASE: process.env.DATABASE || 'bookmarksdb',
    DB_PORT: process.env.DB_PORT || 5433,    
  }


  