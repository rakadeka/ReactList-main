import React from "react";
import {Routes, Route} from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from "./tentangsaya";
import Karya from "./karya";
import Kontak from "./kontak";
import Gallery from './Gallery';
import "../App.css"

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Beranda />} />
        <Route path="/tentangsaya" element={<TentangSaya />} />
        <Route path="/karya" element={<Karya />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/Gallery" element={<Gallery />} />
    </Routes>
)

export default Utama;