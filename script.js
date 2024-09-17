function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (!amount || !fromCurrency || !toCurrency) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Здесь нужно добавить логику для конвертации валют
    // Пример фиксированного курса (просто для иллюстрации)
    const rates = {
        USD: { EUR: 0.93, RUB: 96.12 },
        EUR: { USD: 1.08, RUB: 103.66 },
        RUB: { USD: 0.010, EUR: 0.0097 }
    };

    const conversionRate = rates[fromCurrency][toCurrency];
    const result = amount * conversionRate;

    document.getElementById('result').innerText = `Результат: ${result.toFixed(2)} ${toCurrency}`;
}