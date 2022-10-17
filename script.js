const form = document.forms[0];
// fungsi ketika form disubmit
const formHandler = (e) => {
  // untuk menghentikan proses default dari form
  e.preventDefault();
  // inisialisasi nilai dari hobby
  const hobby = [];
  // disimpan dalam array karena data akan lebih dari satu
  form.hobby.forEach((item) => (item.checked ? hobby.push(item.value) : null));
  // inisialisasi nilai dari form dengan destructuring array
  const [nama, tgl, bln, thn, alamat, kota, pekerjaan, jk] = [form.nama.value, form.tgl.value, form.bln.value, form.thn.value, form.alamat.value, form.kota.value, form.pekerjaan.value, form.jk.value];
  // memvalidasi form || jangan ada nilai yang kosong
  if (!nama || !tgl || !bln || !thn || !alamat || !kota || !pekerjaan || !jk || !hobby.length) {
    return alert('DATA TIDAK BOLEH KOSONG!');
  }
  // menyimpan data ke localStorage
  const data = {
    nama,
    ttl: `${tgl}/${bln}/${thn}`,
    alamat,
    kota,
    pekerjaan,
    jk,
    hobby
  }
  putData(data);
  renderData();
  // pesan berhasil
  alert('DATA BERHASIL DISIMPAN!');
  // mereset form || mengosongkan form
  form.reset();
};
