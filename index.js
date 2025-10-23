const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/:date?', (req, res) => {
    const { date } = req.params;
     let parsedDate;

     if (!date) {
        parsedDate = new Date();
     } else if (/^\d+$/.test(date)) {
        parsedDate = new Date(parseInt(date));
     } else {
        parsedDate = new Date(date);
     }

     if (parsedDate.toString() === "Invalid Date") {
        return res.json({ error: "Invalid Date" });
     }

     res.json({
        unix: parsedDate.getTime(),
        utc: parsedDate.toUTCString()
     });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});