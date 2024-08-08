
import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name : Yup.string().min(3).max(25).required("Please enter your name"),
  email : Yup.string().email().matches("regex@gmail.com","Email must be regex@gmail.com").required("Please enter your email"),
  password : Yup.string().min(6).matches("rishiME@199","Password must be start from r__M_9").required("Please enter your password"),
  confirm_password : Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
});
