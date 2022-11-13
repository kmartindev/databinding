const pic = document.querySelector('.user__pic');
const input = document.querySelector('.user__name');
const button = document.querySelector('.user__random-name');

const data = {
  _value: 'Pavlin',
  get value() {
    return this._value;
  },
  set value(newValue) {
    this._value = newValue;
    input.value = newValue;
    pic.src = `https://avatars.dicebear.com/api/bottts/${newValue.replace('/\s/g', '')}.svg`;
  }
}

data.value = data.value;
button.addEventListener('click', () => data.value = `Пользователь ${Math.random().toFixed(3) * 1000}`);
input.addEventListener('input', ({target}) => data.value = target.value);
