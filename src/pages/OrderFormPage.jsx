import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const OrderFormPage = () => {
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [toppings, setToppings] = useState([]);
  const [orderNote, setOrderNote] = useState('');
  const [quantity, setQuantity] = useState(1);

  const history = useHistory();

  const maxToppings = 10;
  const toppingsList = [
    'Sucuk', 'Mısır', 'Zeytin', 'Mantar', 'Yeşil Biber',
    'Kırmızı Biber', 'Ananas', 'Peynir', 'Domates',
    'Soğan', 'Sosis', 'Tavuk', 'Sarımsak', 'Roka'
  ];

  const pizzaPrice = 85.5; // Pizza fiyatı

  const handleToppingChange = (event) => {
    const { value } = event.target;
    if (toppings.includes(value)) {
      setToppings(toppings.filter((topping) => topping !== value));
    } else if (toppings.length < maxToppings) {
      setToppings([...toppings, value]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/success'); // Success sayfasına yönlendir
  };

  const totalPrice = (pizzaPrice + toppings.length * 5) * quantity; // Toplam fiyat hesaplama

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Teknolojik Yemekler</h1>
      <form onSubmit={handleSubmit}>

        {/* Pizza İsmi ve Fiyatı */}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <h2>Position Absolute Acı Pizza</h2>
          <p>Fiyat: 85.50 TL</p>
        </div>

        {/* Pizza Boyutu Seçimi */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Pizza Boyutu</h3>
          <label>
            <input 
              type="radio" 
              name="size" 
              value="Küçük" 
              onChange={(e) => setSize(e.target.value)} 
            />
            Küçük
          </label>
          <label>
            <input 
              type="radio" 
              name="size" 
              value="Orta" 
              onChange={(e) => setSize(e.target.value)} 
            />
            Orta
          </label>
          <label>
            <input 
              type="radio" 
              name="size" 
              value="Büyük" 
              onChange={(e) => setSize(e.target.value)} 
            />
            Büyük
          </label>
        </div>

        {/* Hamur Seçimi */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Hamur Seç</h3>
          <select value={dough} onChange={(e) => setDough(e.target.value)}>
            <option value="" disabled>Hamur kalınlığını seçin</option>
            <option value="İnce">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
          </select>
        </div>

        {/* Ek Malzemeler */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Ek Malzemeler (Maksimum 10)</h3>
          {toppingsList.map((topping) => (
            <div key={topping}>
              <label>
                <input 
                  type="checkbox" 
                  value={topping} 
                  checked={toppings.includes(topping)} 
                  onChange={handleToppingChange} 
                  disabled={!toppings.includes(topping) && toppings.length >= maxToppings}
                />
                {topping}
              </label>
            </div>
          ))}
        </div>

        {/* Sipariş Notu */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Sipariş Notu</h3>
          <textarea 
            value={orderNote}
            onChange={(e) => setOrderNote(e.target.value)}
            placeholder="Sipariş notunuzu buraya yazabilirsiniz..."
            style={{ width: '100%', height: '100px' }}
          />
        </div>

        {/* Sipariş Adedi ve Toplam Fiyat */}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button 
            type="button" 
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            style={{ marginRight: '10px' }}
          >
            -
          </button>
          <span>{quantity} Adet</span>
          <button 
            type="button" 
            onClick={() => setQuantity(quantity + 1)}
            style={{ marginLeft: '10px' }}
          >
            +
          </button>
          <p>Toplam Tutar: {totalPrice.toFixed(2)} TL</p>
        </div>

        {/* Sipariş Ver Butonu */}
        <button 
          type="submit" 
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#28a745',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Sipariş Ver
        </button>
      </form>
    </div>
  );
};

export default OrderFormPage;
