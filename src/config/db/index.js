const mongoose = require("mongoose");

async function connect() {
  try {
    // await mongoose.connect("mongodb://localhost/test", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // });
    // await mongoose.connect("mongodb://lacnguyen:123456@127.0.0.1:27017/test", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // });
    await mongoose.connect("mongodb://127.0.0.1:27017/test?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=Test+Connection&3t.ssh=true&3t.sshAddress=127.0.0.1&3t.sshPort=2222&3t.sshAuthMode=password&3t.sshUser=lacnguyen&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connect Successfully!');
  } catch (error) {
    console.log('Connect Failure!');
    console.log(error);
  }
}

module.exports = { connect };
