import bcrypt from "bcrypt";
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashpd = await bcrypt.hash(password, saltRounds);
    return hashpd
  } catch (error) {
    console.log(error);
  }
};

export const comparepassword=async(password,hashpd)=>{
    return bcrypt.compare(password,hashpd)
}
