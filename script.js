const passwordInput = document.getElementById('password');
const emoji = document.getElementById('emoji');
const strengthText = document.getElementById('strength');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = getStrength(password);

  if (strength === "Weak") {
    emoji.textContent = "😐";
    strengthText.textContent = "Weak Password";
    strengthText.style.color = "#e74c3c";
  } else if (strength === "Medium") {
    emoji.textContent = "😏";
    strengthText.textContent = "Medium Password";
    strengthText.style.color = "#f39c12";
  } else if (strength === "Strong") {
    emoji.textContent = "😎";
    strengthText.textContent = "Strong Password";
    strengthText.style.color = "#27ae60";
  } else {
    emoji.textContent = "😐";
    strengthText.textContent = "Start typing...";
    strengthText.style.color = "#555";
  }
});

function getStrength(password) {
  if (password.length === 0) return "";
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);

  const lengthScore = password.length >= 8;
  const varietyScore = [hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

  if (lengthScore && varietyScore >= 3) return "Strong";
  if (varietyScore >= 2) return "Medium";
  return "Weak";
}