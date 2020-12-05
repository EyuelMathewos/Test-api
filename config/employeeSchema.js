const employeeSchema = new mongoose.Schema({
    name: String,
    dateOfBirth: date,
    gender:String,
    salary: BigInt
  });