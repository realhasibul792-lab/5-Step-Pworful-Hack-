const express = require('express');
const path = require('path');
const app = express();

// Render স্বয়ংক্রিয়ভাবে Port নির্ধারণ করবে
const PORT = process.env.PORT || 3000;

// যেহেতু আপনার ফাইলটি কোনো ফোল্ডারে নেই, তাই সরাসরি মেইন ডিরেক্টরি থেকে সার্ভ করুন
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// UptimeRobot এর জন্য Ping রুট
app.get('/ping', (req, res) => {
    res.send('VeltriX Pro is Live ⚡');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
