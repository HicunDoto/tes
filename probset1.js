function codeGenerator(regType = "", sequence) {
  const data = {
    regType: regType,
    currentDate: new Date(),
    seq: sequence,
  };
  let tanggal = data.currentDate;

  let year1 = new Intl.DateTimeFormat("en", { year: "numeric" }).format(tanggal);
  let year2 = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(tanggal);
  let month = new Intl.DateTimeFormat("en", { month: "numeric" }).format(tanggal);
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(tanggal);

  let outputFormat1 = `${String(data.seq).padStart(4, "0")}-${year1}/${month}/${day}-${data.regType}`;
  let outputFormat2 = `${data.regType}/${year2}${month}${day}/${String(data.seq).padStart(4, "0")}`;

  console.log("kode invoice tas barang : ", outputFormat1);
  console.log("Barang : Tas Zara");
  console.log("Unit : Tas");
  console.log("Qty : 1");
  console.log("Total : Rp 3.000.000");
  console.log("kode invoice tas barang : ", outputFormat2);
}
