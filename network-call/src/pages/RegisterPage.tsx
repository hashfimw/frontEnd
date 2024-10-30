import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import axios from "../helpers/axios";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(3, "password must be 3 characters at minimun")
    .required("password is required"),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
}

function RegisterPage() {
  const navigate = useNavigate();
  const initialValue: FormValues = { username: "", email: "", password: "" };
  const handleAdd = async (user: FormValues) => {
    try {
      await axios.post("/users", user);
      alert("user berhasil ditambahkan!");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-items-center justify-center py-20">
      <div>
        <h1 className="text-center text-2xl font-bold py-4">Register Page</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            handleAdd(values);
            action.resetForm();
          }}
        >
          {(props: FormikProps<FormValues>) => {
            const { handleChange, values, touched, errors } = props;
            return (
              <Form className="flex flex-col gap-2 min-w-[400px] ">
                <div className="mb-2">
                  <label htmlFor="username" className="flex">
                    Username :
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="GoodDay"
                    onChange={handleChange}
                    value={values.username}
                    className="border rounded-md bg-slate-200 min-w-[400px] text-center"
                  />
                  {touched.username && errors.username ? (
                    <div className="font-extraligh text-sm text-red-500">
                      {errors.username}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="flex">
                    Email :
                  </label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="emailaddres@mail.com"
                    onChange={handleChange}
                    value={values.email}
                    className="rounded-md bg-slate-200 min-w-[400px] text-center"
                  />
                  {touched.email && errors.email ? (
                    <div className="font-extraligh text-sm text-red-500">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password" className="flex">
                    Pasword :
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    onChange={handleChange}
                    value={values.password}
                    className="rounded-md bg-slate-200 min-w-[400px] text-center"
                  />
                  {touched.password && errors.password ? (
                    <div className="font-extraligh text-sm text-red-500">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="bg-slate-500 rounded-full p-2 mt-6"
                >
                  Register
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterPage;
