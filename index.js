const express = require('express');
const path = require('path');
const app = express();

// Render স্বয়ংক্রিয়ভাবে Port নির্ধারণ করবে, না থাকলে ৩০০০ ব্যবহার করবে
const PORT = process.env.PORT || 3000;

// public ফোল্ডার থেকে ফাইল সার্ভ করবে
app.use(express.static(path.join(__dirname, 'public')));

// প্রধান রুট (Home Page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// UptimeRobot-এর জন্য Ping রুট (২৪ ঘণ্টা সচল রাখতে)
app.get('/ping', (req, res) => {
    res.send('Server is Online ⚡');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
