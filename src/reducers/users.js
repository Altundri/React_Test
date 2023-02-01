let initialState = {
  users: [
    {
      id: 1,
      nama: "Altundri Wahyu",
      eKTP: "1671120310000002",
      alamat: "Jalan Sudirman",
      pekerjaan: "Programmer",
      tgl_lahir: "03-10-2000",
      nohp: "087884649035",
    },
    {
      id: 2,
      nama: "Ahmad Marzuqi Yasykur Luthfi",
      eKTP: "1671120310000003",
      alamat: "Kenten",
      pekerjaan: "Programmer",
      tgl_lahir: "14-02-2000",
      nohp: "087808473924",
    },
    {
      id: 3,
      nama: "Sultan",
      eKTP: "1671120310021421",
      alamat: "Mata Merah",
      pekerjaan: "Programmer",
      tgl_lahir: "15-01-2001",
      nohp: "081295489534",
    },
  ],
  error: false,
};
const users = (state = initialState, action) => {
  return state;
};

export default users;
