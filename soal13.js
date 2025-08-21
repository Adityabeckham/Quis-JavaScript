const campur = [123, "456", true, null, undefined, {a:1}, [1,2]];

campur.forEach(item => {
  const type = typeof item;
  let kategori = "";

  if (item === null) {
    kategori = "null";
  } else if (Array.isArray(item)) {
    kategori = "array";
  } else if (type === "number") {
    kategori = "angka";
  } else if (type === "string") {
    kategori = "teks";
  } else if (type === "boolean") {
    kategori = "boolean";
  } else if (type === "undefined") {
    kategori = "undefined";
  } else if (type === "object") {
    kategori = "object";
  }

  console.log(`${item} → ${type} → ${kategori}`);
});

