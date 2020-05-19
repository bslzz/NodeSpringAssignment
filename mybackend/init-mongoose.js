module.exports = (mongoose) => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('connected', () => {
    console.log('Connected to DB');
  });
  db.on('error', (err) => {
    console.log('Problem connecting to DB ' + err);
  });
};
