import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

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
  const handleSubmit = (values, actions) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.inputfield}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id="name"
            className={css.label}
            autoComplete="off"
          />

          <ErrorMessage name="name" component="div" className={css.required} />
          <label htmlFor="number" className={css.inputfield}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id="number"
            className={css.label}
            autoComplete="off"
          />
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
