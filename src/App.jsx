import React from "react";

const App = () => {
  return (
    <div>
      <div className="register-box">
        <h2>Ro'yxatdan o'tish</h2>
        <input type="text" placeholder="Foydalanuvchi nomi" name="username" />
        <input type="email" placeholder="Email" name="email" />
        <div class="input-group">
          <input
            type="password"
            placeholder="Parol"
            name="password"
            id="password"
          />
          <span class="eye-icon" onclick="togglePassword('password', this)">
            👁️
          </span>
        </div>

        <div class="input-group">
          <input
            type="password"
            placeholder="Parolni qayta kiriting"
            name="confirm-password"
            id="confirm-password"
          />
          <span
            class="eye-icon"
            onclick="togglePassword('confirm-password', this)"
          >
            👁️
          </span>
        </div>
        <button onclick="register()">Ro'yxatdan o'tish</button>
      </div>
    </div>
  );
};

export default App;
