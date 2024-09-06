function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        document.getElementById('bmiValue').innerText = `BMI: ${bmi}`;
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else if (bmi >= 30 && bmi <= 34.9) {
            category = 'Obese class I';
        } else if (bmi >= 35 && bmi <= 39.9) {
            category = 'Obese class II';
        } else if (bmi >= 40) {
            category = 'Obese class III';
        }

        document.getElementById('bmiCategory').innerText = `Kategori: ${category}`;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Mohon masukkan berat badan dan tinggi badan.');
    }
}
