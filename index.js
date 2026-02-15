const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// যেহেতু আপনার index.html কোনো public ফোল্ডারে নেই, তাই সরাসরি নিচের মতো লিখুন:
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// UptimeRobot এর জন্য Ping route
app.get('/ping', (req, res) => {
    res.send('Server is Online ⚡');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
