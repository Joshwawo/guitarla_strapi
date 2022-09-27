module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccp130qen0hrldbo74fg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_y7iq'),
      user: env('DATABASE_USERNAME', 'jorgais'),
      password: env('DATABASE_PASSWORD', 'Lr9wGUawHEfxaxpIMUz7dBb1HbQiGMSC'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
