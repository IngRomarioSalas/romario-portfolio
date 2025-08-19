const ContactForm = () => {
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Requerido"),
        email: Yup.string().email("Email inválido").required("Requerido"),
        message: Yup.string().required("Requerido"),
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  
    return (
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && <p>{formik.errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <p>{formik.errors.email}</p>}
        <textarea
          name="message"
          placeholder="Mensaje"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        {formik.errors.message && <p>{formik.errors.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    );
  };
  
  export default ContactForm;