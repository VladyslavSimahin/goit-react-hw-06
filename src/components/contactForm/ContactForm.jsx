import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useId } from "react";
import css from "./ContactForm.module.css";
export const ContactForm = ({ onAdd }) => {
  const username = useId();
  const numberID = useId();

  const handleSubmite = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmite}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label htmlFor={username} className={css.inputfield}>
            Name
          </label>
          <Field type="text" name="name" id={username} className={css.label} />

          <ErrorMessage name="name" component="div" className={css.required} />
          <label htmlFor={numberID} className={css.inputfield}>
            Number
          </label>
          <Field type="tel" name="number" id={numberID} className={css.label} />
          <ErrorMessage
            name="number"
            component="div"
            className={css.required}
          />
          <button type="submit" className={css.submitbutton}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
