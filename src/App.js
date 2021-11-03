import React from 'react';
import { Categories } from './components/Categories';
import { AppliedFilters } from './components/AppliedFilters';
import { FiltersProvider } from './filters.context';
import './style/index.css';

export default function App() {

  return (
    <FiltersProvider>
      <Categories />
      <AppliedFilters />
    </FiltersProvider>
  )
}
