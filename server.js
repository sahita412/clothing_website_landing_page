
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const clothingItems = [
    { id: 1, name: 'T-Shirt', price: 19.99 },
    { id: 2, name: 'Jeans', price: 39.99 },
    { id: 3, name: 'Jacket', price: 79.99 },
    { id: 4, name: 'Sweater', price: 49.99 },
    { id: 5, name: 'Hoodie', price: 59.99 },
    { id: 6, name: 'Shorts', price: 29.99 },
    { id: 7, name: 'Sneakers', price: 89.99 },
    { id: 8, name: 'Cap', price: 14.99 },
    { id: 9, name: 'Dress', price: 49.99 },
    { id: 10, name: 'Blouse', price: 39.99 },
    { id: 11, name: 'Skirt', price: 34.99 },
    { id: 12, name: 'Sandals', price: 24.99 },
    { id: 13, name: 'Boots', price: 99.99 },
    { id: 14, name: 'Socks', price: 9.99 },
    { id: 15, name: 'Belt', price: 19.99 },
    { id: 16, name: 'Scarf', price: 14.99 },
    { id: 17, name: 'Gloves', price: 19.99 },
    { id: 18, name: 'Sunglasses', price: 29.99 },
    { id: 19, name: 'Watch', price: 199.99 },
    { id: 20, name: 'Wallet', price: 49.99 },
    { id: 21, name: 'Tie', price: 24.99 },
    { id: 22, name: 'Bow Tie', price: 19.99 },
    { id: 23, name: 'Polo Shirt', price: 34.99 },
    { id: 24, name: 'Suit', price: 299.99 },
    { id: 25, name: 'Coat', price: 129.99 },
    { id: 26, name: 'Vest', price: 39.99 },
    { id: 27, name: 'Blazer', price: 99.99 },
    { id: 28, name: 'Cardigan', price: 49.99 },
    { id: 29, name: 'Leggings', price: 24.99 },
    { id: 30, name: 'Tank Top', price: 19.99 },
    { id: 31, name: 'Overalls', price: 59.99 },
    { id: 32, name: 'Trench Coat', price: 149.99 },
    { id: 33, name: 'Raincoat', price: 89.99 },
    { id: 34, name: 'Puffer Jacket', price: 109.99 },
    { id: 35, name: 'Ankle Boots', price: 79.99 },
    { id: 36, name: 'Heels', price: 69.99 },
    { id: 37, name: 'Loafers', price: 59.99 },
    { id: 38, name: 'Moccasins', price: 49.99 },
    { id: 39, name: 'Flip Flops', price: 14.99 },
    { id: 40, name: 'Slippers', price: 19.99 },
    { id: 41, name: 'Bikini', price: 29.99 },
    { id: 42, name: 'Swim Trunks', price: 24.99 },
    { id: 43, name: 'Tracksuit', price: 49.99 },
    { id: 44, name: 'Yoga Pants', price: 39.99 },
    { id: 45, name: 'Sports Bra', price: 29.99 },
    { id: 46, name: 'Gym Shorts', price: 24.99 },
    { id: 47, name: 'Windbreaker', price: 59.99 },
    { id: 48, name: 'Thermal Shirt', price: 29.99 },
    { id: 49, name: 'Beanie', price: 14.99 },
    { id: 50, name: 'Baseball Jacket', price: 79.99 },
];

app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = clothingItems.filter(item => item.name.toLowerCase().includes(query));
    res.json(results);
});

app.get('/recommendations', (req, res) => {
    const recommendations = clothingItems.slice(0, 5);
    res.json(recommendations);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
