import mongoose, { mongo} from "mongoose";


async function conectaNaDatabase() {
  mongoose.connect("mongodb+srv://admin:<>@cluster0.mpxgaz2.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

  return mongoose.connection;
};

export default conectaNaDatabase;
