export const users = {
  standard: { username: 'standard_user',  password: 'secret_sauce' },
  locked:   { username: 'locked_out_user', password: 'secret_sauce' },
  problem:  { username: 'problem_user',    password: 'secret_sauce' },
} as const;

export const products = {
  backpack:  'sauce-labs-backpack',
  bikeLight: 'sauce-labs-bike-light',
  boltsShirt:'sauce-labs-bolt-t-shirt',
} as const;
