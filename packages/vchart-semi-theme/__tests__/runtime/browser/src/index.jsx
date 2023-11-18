import React from 'react';
import { createRoot } from 'react-dom/client';
import Frame from './frame.jsx';
import './normalize.css';
import { initVChartSemiTheme } from '../../../../src';

initVChartSemiTheme();

const dom = document.querySelector('#root');
const root = createRoot(dom);
root.render(<Frame />);
