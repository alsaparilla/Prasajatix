const admin = require("firebase-admin");
const fs = require("fs");

// Load your service account key file here
const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Read the JSON file
const products = JSON.parse(fs.readFileSync("products.json", "utf8"));

// Upload each product
async function uploadProducts() {
  const batch = db.batch();

  products.forEach((product, index) => {
    const docRef = db.collection("product").doc(); // auto-generate ID
    batch.set(docRef, product);
  });

  await batch.commit();
  console.log("Products uploaded successfully!");
}

uploadProducts().catch(console.error);
