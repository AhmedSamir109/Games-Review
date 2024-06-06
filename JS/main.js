import { Games } from "./gameModule.js";

export const loading = document.querySelector('.loading');
export const games = document.querySelector('.games');
export const details = document.querySelector('.details');
export const detailsContent = document.getElementById('detailsContent');
new Games();
