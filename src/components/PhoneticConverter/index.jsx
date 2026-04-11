import React, { useState } from 'react';
import styles from './styles.module.css';

const PHONETIC = {
  A: 'Alpha', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo',
  F: 'Foxtrot', G: 'Golf', H: 'Hotel', I: 'India', J: 'Juliett',
  K: 'Kilo', L: 'Lima', M: 'Mike', N: 'November', O: 'Oscar',
  P: 'Papa', Q: 'Quebec', R: 'Romeo', S: 'Sierra', T: 'Tango',
  U: 'Uniform', V: 'Victor', W: 'Whiskey', X: 'X-ray', Y: 'Yankee',
  Z: 'Zulu',
  0: 'Zero', 1: 'Um', 2: 'Dois', 3: 'Tres', 4: 'Quatro',
  5: 'Cinco', 6: 'Seis', 7: 'Sete', 8: 'Oito', 9: 'Nove',
};

export default function PhoneticConverter() {
  const [value, setValue] = useState('');

  function handleChange(e) {
    const filtered = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    setValue(filtered);
  }

  const result = value
    .split('')
    .map(c => PHONETIC[c])
    .join(' ');

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Ex.: PY2AB"
        value={value}
        onChange={handleChange}
        maxLength={20}
      />
      {result && (
        <div className={styles.result}>
          {result}
        </div>
      )}
    </div>
  );
}
