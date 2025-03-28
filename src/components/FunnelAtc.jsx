import React, { useState } from "react";
import BundleOption from "./BundleOption";

const FunnelAtc = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [bundle, setBundle] = useState("Cover Sarung Jok");

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const handleAddToCart = (bundleTitle) => {
		setBundle(bundleTitle);
		console.log("AddToCart Clicked:", bundleTitle);
	
		if (window.fbq) {
			console.log("Triggering AddToCart Event"); // <- tambahin log biar yakin
			fbq("track", "AddToCart", {
				content_name: bundleTitle,
				content_category: "Product Bundle",
			});
			console.log("FB Pixel Event Sent!");
		} else {
			console.log("FB Pixel not loaded!");
		}
	};
	

	const handleSubmit = () => {
		if (!name || !whatsapp) {
			alert("Silakan isi semua data!");
			return;
		}
	
		// Tambahkan tracking di sini
		if (window.fbq) {
			fbq("track", "AddToCart", {
				content_name: bundle,
				content_category: "Product Bundle",
				value: selectedBundle.isPrice,
				currency: "IDR",
			});
		}
		
		const customerServiceNumber = "6289522539016";
		const selectedBundle = bundles.find(
			(bundleOption) => bundleOption.title === bundle
		);
		const message = `Halo, saya ${name}. Saya tertarik memesan ${selectedBundle.title} ${selectedBundle.description} dengan metode pembayaran ${paymentMethod}`;
	
		const whatsappURL = `https://wa.me/${customerServiceNumber}?text=${encodeURIComponent(message)}`;
		window.open(whatsappURL, "_blank");
	};
	
  const bundles = [
    {
      title: "Cover Sarung Jok",
      description: "Bonus 1 Sarung Stir",
      isRecommended: false,
      price: 790000,
      isPrice: 390000,
    },
    
  ];
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Data Penerima:</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="whatsapp"
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="No. WhatsApp Anda"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>
        {/* nama & wa end */}

        <h3 className="text-lg font-bold mb-3">Pilih Bundle:</h3>

        <div className="space-y-2">
          {bundles.map((bundleOption) => (
            <BundleOption
              key={bundleOption.title}
              title={bundleOption.title}
              description={bundleOption.description}
              isRecommended={bundleOption.isRecommended}
              isActive={bundle === bundleOption.title}
              price={bundleOption.price}
              isPrice={bundleOption.isPrice}
              onClick={() => handleAddToCart(bundleOption.title)} // Panggil AddToCart di sini
            />
          ))}
        </div>

        {/* metode pembayaran */}
        <br />
        <h3 className="text-lg font-bold mb-3">Metode Pembayaran:</h3>

        <div className="mb-4 ">
          <div
            className="flex items-center cursor-pointer border-2 p-4 rounded-md"
            onClick={() => handlePaymentChange("COD")}
          >
            <input
              type="radio"
              id="cod"
              name="payment"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={() => handlePaymentChange("COD")}
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="cod" className="cursor-pointer grid items-center">
              <div className="flex">
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                  COD
                </span>
              </div>
              Bayar di Tempat
            </label>
          </div>

          <div
            className="flex items-center cursor-pointer border-2 p-4 rounded-md"
            onClick={() => handlePaymentChange("Bank Transfer")}
          >
            <input
              type="radio"
              id="bank"
              name="payment"
              value="Bank Transfer"
              checked={paymentMethod === "Bank Transfer"}
              onChange={() => handlePaymentChange("Bank Transfer")}
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="bank" className="cursor-pointer grid items-center">
              <div>
                <span className="bg-blue-500 grid text-white text-xs font-bold px-2 py-1 rounded mr-2">
                  BANK
                  <span>TRANSFER</span>
                </span>
              </div>
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="w-full text-2xl bg-redto text-white font-bold py-2 px-4 rounded-lg hover:bg-redto/80 transition"
        >
          Konsultasi + Pesan Sekarang
        </button>
      </form>
    </div>
  );
};

export default FunnelAtc;
