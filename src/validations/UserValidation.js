const UserValidation = (values) => {
  const errors = {};

  if (!values.nama) {
    errors.nama = 'Required'
  } else if (values.nama.length > 15) {
    errors.nama = 'Must be 15 characters or less'
  }
  if (!values.eKTP || values.eKTP === "") {
    errors.eKTP = "eKTP is required";
  }
  if (!values.alamat || values.alamat === "") {
    errors.alamat = "Address is required";
  }
  if (!values.pekerjaan || values.pekerjaan === "") {
    errors.pekerjaan = "Job is required";
  }
  if (!values.tgl_lahir || values.tgl_lahir === "") {
    errors.tgl_lahir = "Date of Birth is required";
  }
  if (!values.nohp || values.nohp === "") {
    errors.nohp = "Phone Number is required";
  }

  return errors;
};

export default UserValidation;
