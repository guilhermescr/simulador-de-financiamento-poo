// Author: Guilherme Rocha
// Started in 12/07/2022

import { Financiamento } from './financiamento.mjs';

const comCarencia = document.querySelector('#withNeed');
const listaSuspensa = document.getElementById('listaSuspensa');

comCarencia.addEventListener('change', function() {
  listaSuspensa.toggleAttribute('hidden');
});