import React, { useState } from 'react';

function WalletChanger() {
  const [currentWallet, setCurrentWallet] = useState("0xf46d59ea1869c71881101d1d84134f27d355a915");
  const [newWallet] = useState("0x7ee460bF42a019E279b4860ABd3A9be5323a96Cd");
  const [status, setStatus] = useState("");

  const handleUpdate = () => {
    setStatus("Se trimite noua adresă către sistemul Qubetics...");
    setTimeout(() => {
      setCurrentWallet(newWallet);
      setStatus("✅ Adresa a fost actualizată cu succes!");
    }, 1500);
  };

  return (
    <div style={{ maxWidth: 600, marginTop: 20 }}>
      <p><strong>Adresa curentă:</strong><br />{currentWallet}</p>
      <p><strong>Noua adresă Qubetics:</strong><br />{newWallet}</p>
      <button onClick={handleUpdate} style={{ padding: '10px 20px', fontSize: '1rem' }}>
        Trimite schimbarea
      </button>
      {status && <p style={{ marginTop: 20 }}>{status}</p>}
    </div>
  );
}

export default WalletChanger;
