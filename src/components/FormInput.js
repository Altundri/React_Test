function FormInput({ handleChange, formInputData, handleSubmit }) {
  return (
    <div className="form-row row">
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.fullName}
          name="fullName"
          className="form-control"
          placeholder="Full Name"
        />
      </div>
      <div className="col">
        <input
          type="date"
          onChange={handleChange}
          value={formInputData.tgl_lahir}
          name="tgl_lahir"
          className="form-control"
        />
      </div>
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.hubungan}
          name="hubungan"
          className="form-control"
          placeholder="Status"
        />
      </div>
      <div className="col">
        <input
          type="submit"
          value= "Add"
          onClick={handleSubmit}
          className="btn btn-primary"
        />
      </div>
    </div>
  );
}
export default FormInput;
