import React from "react";

const App = () => {
  return (
    <div>
      <div className="register-box">
        <h2>Ro'yxatdan o'tish</h2>
        <input type="text" placeholder="Foydalanuvchi nomi" name="username" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Parol" name="password" />
        <input
          type="password"
          placeholder="Parolni qayta kiriting"
          name="confirm-password"
        />
        <button onclick="register()">Ro'yxatdan o'tish</button>
      </div>
    </div>
  );
};

export default App;
