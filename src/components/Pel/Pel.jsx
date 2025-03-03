import React from "react";
import CountdownTimer from "../set/CountdownTimer";
import Garansi from "../set/Garansi";

import Floting from "./Floting";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import Funnel from "../FunnelAtc";

const Pel = () => {
  return (
    <div className="m-2">
      <div className="grid justify-center items-center">
        <div className="flex justify-center">
          <img
            src="images/headline.webp"
            alt="haedline"
            width="640"
            height="360"
          />
        </div>
        <br />
        <br />
        <div className="grid justify-center items-center text-center text-redto font-bold">
          <p className="text-4xl">CAPEK JOK MOBIL KERJA CEPET ROBEK?</p>
          <br />
          <br />

          <div className="text-3xl">
            <p>INILAH SARUNG JOK PICKUP & TRUK YANG AWET HINGGA 3 TAHUN</p>
          </div>
          <br />
          <br />

          <div className="grid text-goldento text-2xl text-center">
            <div className="flex justify-center items-center text-3xl">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
            <br />
            <div className="text-black">
              <p>4.7 Rating</p>
              <p>Terjual 639 +</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="grid justify-center items-center text-center">
        <h1 className="font-bold text-2xl m-2">
          Diskon <span className="text-redto font-bold">50%</span> Khusus Untuk
          Hari Ini
        </h1>
        <br />
        <p className="font-bold text-2xl">Promo Akan Berakhir Dalam : </p>
        <br />
        <CountdownTimer hours={1} minutes={0} seconds={0} />
        <br />
      </div>
      <Garansi />
      <br />

      <div>
        <div className="grid justify-center items-center">
          <br />
          {/* <img
            src="images/pel/tangansakit.webp"
            alt="tanganpain"
            width="640"
            height="360"
          /> */}
          <br />
          <br />
          <p className="uppercase text-center font-bold text-4xl m-2 text-redto">
            Kamu mengalami masalah ini ?
          </p>
          <br />
          <br />
          <p className=" text-center font-bold text-2xl m-2">
            Jok Pickup & Truk Cepet Rusak ?
          </p>
          <p className=" text-center font-bold text-2xl m-2">
            Beli Sarung Jok Murah dan Cepet Robek Lagi ?
          </p>
        </div>
        <br />
        <div className="grid justify-center items-center text-center">
          <br />
          <p className=" text-center font-bold text-2xl m-2">
            KALAU IYA, ANDA TIDAK PERLU KHAWATIR LAGI!
          </p>
          <img src="images/2.webp" alt="jok" width="640" height="360" />
          <br />
          {/* <p>
            Karena dengan "Pel Anti Pegal", Anda tidak perlu lagi capek & pegal
            memeras kain pel di hidup Anda lagi.
          </p> */}
          <br />
        </div>
        <div className="flex justify-center items-center">
          {/* <img
            src="images/pel/peras.webp"
            alt="peras"
            width="640"
            height="360"
          /> */}
        </div>

        <div className="text-xl space-y-2">
          <br />
          <div className="text-center ">
            <br />
            <br />
            <p className="font-bold text-center">
              Apa itu Sarung Jok Mobil Anti Robek?
            </p>
            <br />
            <p>
              Sarung Jok Mobil Anti Robek" adalah sarung jok yang dirancang
              khusus untuk kendaraan kerja seperti Pickup & Truk
            </p>
            <p>
              dengan bahan tebal, anti air, dan kuat hingga 3 tahun pemakaian.
            </p>
            <br />
            <br />
            <br />
          </div>
          <br />
          <br />
          <p className="font-bold text-center text-2xl ">
            Kenapa Pilih Sarung Jok Kami?
          </p>
          <ul className="list-outside list-disc grid text-justify  justify-center items-center p-4">
            <li>
              🚚 Dirancang Khusus Buat Pickup & Truk Kerja – Tahan Cuaca & Beban
              Berat
            </li>
            <li>💪 Bahan Tebal + Jahitan Kuat (Tahan Hingga 3 Tahun)</li>
            <li>
              🔥 Custom Fit Sesuai Model Mobil (Bukan Universal Size Murahan)
            </li>
            <li>✅ Anti Air, Debu, & Bau</li>
            <li>⏳ Pemasangan Gampang, Cuma 5 Menit!</li>
            <li>🌈 Request Warna & Request Jenis Mobil</li>
          </ul>
          <br />
        </div>
        <br />
        <br />
        <br />

        <div className="grid justify-center items-center m-2">
          <br />
          <img src="images/1.webp" alt="promo" width="640" height="360" />
          <br />
          <img src="images/2.webp" alt="promo" width="640" height="360" />
          <br />
          <img src="images/3.webp" alt="promo" width="640" height="360" />
        </div>

          <br />
          <br />
          <br />
        <div>
          <div className="grid justify-center items-center m-2">
            <h1 className="font-bold text-center text-4xl">TESTIMONI</h1>
            <br />
            <img
              src="images/testi1.webp"
              alt="promo"
              width="640"
              height="360"
            />
            <img
              src="images/testi2.webp"
              alt="promo"
              width="640"
              height="360"
            />
            <img
              src="images/testi3.webp"
              alt="promo"
              width="640"
              height="360"
            />
            <br />
            <img
              src="images/diskonspesial.webp"
              alt="promo"
              width="640"
              height="360"
            />
            <img src="images/offer.webp" alt="promo" width="640" height="360" />
          </div>
          <br />
          <div className="p-4 bg-yellto text-center">
            <p className="font-bold">Promo Akan Berakhir Dalam : </p>
            <CountdownTimer hours={1} minutes={0} seconds={0} />
          </div>
          <br />
          <br />
          <h1 className="text-center font-bold p-2 text-2xl" id="formulir">
            Isi Formulir untuk melakukan pemesanan
          </h1>
          <br />
          <br />
          <div className="text-center space-x-6 text-redto text-5xl animate-bounce">
            <FontAwesomeIcon icon={faArrowDown} />
            <FontAwesomeIcon icon={faArrowDown} />
            <FontAwesomeIcon icon={faArrowDown} />
          </div>

          {/* <div className="text-center flex justify-center items-center gap-2 bg-greentoo/20 p-2">
            <span className="relative flex h-3 w-3 items-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-greento opacity-95"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-greento"></span>
            </span>
            <p className="text-sm">
              {" "}
              73 orang sekarang sedang ingin mengambil promo!
            </p>
          </div> */}
          <div id="form">
            <Funnel />
            {/* <Form /> */}
          </div>
        </div>

        <br />
        <br />
        <div className="grid justify-center items-center">
          <img
            src="images/fotter2.webp"
            alt="footer"
            width="640"
            height="360"
          />
          <img src="images/sek.webp" alt="footer" width="640" height="360" />
          <img src="images/fotter.webp" alt="footer" width="640" height="360" />
        </div>
        <br />
      </div>
      <Floting />
      {/* end div */}
    </div>
  );
};

export default Pel;
