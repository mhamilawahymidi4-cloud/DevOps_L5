// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files (like CSS)
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f0f0f0;
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    color: #333;
                }
                p {
                    font-size: 18px;
                    color: #666;
                }
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background: #007BFF;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;
                }
                button:hover {
                    background: #0056b3;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to My Express App!</h1>
            <p>This is a clean interface served by Express.</p>
            <button onclick="alert('Hello from your app!')">Click Me</button>
        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});