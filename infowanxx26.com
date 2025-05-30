<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontak Kami - Tema Gaming</title>
    <style>
        /* Reset default styling */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Body styling */
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #000033, #000066);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Container styling */
        .container {
            max-width: 600px;
            padding: 30px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(0, 0, 255, 0.3);
            text-align: center;
            position: relative;
            z-index: 1;
        }

        /* Title styling */
        h1 {
            font-size: 2rem;
            font-weight: bold;
            color: #00ffff;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 20px;
        }

        /* Button styling */
        .button {
            display: inline-block;
            margin: 10px 5px;
            padding: 10px 20px;
            font-size: 1rem;
            font-weight: bold;
            color: #fff;
            background: linear-gradient(135deg, #00bfff, #00ffff);
            border: none;
            border-radius: 5px;
            text-decoration: none;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }

        .button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 255, 255, 0.5);
        }

        /* Contact info styling */
        .contact-info {
            margin-top: 20px;
        }

        .contact-info p {
            font-size: 1rem;
            margin: 10px 0;
            color: #b3e5fc;
        }

        /* Group section styling */
        .group {
            margin-top: 30px;
        }

        .group h2 {
            font-size: 1.5rem;
            color: #00ffff;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .group ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .group li {
            margin: 5px;
        }

        /* Background effect */
        .background-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent);
            pointer-events: none;
            z-index: 0;
        }
    </style>
</head>
<body>
    <div class="background-effect"></div>
    <div class="container">
        <h1>@wanxxstore26</h1>
        <div class="contact-info">
            <p><strong>Telegram Admin</strong></p>
            <a href="https://t.me/wanxxstore26" class="button">Telegram Wanxx26</a>

            <p><strong>Stok Wanxx Telegram #1</strong></p>
            <a href="https://t.me/stokwanxxhub26" class="button">Grup Stok Wanxx #1</a>

            <p><strong>Stock Wanxx Telegram #2</strong></p>
            <a href="https://t.me/stokwanxxupdate" class="button">Grup Stok Wanxx #2</a>
        </div>
        <div class="group">
            <h2>Grup jb & saluran</h2>
            <ul>
                <li><a href="https://chat.whatsapp.com/LvxrP6pTnSPEFmWcODQjcC" class="button">JB #1</a></li>
                <li><a href="https://chat.whatsapp.com/HEODVrHFKPa60wMWHMmhHq" class="button">JB #2</a></li>
                <li><a href="https://whatsapp.com/channel/0029VaiOvaq9RZAO4VSch423" class="button">SALURAN</a></li>
            </ul>
        </div>
    </div>
</body>
</html>
