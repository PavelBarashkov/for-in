/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import orderByProps from '../js/App';

test('app test', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sort = orderByProps(obj, ['name', 'level']);

  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(result).toEqual(sort);
});
